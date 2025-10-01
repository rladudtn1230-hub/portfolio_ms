'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function LenisScroll({ children }) {
  const lenisRef = useRef(null)
  const rafRef = useRef(null)
  
  const initLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.destroy()
      lenisRef.current = null
    }
    
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    
    function raf(time) {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
        rafRef.current = requestAnimationFrame(raf)
      }
    }
    rafRef.current = requestAnimationFrame(raf)
  }
  
  useEffect(() => {
    initLenis()
    
    // 윈도우 로드 핸들러
    const handleLoad = () => {
      setTimeout(initLenis, 100)
    }
    
    // 리사이즈 핸들러 (디바운스)
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(initLenis, 150)
    }
    
    // 오리엔테이션 변경 핸들러 (모바일)
    const handleOrientationChange = () => {
      setTimeout(initLenis, 300) // 오리엔테이션 변경은 더 긴 지연
    }
    
    // 이벤트 리스너 등록
    window.addEventListener('load', handleLoad)
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return children
}