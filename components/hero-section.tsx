'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Character-by-character text animation for main heading
    if (headingRef.current) {
      const text = headingRef.current.textContent || ''
      headingRef.current.innerHTML = text
        .split('')
        .map(
          (char, i) =>
            `<span style="display: inline-block; opacity: 0;" data-char="${i}">${char === ' ' ? '&nbsp;' : char}</span>`
        )
        .join('')

      const chars = headingRef.current.querySelectorAll('[data-char]')
      const tl = gsap.timeline({ delay: 1.5 })

      chars.forEach((char, i) => {
        tl.to(
          char,
          {
            opacity: 1,
            duration: 0.05,
          },
          i * 0.03
        )
      })
    }

    // Fade in subheading
    if (subheadingRef.current) {
      gsap.to(subheadingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2.5,
      })
    }

    // Portrait parallax effect
    if (portraitRef.current) {
      gsap.to(portraitRef.current, {
        scrollTrigger: {
          trigger: portraitRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
        y: -100,
        duration: 1,
      })
    }

    // Ticker rotation
    if (tickerRef.current) {
      gsap.fromTo(
        tickerRef.current,
        { rotation: 0 },
        {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: 'none',
        }
      )
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16 relative max-w-7xl mx-auto">
      {/* Newspaper Top Header / Banner */}
      <div className="w-full text-center mb-6">
        <div className="inline-block px-4 py-1 border border-stone-900 font-mono text-xs uppercase tracking-widest bg-stone-900 text-[#eae7df] font-bold mb-4">
          ★ EXTRA EDITION ★ SPECIAL FEATURE STORY ★
        </div>
        <h1
          ref={headingRef}
          className="text-5xl md:text-8xl font-serif font-black text-center leading-none tracking-tight text-stone-950 mb-4 uppercase text-balance"
        >
          Sakshi Bane
        </h1>
        <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-stone-700 font-bold border-y border-stone-900/40 py-1.5 my-3">
          Software Engineer • Edge AI Specialist • Full-Stack Developer
        </p>
      </div>

      {/* Main Headline & Lead Article Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-6 py-6 border-y-4 border-double border-stone-950">
        {/* Left Column: Subheadline & Lead Story */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-600 font-bold flex items-center gap-2">
            <span>BY THE TECH DESK</span>
            <span>•</span>
            <span>SPECIAL DISPATCH</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-950 leading-tight">
            Engineers Breakthrough Solutions Across Mobile Infrastructure, AI Vision & Real-Time Communications
          </h2>

          <p
            ref={subheadingRef}
            className="newspaper-drop-cap text-base md:text-lg text-stone-800 leading-relaxed font-serif text-justify opacity-0 translate-y-4"
          >
            Aspiring Software Engineer with a Computer Science & Engineering background 
            and diploma in EXTC. Renowned for constructing cross-platform Flutter applications, 
            deploying edge YOLOv8 computer vision detection engines, and engineering full-stack role-based 
            donation platforms and instant real-time messaging architectures.
          </p>

          <div className="pt-4 flex flex-wrap gap-2 font-mono text-xs text-stone-800">
            <span className="px-2 py-1 border border-stone-950 bg-stone-200/50">#Flutter</span>
            <span className="px-2 py-1 border border-stone-950 bg-stone-200/50">#YOLOv8</span>
            <span className="px-2 py-1 border border-stone-950 bg-stone-200/50">#EdgeAI</span>
            <span className="px-2 py-1 border border-stone-950 bg-stone-200/50">#PHP_MySQL</span>
            <span className="px-2 py-1 border border-stone-950 bg-stone-200/50">#DSA_OOP</span>
          </div>
        </div>

        {/* Right Column: Press Photo & Illustration Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div
            ref={portraitRef}
            className="w-full aspect-[4/3] bg-stone-900 rounded-none p-4 flex flex-col items-center justify-center border-2 border-stone-950 relative shadow-sm"
          >
            <div className="w-full h-full relative overflow-hidden border border-stone-700 bg-stone-950">
              <Image
                src="/images/sakshi-portrait.jpeg"
                alt="Portrait of Sakshi Bane"
                fill
                priority
                className="object-cover object-center grayscale contrast-115 sepia-[20%] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <p className="text-[11px] font-mono text-stone-700 text-center italic mt-2 border-b border-stone-400 pb-1 w-full">
            Fig 1.1 — Software Engineer & Developer, Mumbai Edition.
          </p>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="w-full border-b-2 border-stone-950 py-2 flex items-center justify-between gap-4 font-mono text-xs text-stone-900 bg-stone-300/40 px-4">
        <div className="flex items-center gap-2 font-bold flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-stone-950 animate-pulse" />
          <span>BREAKING WIRE:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap text-stone-800">
            <span className="mr-8">CITYSCAN: Edge AI pothole & defect detection •</span>
            <span className="mr-8">UMEED: Role-based PHP donation platform •</span>
            <span className="mr-8">BAATCHEET: Real-time WhatsApp-style chat app •</span>
            <span className="mr-8">ASHIDA ELECTRONICS: SCADA & Industrial Automation •</span>
          </div>
        </div>
        <div className="text-right text-[11px] font-bold flex-shrink-0 hidden md:block">
          MUMBAI, INDIA
        </div>
      </div>
    </section>
  )
}
