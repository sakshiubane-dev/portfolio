'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice = () => {
      return window.matchMedia('(hover: none)').matches
    }

    if (isTouchDevice()) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      if (cursorRef.current && cursorRingRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 5,
          y: e.clientY - 5,
          duration: 0,
        })

        gsap.to(cursorRingRef.current, {
          x: e.clientX - 15,
          y: e.clientY - 15,
          duration: 0.3,
        })
      }
    }

    const handleMouseEnter = () => {
      if (cursorRef.current && cursorRingRef.current) {
        gsap.to([cursorRef.current, cursorRingRef.current], {
          opacity: 1,
          duration: 0.3,
        })
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current && cursorRingRef.current) {
        gsap.to([cursorRef.current, cursorRingRef.current], {
          opacity: 0,
          duration: 0.3,
        })
      }
    }

    // Hover targets for magnetic effect
    const setupHoverTargets = () => {
      const links = document.querySelectorAll('a, button, [data-hover]')
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          isHovering.current = true
          if (cursorRef.current && cursorRingRef.current) {
            gsap.to(cursorRingRef.current, {
              scale: 1.5,
              duration: 0.3,
            })
          }
        })
        link.addEventListener('mouseleave', () => {
          isHovering.current = false
          if (cursorRef.current && cursorRingRef.current) {
            gsap.to(cursorRingRef.current, {
              scale: 1,
              duration: 0.3,
            })
          }
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    setupHoverTargets()

    // Reinitialize hover targets on content changes
    const observer = new MutationObserver(setupHoverTargets)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 bg-stone-950 rounded-full pointer-events-none z-50 opacity-0"
        style={{ transform: 'translate(-5px, -5px)' }}
      />
      {/* Cursor ring */}
      <div
        ref={cursorRingRef}
        className="fixed w-6 h-6 border border-stone-950 rounded-full pointer-events-none z-50 opacity-0"
        style={{ transform: 'translate(-15px, -15px)' }}
      />
    </>
  )
}
