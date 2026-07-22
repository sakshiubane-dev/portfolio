'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true)
  const circleRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if preloader should be shown (only once per session)
    const hasSeenPreloader = sessionStorage.getItem('preloader-shown')
    if (hasSeenPreloader) {
      setShow(false)
      onComplete()
      return
    }

    const tl = gsap.timeline()

    // 2-3 second preloader sequence
    tl.to(
      circleRef.current,
      {
        r: 200,
        duration: 1.5,
        ease: 'power1.inOut',
      },
      0
    )
      .to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.8,
        },
        0.3
      )
      .to(
        textRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        1.8
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.8,
          onComplete: () => {
            setShow(false)
            sessionStorage.setItem('preloader-shown', 'true')
            onComplete()
          },
        },
        2
      )
  }, [onComplete])

  if (!show) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center bg-[#eae7df] text-stone-950 z-50"
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="absolute"
      >
        <circle
          ref={circleRef}
          cx="100"
          cy="100"
          r="0"
          fill="none"
          stroke="#1c1917"
          strokeWidth="2"
        />
      </svg>

      <div
        ref={textRef}
        className="absolute opacity-0 text-center z-10"
      >
        <h1 className="text-4xl font-serif font-bold tracking-tight">
          Sakshi Bane
        </h1>
        <p className="text-sm tracking-widest mt-2 uppercase">
          Editorial Design
        </p>
      </div>
    </div>
  )
}
