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
        <div className="bg_video">
        <svg viewBox="0 0 1875 1435" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="bg-mask">
              <path d="M1534.57 1401.88C1375.79 1365 1268.78 1241.6 1295.57 1126.25C1322.36 1010.91 1472.8 947.3 1631.58 984.179C1790.36 1021.06 1897.36 1144.46 1870.57 1259.8C1843.79 1375.15 1693.35 1438.75 1534.57 1401.88Z" fill="#D9D9D9"/>
              <path d="M248.712 1429.93C89.9298 1393.06 -22.8458 960.554 3.94365 845.21C30.7331 729.865 716.243 816.352 875.026 853.23C1033.81 890.109 721.982 1041.74 695.193 1157.09C668.403 1272.43 407.494 1466.81 248.712 1429.93Z" fill="#D9D9D9"/>
              <path d="M432.523 459.61C273.741 422.732 490.883 137.599 517.672 22.2548C544.462 -93.0894 792.375 275.657 951.157 312.535C1109.94 349.413 1090.19 413.933 1063.4 529.278C1036.61 644.622 591.306 496.489 432.523 459.61Z" fill="#D9D9D9"/>
            </mask>
          </defs>
          <foreignObject width="1875" height="1435" mask="url(#bg-mask)">            
            <video width="1875" height="1435" autoPlay loop muted playsInline style={{ objectFit: 'cover' }} >
              <source src="/video/main_1_bg_video.mp4" type="video/mp4" />
            </video>
          </foreignObject>
        </svg>          
        </div>
        <div className="w1600">
          <div className="main_1_visual">
            <div className={`center_icon_wrap ${iconOpen ? 'on' : ''}`} onClick={() => setIconOpen(!iconOpen)}>
                <div className="symbol_wrap">
                  <video width="231" height="230" autoPlay loop muted playsInline preload="auto" style={{ objectFit: 'cover' }} >
                    <source src="/video/symbol.mp4" type="video/mp4" />
                  </video>
                  {/* <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" id="main_symbol">
                    <defs>
                      <mask id="symbol-mask">
                        <path className="path1" d="M23.7477 89.4916C23.72 90.1276 24.2164 90.4843 24.439 90.7747C30.8741 96.6442 38.49 93.6327 46.334 94.042C55.2676 94.5066 60.7375 105.541 63.4449 111.649C69.2563 124.759 72.1199 138.945 73.5067 152.851C74.8148 165.968 74.7636 179.35 72.9108 192.475C72.2596 197.087 71.423 201.747 69.8564 206.199C68.9743 208.705 67.8377 211.748 65.523 213.395C63.7643 214.646 62.0967 215.136 59.8305 215.091C58.6856 215.069 57.3513 214.794 56.2521 214.458C42.5067 210.248 29.5481 203.153 18.4035 194.756C16.9227 193.64 15.457 192.472 14.0287 191.297C12.5312 190.063 11.0891 188.765 9.64693 187.476C8.39698 186.319 7.13733 185.17 6.09616 183.861C5.46427 183.067 4.92225 182.277 4.40374 181.435C-0.167448 174.019 -1.40494 164.246 1.75866 156.238C2.97544 153.159 5.11307 149.777 8.83529 148.616C13.6747 147.107 18.3317 150.191 21.7179 152.826C29.6628 159.007 34.4705 168.629 38.9048 176.901C41.7504 182.21 44.6692 187.532 48.0707 192.602C50.3438 195.992 53.0166 200.319 57.043 202.36C62.9955 205.377 64.0463 192.916 64.3132 190.457C65.4332 180.125 65.0128 169.244 62.5019 159.155C61.1012 153.526 58.9981 147.709 55.1888 142.985C52.7303 139.938 49.741 137.196 45.9455 135.405C40.5529 132.863 34.4635 131.824 28.7226 129.891C21.8077 127.564 16.6212 123.666 12.4414 118.369C0.219708 102.88 2.13198 81.6724 9.57226 65.21C13.9983 55.4178 20.1748 45.9684 27.5473 37.4552C32.1959 32.0876 37.4958 26.5084 44.112 22.9065C48.1011 20.7356 52.87 19.5603 57.1121 21.9054C62.6028 24.939 65.3129 31.3893 67.2971 36.4306C74.96 55.8948 77.8871 77.563 79.3431 98.1237C79.8879 105.806 79.9916 113.596 79.1398 121.28C78.5162 126.9 77.6106 133.511 73.6312 138.157C73.0435 138.843 72.2388 139.306 71.7272 138.122C71.4493 137.481 71.3539 136.538 71.2612 135.66C69.7735 121.627 66.9403 105.705 57.9735 93.9107C54.2126 88.9634 49.0731 84.8402 41.807 84.6784C35.8573 84.5457 29.8993 87.1645 24.7847 88.6979C24.5261 88.7753 23.832 89.074 23.7532 89.4722C23.7518 89.4791 23.7504 89.4833 23.749 89.4916H23.7477Z" fill="#000"/>
                        <path className="path2" d="M142.034 69.7664C140.54 72.2 132.183 71.6179 130.203 70.5643C128.532 69.6766 127.683 66.9056 126.917 65.1731C125.908 62.8917 125.106 60.4775 123.917 58.308C120.117 51.378 113.733 46.7736 105.915 43.7718C99.8869 41.4571 92.8421 40.2583 87.6044 36.4988C86.8508 36.4241 87.3403 37.2759 87.5837 37.6907C89.1752 40.3994 91.3335 42.4596 94.5455 43.7178C97.1644 44.7438 100.02 45.1337 102.567 46.3145C109.859 49.6952 116.539 54.1848 120.513 60.7333C122.693 64.3269 124.047 68.4764 126.186 72.1737C127.773 74.917 130.074 76.5417 133.499 76.5306C138.159 76.5154 142.879 75.4023 147.521 75.0912C147.908 75.0649 148.584 74.5934 148.562 76.207C147.017 77.8137 145.362 78.6447 143.334 79.5573C140.505 80.8308 137.668 82.3987 134.776 83.7192C132.422 84.7936 128.979 86.7819 126.443 86.327C123.64 85.8251 121.733 82.4471 120.356 80.1906C118.603 77.3187 117.187 74.1081 114.973 71.6013C111.04 67.1462 105.921 64.9201 99.6961 63.8789C94.5939 63.0258 88.9636 62.8419 84.5459 60.0447C78.1703 56.0086 75.3344 46.3546 74.1134 39.8076C72.4874 31.0786 73.4885 21.0347 80.1047 14.1337C90.609 12.3417 101.433 10.1225 111.826 12.1177C119.267 13.546 122.979 23.0023 125.796 28.7045C131.992 41.2525 136.971 54.3701 141.996 67.3785C142.013 68.3312 142.022 68.8082 142.037 69.7664H142.034Z" fill="#000"/>
                        <path className="path3" d="M145.07 36.303C145.608 34.7337 148.353 34.872 149.881 34.9397C155.815 35.2052 162.165 35.4568 167.781 37.3041C170.363 38.1531 172.596 40.2603 174.574 41.9832C178.035 44.9947 181.254 48.2495 184.412 51.5279C190.684 58.039 196.744 64.788 202.415 71.7277C203.941 73.5957 210.184 79.5192 206.08 81.6347C197.891 78.2623 188.061 80.6489 180.636 76.368C176.521 73.9953 175.39 66.5302 173.998 62.4374C172.282 57.3878 170.41 50.7743 165.823 47.2581C161.259 43.7585 160.165 50.7259 159.882 53.5024C159.143 60.7491 159.717 68.1922 160.456 75.4195C158.936 77.6871 157.021 73.5446 156.588 72.6638C152.32 63.9818 148.781 54.1094 145.851 44.7817C145.018 42.1283 144.205 38.8278 145.069 36.303H145.07Z" fill="#000"/>
                        <path className="path4" d="M103.321 119.24C103.303 119.236 103.285 119.232 103.267 119.229C111.57 128.281 119.873 137.391 128.161 146.397C131.445 149.966 133.544 153.773 134.499 158.448C135.655 164.111 135.159 170.212 134.721 175.985C134.009 185.387 132.895 194.821 131.402 204.138C130.575 209.291 129.776 214.794 127.609 219.513C125.949 223.131 123.66 226.177 119.512 227.254C115.173 228.381 110.775 228.999 106.277 229.062C101.865 229.124 98.252 227.846 95.2571 224.856C90.8975 220.504 88.4017 213.911 86.1382 208.12C82.9691 200.018 80.4429 191.679 77.9181 183.376C76.9668 180.246 75.9865 176.692 76.6778 173.443C76.9931 171.961 77.683 171.261 78.3467 170.898C84.5813 167.484 91.1463 182.676 93.3642 186.292C97.4957 193.031 103.736 201.542 112.356 203.033C116.797 203.801 120.107 201.456 122.485 198.184C127.056 191.897 128.7 182.362 128.344 174.619C127.93 165.663 124.514 158.557 116.263 154.161C110.21 150.934 104.724 146.808 99.661 142.237C94.4026 137.493 90.9528 131.841 88.9755 125.211C86.112 115.609 83.4724 101.713 91.9414 93.6917C96.2568 89.6043 102.118 88.5495 107.797 87.7638C117.473 86.4237 125.888 89.1603 132.573 96.0126C143.801 107.521 147.881 125.675 149.312 141.177C149.419 142.329 149.507 143.58 149.38 144.704C149.149 146.751 148.472 149.92 146.118 150.754C140.709 152.671 135.762 140.764 133.7 137.623C130.09 132.118 125.339 127.362 119.247 124.246C114.268 121.699 108.784 120.397 103.324 119.239L103.321 119.24Z" fill="#000"/>
                        <path className="path5" d="M184.426 204.082C182.774 206.167 177.778 209.119 176.299 208.708C174.993 208.346 175.961 201.715 175.43 199.457C174.559 195.751 169.974 194.653 166.898 193.515C161.643 191.572 156.117 190.421 150.905 188.294C150.547 188.849 151.063 189.825 151.152 190.057C153 194.866 156.973 193.895 161.292 195.34C165.362 196.702 171.118 198.55 172.361 203.164C173.085 205.854 171.672 211.045 173.58 213.238C177.818 211.034 181.97 208.696 186.052 206.214C184.191 208.103 182.197 209.812 180.191 211.528C176.489 214.693 172.491 219.8 168.276 221.383C166.47 222.062 166.069 215.482 165.667 214.469C163.047 207.863 151.36 213.409 146.278 210.797C143.793 209.521 142.45 206.143 141.463 203.661C139.776 199.421 138.739 194.894 138.151 190.375C136.932 180.992 137.475 168.846 146.011 162.836C156.471 163.103 167.001 159.712 177.138 160.469C183.001 160.906 185.339 170.882 186.237 175.523C187.718 183.163 187.55 191.257 186.204 198.818C185.879 200.646 185.579 202.627 184.426 204.082Z" fill="#000"/>
                        <path className="path6" d="M186.09 91.1804C186.528 90.8071 187.145 91.085 187.641 91.8095C188.595 93.206 189.121 94.9413 189.635 96.5646C195.664 115.593 199.436 135.573 199.444 155.622C199.449 171.692 197.243 188.434 190.326 203.099C193.901 186.83 192.071 169.022 186.749 153.555C186.151 151.816 185.555 149.594 184.342 148.514C183.042 147.355 181.867 147.305 179.958 147.633C176.542 148.219 173.092 149.447 169.811 150.869C166.685 152.222 163.855 153.165 161.623 150.638C159.808 148.582 159.05 145.072 158.136 142.246C155.589 134.365 152.9 126.523 150.118 118.729C148.674 114.683 147.196 110.621 145.674 106.621C144.269 102.931 142.026 99.3217 141.603 95.3105C140.936 88.9874 145.775 89.712 150.118 90.0272C154.085 90.3162 158.298 90.7227 162.31 91.5178C164.081 91.869 165.235 92.7733 166.202 94.1532C168.672 97.6749 169.087 103.28 169.85 107.639C170.684 112.402 171.584 117.255 173.16 121.854C173.888 123.978 175.332 128.364 177.955 128.304C181.939 128.213 183.713 119.693 184.334 116.679C185.714 109.977 185.775 102.832 185.469 96.0419C185.415 94.8321 185.339 93.4577 185.577 92.2603C185.683 91.7238 185.871 91.3671 186.093 91.179L186.09 91.1804Z" fill="#000"/>
                        <path className="path7" d="M222.819 127.943C224.083 124.762 223.88 120.521 225.683 117.765C226.344 116.756 228.925 115.1 229.77 117.037C229.915 117.866 229.984 118.281 230.116 119.108C229.73 124.585 227.151 130.721 224.898 135.628C224.166 137.22 223.338 139.113 222.156 140.222C220.538 141.739 217.551 142.481 215.293 143.284C213.226 144.02 210.104 145.578 208.374 145.097C206.317 144.525 205.059 138.983 204.36 136.718C203.034 132.418 201.721 127.844 201.455 123.382C201.356 121.705 200.559 117.261 202.597 116.137C203.513 115.632 204.966 116.369 205.798 116.09C207.991 115.354 209.605 111.917 211.662 110.416C214.068 108.66 217.695 108.746 220.011 106.777C220.397 106.449 220.907 105.183 221.012 104.113C217.392 105.924 213.362 106.95 210.045 109.122C207.181 110.997 204.197 116.348 200.091 114.22C199.755 113.349 199.585 112.913 199.24 112.041C200.555 107.929 201.54 103.72 202.722 99.5705C203.438 97.0567 204.235 92.4053 206.571 91.2038C208.766 90.0769 212.38 90.6576 214.97 90.93C217.723 91.2204 220.994 91.5163 223.413 92.8519C227.525 95.1237 227.792 102.332 226.969 106.267C226.077 110.535 224.398 114.855 219.833 116.327C216.657 117.352 213.237 117.185 210.721 119.743C208.605 121.893 207.462 124.907 205.807 127.393C206.439 130.294 208.196 138.589 211.987 138.391C216.099 138.178 221.318 131.722 222.819 127.943Z" fill="#000"/>
                        <path className="path8" d="M225.471 138.101C225.365 140.492 223.229 143 222.187 145.038C213.098 162.836 205.845 182.302 195.992 200.049C203.438 184.024 205.078 166.264 204.411 148.793C206.263 149.909 208.118 151.017 209.989 152.097C210.085 152.488 210.132 152.683 210.223 153.071C210.114 154.487 209.162 160.915 212.052 158.815C214.862 156.772 215.885 150.721 216.34 147.647C219.385 144.466 222.428 141.284 225.468 138.1L225.471 138.101Z" fill="#000"/>
                        <path className="path9" d="M132.159 19.808C139.239 37.6227 146.35 55.4332 153.015 73.3875C151.603 73.5036 151.078 71.7366 150.617 70.788C143.567 56.2435 136.695 40.8776 129.707 26.0233C128.869 24.2437 128.074 22.402 127.573 20.5754C126.99 18.4447 125.941 14.1777 129.5 13.7546C131.41 13.5278 133.397 14.7418 135.151 15.0516C138.816 15.7014 142.815 16.6002 146.667 16.9473C147.025 18.9867 148.242 29.5229 143.96 28.956C140.767 28.5342 135.7 17.8142 132.146 19.7776C132.15 19.7873 132.154 19.7984 132.159 19.808Z" fill="#000"/>
                        <path className="path10" d="M128.955 5.49588C129.117 6.70159 129.034 10.6423 127.607 10.5565C126.046 10.4639 125.101 6.58406 124.923 4.96354C124.781 3.67902 124.995 -0.109567 126.252 0.00243117C127.658 0.128256 128.728 3.81728 128.955 5.49449V5.49588Z" fill="#000"/>
                      </mask>
                    </defs>

                    <foreignObject width="231" height="230" mask="url(#symbol-mask)">
                      <video 
                        width="231" 
                        height="230" 
                        autoPlay 
                        loop 
                        muted
                        playsInline
                        style={{ objectFit: 'cover' }}
                      >
                        <source src="video/symbol.mp4" type="video/mp4" />
                      </video>
                    </foreignObject>
                  </svg>                   */}
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
  const [isDesktop, setIsDesktop] = useState(false);

    // 화면 크기 상태 관리
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
    if (!isDesktop) {
      return; // 768px 미만이면 실행하지 않음
    }
    const initViewportSticky = (element, container) => {        
        const handleScroll = () => {
            const containerTop = container.offsetTop + container.offsetParent.offsetTop;
            const containerBottom = containerTop + container.offsetHeight;
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
    
  }, [isDesktop]);
  useEffect(() => {
    if (!isDesktop) {
      return; // 768px 미만이면 실행하지 않음
    }
      
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
    
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) {
      return; // 768px 이상일때 실행하지 않는다다
    }
    const img_box = imgWrapRef.current?.querySelector(".img");
    if(imgWrapRef.current && contentWrapRef.current) {
      gsap.to(img_box, {
        backgroundPositionX: "70%",
        scrollTrigger: {
          trigger: contentWrapRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }
  }, [isDesktop]);
  
  return (
    <section className="main_2">      
      <div className="w1600">
        <div className="content_wrap" ref={contentWrapRef}>
          <div className="animation_roller" ref={animationRollerRef}>
            <h2 className="tit_wrap noise_text_span scroll_overflow_y" data-aos="none">
              <div className="scroll_ani_box">
                <span className="reverse_y_text">G</span>
                <span>A</span>
                <span>I</span>
                <span>N</span>
                <span className="reverse_y_text">S</span>
                <span>A</span>
                <span>Y</span>
                <span>E</span>
                <span className="reverse_y_text">R</span>
              </div>
            </h2>
            <div className="img_wrap" ref={imgWrapRef}>            
              <div className="img noise_box"></div>
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
      if (nagativityTitRef.current) {
          const lightness = 96 - (96 - 7) * (percentage / 100);
          nagativityTitRef.current.style.color = `hsl(0, 0%, ${lightness}%)`;
      }
  }, [percentage]);

  return (
    <section className="main_3">
      <div className="w1600">
        <div className="txt_wrap">
          <h2 className="tit scroll_overflow_y" data-aos="none">
            <div className="scroll_ani_box">
              <span>D</span>
              <span>E</span>
              <span className="reverse_y_text">N</span>
              <span>I</span>
              <span>A</span>
              <span className="space_right">L</span>
              <span>O</span>
              <span>F</span>
            </div>
          </h2>
          <h2 className="tit nagativity_tit noise_text scroll_overflow_y" ref={nagativityTitRef} data-aos="none">
            <div className="scroll_ani_box">
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
            </div>
            <ProgressBar onPercentageChange={handlePercentageChange} />
          </h2>
        </div>
        <figure className="img_wrap">
          <div className="img_lt">
            <div className="img_box video_box">
              <Image src="/video/main_3_video1.gif" alt="img" width={1012} height={674} unoptimized/>
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
            <h3 className="noise_text scroll_overflow_y" data-aos="none">
              <div className="scroll_ani_box">
                NEGATIVE
              </div>
            </h3>
          </div>
          <div className="info info2">
            {/* <h3>HATE</h3> */}
            <div className="gif_text">
              <div className="scroll_ani_box">
                <Image src="/video/main5_txt.gif" alt="gif" width={1920} height={1080} unoptimized/>  
              </div>            
            </div>
            <div className="img_wrap">
              <video src="/video/main_5_video1.mp4" autoPlay loop muted playsInline style={{ objectFit: 'cover' }}/>
            </div>
          </div>
          <div className="info info3">            
            <h3 className="noise_text scroll_overflow_y" data-aos="none">
              <div className="scroll_ani_box">
                DOUBT
              </div>
            </h3>
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
  const txtListRef = useRef(null);
  useEffect(() => {
    const bottomTxt = txtListRef.current?.querySelectorAll(".bottom_txt");    
    bottomTxt.forEach(item => {
      if (bottomTxt) {
        const bottomTxtList = item.querySelectorAll("li");
        
        bottomTxtList.forEach(item => {
          item.addEventListener("touchstart", () => {
            item.classList.add("on");
          });
          item.addEventListener("touchend", () => {
            item.classList.remove("on");
          });
        });
                
        return () => {
          bottomTxtList.forEach(item => {
            item.removeEventListener("click", () => {
              item.classList.add("on");
            });
            item.removeEventListener("touchend", () => {
              item.classList.remove("on");
            });
          });
        };
      }
    });
  }, []);
  return (
    <section className="main_6">
       <div className="main_6_wrap">
        <div className="symbol_wrap">
          <Symbol />          
        </div>
        <div className="txt_list_wrap" ref={txtListRef}>
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
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileClick, setIsMobileClick] = useState(false);
  
  // 화면 크기 상태 관리
  useEffect(() => {
    const checkScreenSize = () => {
      return window.innerWidth >= 768;
    };        
    setIsDesktop(checkScreenSize());
        
    const handleResize = () => {
      setIsDesktop(checkScreenSize());
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return; // 768px 미만이면 실행하지 않음
    }

    if (mainRef.current && imgWrapRef.current ) {
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
            end : "bottom top",
            toggleClass: { targets: mainRef.current, className: "finish" }
        });
    }

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isDesktop]);

  useEffect(() => {
    
    if (isDesktop) {
      return;
    }
    let startY = 0;
    let moveY = 0
   
    function handleMobileClick() {
      if (startY - moveY != 0) {
        return;
      }
      setIsMobileClick(prev => {
        if (!prev) {
          mainRef.current.classList.add("m_click");
          return true;
        } else {
          mainRef.current.classList.remove("m_click");
          return false;
        }
      });
    }        
    mainRef.current.addEventListener("click", handleMobileClick);
    return () => {      
      mainRef.current.removeEventListener("click", handleMobileClick);
    }

  }, [isDesktop])

  return (
    <section className="main_8" ref={mainRef}>
      <div className="w1600">
        <div className="img_wrap" ref={imgWrapRef}>
          <div className="img">
            <div className="symbol_img noise_box">
              <div className="symbol_img_inner"></div>  
            </div>  
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
