"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

export default function Product({ productData, imageWidth = 744, imageHeight = 891, popupWidth = 833, popupHeight = 1000 }) {
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const {
      name,      
      src,
      category,    
    } = productData;
    return (
      <>
        <div className="slide_wrap" onMouseLeave={() => {setIsOpen(false);}}>
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
              <Image src={productData[selectedProduct]?.src} alt={productData[selectedProduct]?.name} width={imageWidth} height={imageHeight} />
            </div>
            <div className="txt_wrap">
              <h3>&quot;{productData[selectedProduct].name}” - {productData[selectedProduct].category}</h3>
              <div className="bottom_txt">
                <span>Mom doesn&apos;t like these Tshirts</span>
                <Link href={`./?${productData[selectedProduct].id}`}>View Point</Link>
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