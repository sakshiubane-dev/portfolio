'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Heading fade-in on scroll
    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
    })

    // Portrait crop effect on scroll
    if (portraitRef.current) {
      gsap.to(portraitRef.current, {
        scrollTrigger: {
          trigger: portraitRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 px-4 max-w-7xl mx-auto border-b-4 border-double border-stone-950"
    >
      <div className="w-full mb-8">
        <div className="text-xs font-mono uppercase tracking-widest text-stone-600 font-bold mb-1">
          SECTION A • THE EDITORIAL PROFILE
        </div>
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-serif font-black text-stone-950 uppercase opacity-0 translate-y-8"
        >
          Engineering Philosophy & Core Pillars
        </h2>
        <div className="w-full h-0.5 bg-stone-950 mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Editorial Feature Box */}
        <div className="lg:col-span-4 bg-stone-200/60 p-6 border-2 border-stone-950 shadow-sm">
          <div className="border-2 border-stone-950 bg-[#eae7df] p-4 relative overflow-hidden rounded-sm shadow-sm">
            <div className="bg-stone-950 text-[#eae7df] text-center py-1.5 px-3 -mx-4 -mt-4 mb-4 flex justify-between items-center font-mono text-[9px] font-bold tracking-widest">
              <span>★ PRESS DISPATCH ★</span>
              <span>ID: SB-2026</span>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-stretch justify-between">
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <h3 className="text-lg font-serif font-black text-stone-950 uppercase leading-none">Sakshi Bane</h3>
                    <p className="text-[9px] font-mono text-stone-700 font-bold uppercase mt-1 leading-none">Software Engineer</p>
                  </div>
                  <div className="text-[9px] font-mono text-stone-500 space-y-0.5">
                    <p><strong>ISSUE:</strong> MUMBAI, IND</p>
                    <p><strong>CLASS:</strong> BTECH CSE</p>
                  </div>
                </div>
                <div className="w-20 aspect-[3/4] relative overflow-hidden border-2 border-stone-950 bg-stone-900 shrink-0">
                  <Image
                    src="/images/sakshi-idcard.jpeg"
                    alt="Sakshi Bane ID Card Portrait"
                    fill
                    className="object-cover object-center grayscale contrast-110 sepia-[15%]"
                  />
                </div>
              </div>

              <div className="border-t border-dashed border-stone-950/40 my-3" />

              <div className="text-xs font-serif text-stone-900 space-y-2">
                <div className="grid grid-cols-12 gap-1 items-baseline">
                  <span className="col-span-3 font-mono text-[8px] uppercase font-bold text-stone-500">Major</span>
                  <span className="col-span-9 font-bold text-stone-950">BTech Computer Science</span>
                </div>
                <div className="grid grid-cols-12 gap-1 items-baseline">
                  <span className="col-span-3 font-mono text-[8px] uppercase font-bold text-stone-500">Diploma</span>
                  <span className="col-span-9 font-bold text-stone-950">EXTC Engineering</span>
                </div>
                <div className="grid grid-cols-12 gap-1 items-baseline">
                  <span className="col-span-3 font-mono text-[8px] uppercase font-bold text-stone-500">Focus</span>
                  <span className="col-span-9 font-bold text-stone-950">Edge AI, SCADA & Mobile</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1 right-2 w-10 h-10 rounded-full border border-stone-950/30 flex items-center justify-center text-[7px] font-mono font-bold text-stone-950/30 uppercase rotate-12 pointer-events-none select-none">
              Verified
            </div>
          </div>
        </div>

        {/* Right Column: Two-Column Newspaper Article */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-800 font-serif leading-relaxed text-justify">
            <div>
              <p className="newspaper-drop-cap mb-4">
                Aspiring Software Engineer with a Computer Science & Engineering background 
                and diploma in Electronics & Telecommunication (EXTC). Skilled in Data Structures & Algorithms, 
                Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.
              </p>
              <p>
                Driven by solving complex engineering problems, learning emerging technologies, and 
                designing scalable systems from backend architecture to high-performance client interfaces.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Specialized in cross-platform mobile development with Flutter, computer vision detection 
                engines using YOLOv8, and full-stack web applications backed by PHP and MySQL.
              </p>
              <p>
                Experienced in real-time industrial automation through SCADA systems, HMI configuration, 
                and live data monitoring gained during engineering internship work at Ashida Electronics.
              </p>
            </div>
          </div>

          {/* Technical Pillars List */}
          <div className="border-t-2 border-stone-950 pt-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-900 font-bold mb-4">
              EDITORIAL FOCUS — CORE TECHNICAL PILLARS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-serif">
              {[
                'Cross-Platform Mobile Applications (Flutter)',
                'Edge AI & Computer Vision Inference (YOLOv8)',
                'Full-Stack Web Platforms & Databases (PHP, MySQL)',
                'Industrial SCADA & Real-Time Automation Workflows',
              ].map((pillar, i) => (
                <div key={i} className="flex items-baseline gap-3 border-b border-stone-400 pb-2">
                  <span className="font-mono text-xs font-bold text-stone-950">[{i + 1}]</span>
                  <span className="text-sm font-semibold text-stone-900">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
