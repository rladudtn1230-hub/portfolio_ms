"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function Product({ productData, imageWidth = 744, imageHeight = 891}) {
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [modalIsMove, setModalIsMove] = useState(true);
    const slideWrapRef = useRef(null);
    const modalRef = useRef(null);
    const modalIsMoveRef = useRef(true);
    const [touchStartY, setTouchStartY] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        return window.innerWidth >= 768;
      };
      
      // 초기 설정
      setIsDesktop(checkScreenSize());
      
      // resize 이벤트 리스너
      const handleResize = () => {
        setIsDesktop(checkScreenSize());
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);    
    
    useEffect(() => {
      if(!isDesktop) return;
      window.addEventListener("scroll", ()=>{        
        if(isOpen){          
          if(slideWrapRef.current.offsetTop >= window.scrollY + window.innerHeight || slideWrapRef.current.offsetTop + slideWrapRef.current.offsetHeight <= window.scrollY){
            setIsOpen(false);
          }
        }
      })
    }, [isOpen, isDesktop])

    // 모달 위치 제어 useEffect
    useEffect(() => {
      if(!isDesktop) return;
      const checkScreenSize = () => {
        return window.innerWidth >= 768;
      };
      if (!checkScreenSize()) {
        return; // 768px 미만이면 실행하지 않음
      }
      const handleMouseMove = (e) => {        
        if (modalIsMove && modalRef.current) {
          setTimeout(() => {
            modalRef.current.style.left = `${e.clientX}px`;
            modalRef.current.style.top = `${e.clientY}px`;
          }, 100)
        }
      };

      // 이벤트 리스너 등록
      if (slideWrapRef.current) {
        slideWrapRef.current.addEventListener("mousemove", handleMouseMove);
      }

      // cleanup 함수
      return () => {
        if (slideWrapRef.current) {
          slideWrapRef.current.removeEventListener("mousemove", handleMouseMove);
        }
      };
    }, [modalIsMove, isDesktop]) 

    // productData가 배열인지 확인
    if (!productData || !Array.isArray(productData)) {
        return <div>상품 데이터를 불러올 수 없습니다.</div>;
    } 
    
    return (
      <>        
        <div className="slide_wrap" ref={slideWrapRef} onMouseLeave={() => {setIsOpen(false);}}>
          <Swiper
            modules={[Autoplay]}
            loop={true}                    
            slidesPerView={1}
            loopAdditionalSlides={1}
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
            }}
            breakpoints = {{
              768: {
                slidesPerView: 2,
                spaceBetween: 115,                
              }
              
            }}                        
          >     
          {productData.map((item, i) => (
            <SwiperSlide 
              key={i} 
              className="swiper-slide"
              onMouseEnter={() => {setIsOpen(true); setSelectedProduct(i);}}               
              onTouchStart={(e) => {
                if (e.touches && e.touches[0]) {
                  setTouchStartY(e.touches[0].clientY);
                  setTouchStartX(e.touches[0].clientX);
                }
              }}
              onTouchEnd={(e) => {
                if (e.changedTouches && e.changedTouches[0]) {
                  const touchEndY = e.changedTouches[0].clientY;
                  const touchEndX = e.changedTouches[0].clientX;
                  const deltaY = Math.abs(touchEndY - touchStartY);
                  const deltaX = Math.abs(touchEndX - touchStartX);
                  
                  // 움직임이 적을 때만 모달 열기
                  if (deltaY < 10 && deltaX < 10) {
                    setIsOpen(true);
                    setSelectedProduct(i);
                  }
                }
              }}
            >
              <a>
                <Image src={item.src} alt={item.name} width={imageWidth} height={imageHeight} />                
              </a>
              {/* <div className='hover_shape'></div> */}
            </SwiperSlide>           
          ))}            
          </Swiper>
          <div 
            className={`product_modal_wrap ${isOpen ? 'active' : ''}`} 
            ref={modalRef} 
            onMouseEnter={() => {
              setModalIsMove(false);
              modalIsMoveRef.current = false;  // useRef도 함께 업데이트
            }} 
            onMouseLeave={() => {
              setModalIsMove(true);
              modalIsMoveRef.current = true;   // useRef도 함께 업데이트
            }}       
          >
            <div className="img">
            <Image 
                src={productData[selectedProduct]?.src || productData[0]?.src} 
                alt={productData[selectedProduct]?.name || productData[0]?.name} 
                width={imageWidth} 
                height={imageHeight}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsOpen(false);
                }}
            />
            </div>
            <div className="txt_wrap">
              <h3>&quot;{productData[selectedProduct].name}” - {productData[selectedProduct].category}</h3>
              <div className="bottom_txt">
                <span>Mom doesn&apos;t like these Tshirts</span>
                <Link href={`./?${productData[selectedProduct]?.id || selectedProduct}`}>View Point</Link>
              </div>
            </div>            
          </div>
        </div>
        <div className="more_btn_wrap">
          <Link className="more_btn" href="./">More</Link>
        </div>        
      </> 
    )
}