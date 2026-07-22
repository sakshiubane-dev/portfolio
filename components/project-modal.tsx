'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { ProjectItem } from './projects-section'

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem
  onClose: () => void
}) {
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate modal in
    gsap.fromTo(
      modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    )

    gsap.fromTo(
      contentRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out' }
    )

    // Prevent body scroll
    document.body.style.overflow = 'hidden'

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-60 w-10 h-10 flex items-center justify-center bg-stone-950 text-[#eae7df] font-mono hover:bg-stone-800 transition-colors border border-stone-950"
        aria-label="Close modal"
      >
        ✕
      </button>

      <div
        ref={contentRef}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#eae7df] text-stone-950 p-8 md:p-12 border-4 border-double border-stone-950 shadow-2xl"
      >
        {/* Newspaper Issue & Category Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-stone-950 pb-2 mb-6 font-mono text-xs font-bold text-stone-800">
          <span>THE DAILY BANE • SPECIAL TECHNICAL DISPATCH</span>
          <span className="uppercase bg-stone-950 text-[#eae7df] px-2 py-0.5">{project.category}</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-black mb-2 uppercase text-stone-950 leading-tight">
          {project.title}
        </h2>

        <p className="text-sm font-mono font-bold text-stone-700 uppercase tracking-widest mb-6 border-b border-stone-400 pb-3">
          {project.subtitle} • PUBLISHED: {project.year}
        </p>

        {/* Custom Visual Banner */}
        <div className="w-full aspect-video bg-stone-900 text-[#eae7df] p-6 mb-8 flex flex-col items-center justify-center relative overflow-hidden border-2 border-stone-950">
          {project.slug === 'cityscan' && (
            <div className="text-center">
              <svg className="w-20 h-20 mx-auto mb-3" fill="none" stroke="#eae7df" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.782V8.018a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                <circle cx="12" cy="12" r="3" fill="#eae7df" opacity="0.6" />
              </svg>
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-stone-300">YOLOv8 Edge Computer Vision Inference Engine</p>
            </div>
          )}

          {project.slug === 'umeed' && (
            <div className="text-center">
              <svg className="w-20 h-20 mx-auto mb-3" fill="none" stroke="#eae7df" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-stone-300">PHP & MySQL Role-Based Administrative Dashboards</p>
            </div>
          )}

          {project.slug === 'baatcheet' && (
            <div className="text-center">
              <svg className="w-20 h-20 mx-auto mb-3" fill="none" stroke="#eae7df" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-stone-300">Real-Time Bi-Directional Messaging & Chat Systems</p>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-900 mb-2 border-b border-stone-400 pb-1">
            EXECUTIVE DISPATCH SUMMARY
          </h3>
          <p className="newspaper-drop-cap text-base md:text-lg font-serif text-stone-900 leading-relaxed text-justify">
            {project.description}
          </p>
        </div>

        {/* Key Highlights / Features */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-8 border-t-2 border-stone-950 pt-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-950 mb-4">
              TECHNICAL SPECIFICATIONS & KEY IMPLEMENTATIONS
            </h3>
            <ul className="space-y-2 font-serif text-stone-900">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base border-b border-stone-300 pb-2">
                  <span className="font-mono text-xs font-bold text-stone-950 mt-0.5">[{idx + 1}]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies / Tags */}
        <div className="mb-8 border-t border-stone-400 pt-6">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-900 mb-3">
            TECHNICAL TOOLING & DEPENDENCIES
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 font-mono text-xs font-bold uppercase bg-stone-950 text-[#eae7df]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer with year */}
        <div className="pt-4 border-t-2 border-stone-950 flex items-center justify-between font-mono text-xs font-bold text-stone-800">
          <span>THE DAILY BANE • ARCHIVE ID #{project.id}</span>
          <span>PUBLISHED {project.year}</span>
        </div>
      </div>
    </div>
  )
}
