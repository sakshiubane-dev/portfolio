'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactLinks = [
  { label: 'Email', value: 'sakshiubane@gmail.com', href: 'mailto:sakshiubane@gmail.com', icon: '✉' },
  { label: 'Phone', value: '+91 93218 37795', href: 'tel:+919321837795', icon: '📞' },
  { label: 'LinkedIn', value: 'Sakshi Bane', href: 'https://linkedin.com', icon: '↗' },
  { label: 'GitHub', value: 'Sakshi Bane', href: 'https://github.com', icon: '↗' },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return

    // Split heading text for animation
    const text = headingRef.current.textContent || ''
    headingRef.current.innerHTML = text
      .split('')
      .map((char, i) => {
        if (char === ' ') return '&nbsp;'
        return `<span style="display: inline-block; opacity: 0;" data-char="${i}">${char}</span>`
      })
      .join('')

    const chars = headingRef.current.querySelectorAll('[data-char]')

    gsap.to(chars, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      duration: 0.05,
      stagger: 0.02,
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2
          ref={headingRef}
          className="text-5xl md:text-7xl font-serif font-black text-stone-950 uppercase mb-8 leading-none"
        >
          Let&apos;s Build Something Scalable
        </h2>

        <p className="text-lg md:text-xl text-stone-800 font-serif mb-12 leading-relaxed max-w-2xl mx-auto">
          Whether you have a software project in mind, opportunities in mobile & AI development, 
          or want to collaborate, feel free to get in touch!
        </p>

        {/* Email & Phone CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="mailto:sakshiubane@gmail.com"
            className="px-8 py-4 bg-stone-950 hover:bg-[#eae7df] text-[#eae7df] hover:text-stone-950 border-2 border-stone-950 transition-all duration-300 text-sm md:text-base font-mono uppercase tracking-wider font-bold rounded-none"
          >
            Email: sakshiubane@gmail.com
          </a>
          <a
            href="tel:+919321837795"
            className="px-8 py-4 border-2 border-stone-950 hover:bg-stone-950 hover:text-[#eae7df] text-stone-950 transition-all duration-300 text-sm md:text-base font-mono uppercase tracking-wider font-bold rounded-none"
          >
            Call: +91 93218 37795
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-10 border-y-2 border-stone-950">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative overflow-hidden py-4 px-2 border border-stone-400 hover:border-stone-950 hover:bg-stone-200/50 rounded-none transition-all"
            >
              <div className="relative z-10">
                <p className="text-xs uppercase font-mono tracking-widest text-stone-600 group-hover:text-stone-950 transition-colors font-bold mb-1">
                  {link.label}
                </p>
                <p className="text-xs md:text-sm font-bold text-stone-950 truncate">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div className="space-y-2 text-stone-600 font-mono font-bold text-sm">
          <p>Available for Software Engineering & Mobile App Roles</p>
          <p>Based in Mumbai, India • Open to Remote & On-Site Opportunities</p>
          <p className="text-xs font-mono pt-4 text-stone-500">© 2026 Sakshi Bane. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
