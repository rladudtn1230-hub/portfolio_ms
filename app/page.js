'use client'

import Image from "next/image";
import './css/main.css';

import Product from "./components/Product";
import { productData } from "./data/products";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from "./components/AnimatedText";
import ProgressBar from "./components/ProgressBar";
import Symbol from "./components/Symbol";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="main_container">
      <Main_1 />
      <Main_2 />
      <Main_3 />
      <Main_4 />
      <Main_5 />
      <Main_6 />
      <Main_7 />
      <Main_8 />
    </div>
  );
}


function Main_1() {
  const [iconOpen, setIconOpen] = useState(false);
  return (
    <section className="main_1">
        <div className="w1600">
          <div className="main_1_visual">
            <div className={`center_icon_wrap ${iconOpen ? 'on' : ''}`} onClick={() => setIconOpen(!iconOpen)} onTouchEnd={() => setIconOpen(!iconOpen)}>
                <div className="symbol_wrap">
                  <Symbol />
                </div>
                <div className="plus_btn">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                </div>
            </div>
            <div className="txt_container">
              <div className="lt_txt_wrap txt_wrap">
                <ul className="txt_list">
                  <AnimatedText text="GAINSAYER" />
                  <AnimatedText text="HATER" />
                  <AnimatedText text="HAVE YOUR DOUBTS" />
                  <AnimatedText text="TRIGGER" />
                </ul>
                <ul className="txt_list">                
                  <AnimatedText text="2025.08" />
                  <AnimatedText text="MOM & DAD" />
                  <AnimatedText text="(ABOUT SOMETHING)" />
                  <AnimatedText text="MONEY" />                
                </ul>
              </div>            
              <div className="rt_txt_wrap txt_wrap">             
                <ul className="txt_list">
                  <AnimatedText text="GAINSAYER" />
                  <AnimatedText text="HATER" />
                  <AnimatedText text="HAVE YOUR DOUBTS" />
                  <AnimatedText text="TRIGGER" />
                </ul>
                <ul className="txt_list">                
                  <AnimatedText text="2025.08" />
                  <AnimatedText text="MOM & DAD" />
                  <AnimatedText text="(ABOUT SOMETHING)" />
                  <AnimatedText text="MONEY" />                
                </ul>
              </div>
            </div>
          </div>
          <p className="down_txt">Mom said, &quot;I HATE GAINSAYER&quot;</p>
        </div>       
      </section>
  );
}

function Main_2(){
  
  const animationRollerRef = useRef(null);  
  const contentWrapRef = useRef(null);
  const imgWrapRef = useRef(null);

  useEffect(() => {
      const initViewportSticky = (element, container) => {        
          const handleScroll = () => {
              const containerTop = container.offsetTop;
              const containerBottom = container.offsetTop + container.offsetHeight;
              const rollerBottom = containerTop + element.offsetHeight;
              const windowY = window.scrollY;
              const windowHeight = window.innerHeight;                         
              if (rollerBottom <= windowY + windowHeight && containerBottom > windowY + windowHeight) {
                  element.classList.add("fixed");
                  element.classList.remove("done");
              }               
              else if (containerBottom <= windowY + windowHeight) {                
                element.classList.add("done");       
                element.classList.remove("fixed");
              }else {
                element.classList.remove("fixed");
                element.classList.remove("done");
              }              
          };

          window.addEventListener('scroll', handleScroll);
          handleScroll();          
          return () => {              
              window.removeEventListener('scroll', handleScroll);
          };
      };

      if (animationRollerRef.current && contentWrapRef.current) {
          const cleanup = initViewportSticky(
              animationRollerRef.current, 
              contentWrapRef.current
          );
          return cleanup;
      }
  }, []);
  useEffect(() => {
      if (imgWrapRef.current && contentWrapRef.current) {
          gsap.to(imgWrapRef.current, {
              x: "-100%",
              scrollTrigger: {
                  trigger: contentWrapRef.current,
                  start: "top top",
                  end: "bottom bottom",
                  scrub: true,
              }
          });
      }

      return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
  }, []);
  
  return (
    <section className="main_2">
      <NoiseFilter />
      <div className="w1600">
        <div className="content_wrap" ref={contentWrapRef}>
          <div className="animation_roller" ref={animationRollerRef}>
            <h2 className="tit_wrap">
              <span className="reverse_y_text">G</span>
              <span>A</span>
              <span>I</span>
              <span>N</span>
              <span className="reverse_y_text">S</span>
              <span>A</span>
              <span>Y</span>
              <span>E</span>
              <span className="reverse_y_text">R</span>
            </h2>
            <div className="img_wrap" ref={imgWrapRef}>            
              <div className="img"></div>
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}

function Main_3(){   
    
  const nagativityTitRef = useRef(null);
  const [percentage, setPercentage] = useState(0);

  const handlePercentageChange = (newPercentage) => {
      setPercentage(newPercentage);
  };

  useEffect(() => {
      const tit = nagativityTitRef.current?.querySelector("h2");
      if (tit) {
          const lightness = 96 - (96 - 7) * (percentage / 100);
          tit.style.color = `hsl(0, 0%, ${lightness}%)`;
      }
  }, [percentage]);

  return (
    <section className="main_3">
      <div className="w1600">
        <div className="txt_wrap">
          <div className="tit">
            <h2>
              <span>D</span>
              <span>E</span>
              <span className="reverse_y_text">N</span>
              <span>I</span>
              <span>A</span>
              <span className="space_right">L</span>
              <span>O</span>
              <span>F</span>
            </h2>
          </div>
          <div className="tit nagativity_tit" ref={nagativityTitRef}>
            <h2>
              <span className="reverse_y_text">N</span>
              <span>E</span>
              <span>G</span>
              <span>A</span>
              <span>T</span>
              <span>I</span>
              <span>V</span>
              <span>I</span>
              <span>T</span>
              <span>Y</span>
            </h2>
            <ProgressBar onPercentageChange={handlePercentageChange} />
          </div>
        </div>
        <figure className="img_wrap">
          <div className="img_lt">
            <div className="img_box">
              <Image src="/img/main/main_3_img1.png" alt="img" width={1012} height={674} />
              <div className="blue_filter"></div>
            </div>
          </div>
          <div className="img_rt">
            <div className="img_box">
              <Image src="/img/main/main_3_img2.png" alt="img" width={529} height={208} />
            </div>
            <div className="img_box">
              <Image src="/img/main/main_3_img3.png" alt="img" width={529} height={431} />
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}

function Main_4(){
  return (
    <section className="main_4 product_slide_section">
      <div className="w1600">
        <h2 className="top_tit">
          <span className="date_txt">SS2025</span>
          <span className="tit_txt">&quot;DENIAL OF NEGATIVITY”</span>
        </h2>
        <Product
          productData={productData.tshirts} 
          imageWidth = {744}
          imageHeight = {891}          
        />
      </div>
    </section>
  )
}

function Main_5(){
  return (
    <section className="main_5">
      <div className="w1600">
        <div className="info_wrap">
          <div className="info info1">
            <h3>NEGATIVE</h3>
          </div>
          <div className="info info2">
            <h3>HATE</h3>
            <div className="img_wrap">
              <Image src="/img/main/main_5_img1.png" alt="img" width={951} height={385} />
            </div>
          </div>
          <div className="info info3">            
            <h3>DOUBT</h3>
            <div className="img_wrap">
              <Image src="/img/main/main_5_img2.png" alt="img" width={725} height={385} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Main_6(){
  return (
    <section className="main_6">
       <div className="main_6_wrap">
        <div className="symbol_wrap">
          <Symbol />          
        </div>
        <div className="txt_list_wrap">
          <div className="txt_list">
            <ol className="top_txt">
               <li>DROP 01</li>
               <li>FW25 COLLECTION</li>
               <li>25.09.01</li>               
            </ol>
            <ul className="bottom_txt">
              <li>LOOKBOOK — OVERSIZED HOODIE / GRAPHIC TEE</li>
              <li>NEW ARRIVAL — FW25 CAPSULE — LIMITED EDITION</li>
            </ul>
          </div>
          <div className="txt_list">
            <ol className="top_txt">
               <li>DROP 02</li>
               <li>FW25 COLLECTION</li>
               <li>25.09.15</li>               
            </ol>
            <ul className="bottom_txt">
              <li>LOOKBOOK — CARGO PANTS / ACCESSORIES</li>
              <li>NEW ARRIVAL — FW25 CAPSULE — LIMITED EDITION</li>
            </ul>
          </div>
          <div className="txt_list">
            <ol className="top_txt">
               <li>DROP 03</li>
               <li>FW25 COLLECTION</li>
               <li>25.10.01</li>               
            </ol>
            <ul className="bottom_txt">
              <li>LOOKBOOK — OUTERWEAR / DENIM LINE</li>
              <li>NEW ARRIVAL — FW25 CAPSULE — LIMITED EDITION</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Main_7(){
  return (
    <section className="main_7 product_slide_section">
      <div className="w1600">
        <h2 className="top_tit">
          <span className="date_txt">SS2025</span>
          <span className="tit_txt">&quot;DENIAL OF NEGATIVITY”</span>
        </h2>
        <Product
          productData={productData.pants} 
          imageWidth = {744}
          imageHeight = {891}          
        />        
      </div>
    </section>
  )
}
function Main_8(){
  const mainRef = useRef(null);
  const imgWrapRef = useRef(null);  

  useEffect(() => {
    const checkScreenSize = () => {
      return window.innerWidth >= 768;
    };
    if (mainRef.current && imgWrapRef.current && checkScreenSize()) {
        gsap.to(imgWrapRef.current, {
            width: "50%",
            transform: "translate3d(0,0,0)",            
            left: "0",
            top: "0",
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "bottom 120%",
                scrub: true,                                       
            }
        });

        ScrollTrigger.create({
            trigger: mainRef.current,
            start: "bottom 120%",
            toggleClass: { targets: mainRef.current, className: "finish" }
        });
    }

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="main_8" ref={mainRef}>
      <div className="w1600">
        <div className="img_wrap" ref={imgWrapRef}>
          <div className="img">
            <div className="symbol_img"></div>  
          </div>          
        </div>
        <div className="txt_wrap">
          <div className="tit">
            <h5>Design contact is WACUS</h5>
            <h2>WACUS</h2>
          </div>
          <ul>
            <li>TELEPHONE. 070.4288.0067</li>
            <li>E-MAIL. WACUS2020@NAVER.COM</li>
            <li>FAX. 02.6952.3933</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


function NoiseFilter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="403" height="287" viewBox="0 0 403 287" fill="none">
      <g filter="url(#filter0_n_241_450)">
        <rect width="403" height="287" fill=""/>
      </g>
      <defs>
        <filter id="filter0_n_241_450" x="0" y="0" width="403" height="287" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feTurbulence type="fractalNoise" baseFrequency="10 10" stitchTiles="stitch" numOctaves="3" result="noise" seed="8665"/>
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
        <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
        </feComponentTransfer>
        <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped"/>
        <feFlood floodColor="rgba(67, 67, 67, 0.1)" result="color1Flood"/>
        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1"/>
        <feMerge result="effect1_noise_241_450">
        <feMergeNode in="shape"/>
        <feMergeNode in="color1"/>
        </feMerge>
        </filter>
      </defs>
    </svg>
  )
}