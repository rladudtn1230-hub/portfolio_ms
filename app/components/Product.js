"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from 'react';

export default function Product({ productData, imageWidth = 744, imageHeight = 891, popupWidth = 833, popupHeight = 1000 }) {
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [isOpen, setIsOpen] = useState(false);    
    const slideWrapRef = useRef(null);
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
            slidesPerView={2}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
            }}
          >     
          {productData.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <a onMouseEnter={() => {setIsOpen(true); setSelectedProduct(i);}}>
                <Image src={item.src} alt={item.name} width={imageWidth} height={imageHeight} />                
              </a>
            </SwiperSlide>           
          ))}            
          </Swiper>
          <div className={`product_modal_wrap ${isOpen ? 'active' : ''}`}>
            <div className="img">
            <Image 
                src={productData[selectedProduct]?.src || productData[0]?.src} 
                alt={productData[selectedProduct]?.name || productData[0]?.name} 
                width={popupWidth} 
                height={popupHeight} 
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