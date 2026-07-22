'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export function Navbar() {
  const navRef = useRef<HTMLNavElement>(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Magnetic effect for nav items
    const setupMagneticHover = () => {
      const navLinks = document.querySelectorAll('[data-magnetic]')
      navLinks.forEach((link) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = (link as HTMLElement).getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2

          gsap.to(link, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
          })
        }

        const handleMouseLeave = () => {
          gsap.to(link, {
            x: 0,
            y: 0,
            duration: 0.3,
          })
        }

        link.addEventListener('mousemove', handleMouseMove)
        link.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    setupMagneticHover()

    // Track scroll for active section
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#eae7df]/95 backdrop-blur-md border-b-2 border-stone-900 shadow-sm'
          : 'bg-[#eae7df] border-b border-stone-900/40'
      }`}
    >
      {/* Top Dateline Bar */}
      <div className="border-b border-stone-900/60 py-1 px-4 text-[10px] md:text-xs font-mono tracking-wider flex items-center justify-between text-stone-700 max-w-7xl mx-auto">
        <span>VOL. I • NO. 1</span>
        <span className="hidden md:inline font-bold">THE DAILY BANE • SOFTWARE ENGINEERING GAZETTE</span>
        <span>MUMBAI, INDIA</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Masthead Title */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group"
          data-magnetic
        >
          <div className="w-9 h-9 bg-stone-950 text-[#eae7df] flex items-center justify-center font-serif font-black text-lg border-2 border-stone-950 transition-transform duration-300 group-hover:rotate-6">
            SB
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="font-serif font-black text-stone-950 text-sm md:text-base uppercase tracking-wider">
              Bane
            </span>
            <span className="font-mono text-[8px] text-stone-600 font-bold uppercase tracking-widest mt-0.5">
              Gazette
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 font-serif">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest text-stone-800 hover:text-stone-950 font-bold transition-colors relative group"
              data-magnetic
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-950 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/Docs/sakshi bane resumee.pdf"
          download="sakshi_bane_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-1.5 border-2 border-stone-950 hover:bg-stone-950 hover:text-[#eae7df] transition-all duration-300 text-xs font-mono uppercase tracking-widest font-bold"
          data-magnetic
        >
          Download Resume
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-stone-950 transition-all" />
          <span className="w-6 h-0.5 bg-stone-950 transition-all" />
          <span className="w-6 h-0.5 bg-stone-950 transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-stone-950 bg-[#eae7df] shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-serif uppercase tracking-widest text-stone-900 font-bold hover:text-amber-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/Docs/sakshi bane resumee.pdf"
              download="sakshi_bane_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border-2 border-stone-950 hover:bg-stone-950 hover:text-[#eae7df] transition-all duration-300 text-xs font-mono uppercase tracking-widest font-bold mt-2 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
