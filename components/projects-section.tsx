'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProjectModal } from './project-modal'

gsap.registerPlugin(ScrollTrigger)

export interface ProjectItem {
  id: number
  title: string
  subtitle: string
  color: string
  slug: string
  description: string
  highlights: string[]
  tags: string[]
  year: number
  category: string
  liveUrl?: string
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'CITYSCAN',
    subtitle: 'Edge AI Infrastructure Detection App',
    category: 'Computer Vision & Mobile App',
    color: '#10b981',
    slug: 'cityscan',
    description:
      'Edge AI application designed for smart city infrastructure monitoring. Built with Flutter and integrated with YOLOv8 to automatically detect potholes, road cracks, and pipeline defects in real-time, even without internet connectivity.',
    highlights: [
      'Built a cross-platform Flutter application for pothole, crack, and pipeline defect detection.',
      'Integrated YOLOv8 model for real-time computer vision inference on edge devices.',
      'Supported offline scanning capabilities allowing field workers to operate in connectivity-blind spots.',
      'Implemented automated severity assessment algorithms and geotagged report generation for municipal maintenance teams.',
    ],
    tags: ['Flutter', 'YOLOv8', 'Edge AI', 'Offline Scanning', 'Geotagging'],
    year: 2026,
    liveUrl: 'https://city-scan-website.vercel.app/',
  },
  {
    id: 2,
    title: 'UMEED',
    subtitle: 'NGO Donation & Volunteer Platform',
    category: 'Full-Stack Web Application',
    color: '#f97316',
    slug: 'umeed',
    description:
      'Comprehensive donation management and volunteer coordination platform empowering non-governmental organizations with role-based administrative controls, automated tax receipt generation, and real-time transaction tracking.',
    highlights: [
      'Built PHP/MySQL role-based dashboards tailored specifically for admins, donors, and volunteers.',
      'Implemented full workflow management for volunteer applications and detailed donation tracking.',
      'Integrated TCPDF library to dynamically output downloadable tax receipts and appreciation certificates.',
      'Configured PHPMailer integration for automated transactional email alerts, donation receipts, and registration updates.',
    ],
    tags: ['PHP', 'MySQL', 'Role-Based Dashboards', 'TCPDF', 'PHPMailer'],
    year: 2025,
  },
  {
    id: 3,
    title: 'BAATCHEET',
    subtitle: 'Real-Time Chat Application',
    category: 'Messaging & Web Platform',
    color: '#a855f7',
    slug: 'baatcheet',
    description:
      'A feature-rich real-time chat application inspired by WhatsApp. Features responsive messaging interfaces across web and mobile viewports with low-latency message delivery, contact search, and conversation management.',
    highlights: [
      'Built WhatsApp-like responsive web and mobile messaging user interfaces with dark mode aesthetic.',
      'Implemented instant bi-directional communication channels and reliable conversation state management.',
      'Designed frictionless user onboarding, conversation history retrieval, and smooth interactive chat experience.',
      'Optimized UI micro-interactions and layout transitions for high responsiveness.',
    ],
    tags: ['Real-Time Chat', 'Web & Mobile UI', 'Instant Messaging', 'UI/UX Design'],
    year: 2025,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  useEffect(() => {
    const projectCards = document.querySelectorAll('[data-project-card]')
    
    projectCards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
      })
    })
  }, [])

  return (
    <>
      <section ref={sectionRef} id="work" className="py-16 px-4 max-w-7xl mx-auto border-b-4 border-double border-stone-950">
        <div className="w-full mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-600 font-bold mb-1">
            SECTION B • FEATURED DEVELOPMENTS & CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-stone-950 uppercase">
            Major Engineering Dispatches
          </h2>
          <p className="text-sm font-mono text-stone-700 italic mt-1">
            Click any headline dispatch below to open the complete technical report.
          </p>
          <div className="w-full h-0.5 bg-stone-950 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-project-card
              className="group opacity-0 translate-y-8 text-left bg-stone-200/50 p-6 border-2 border-stone-950 hover:bg-stone-300/60 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Article Top Tag & Issue No */}
                <div className="flex items-center justify-between border-b border-stone-950 pb-2 mb-4 font-mono text-[11px] font-bold text-stone-800">
                  <span className="uppercase">DISPATCH #{idx + 1}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-2xl font-serif font-black text-stone-950 group-hover:underline underline-offset-4 mb-2 uppercase">
                  {project.title}
                </h3>

                <p className="text-xs font-mono font-bold text-stone-700 uppercase mb-4 tracking-wider">
                  {project.subtitle}
                </p>

                {/* Article Snippet */}
                <p className="text-sm font-serif text-stone-800 leading-relaxed text-justify mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 border-t border-stone-400 pt-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase bg-stone-950 text-[#eae7df] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono font-bold text-stone-950 group-hover:translate-x-1 transition-transform">
                  <span>READ FULL REPORT</span>
                  <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
