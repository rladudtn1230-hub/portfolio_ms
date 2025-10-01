'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function LenisScroll({ children }) {
  useEffect(() => {
    // Lenis 초기화
    const lenis = new Lenis({
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

    // GSAP과 연동 (이미 사용 중이므로)
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // 정리 함수
    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}