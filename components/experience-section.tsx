'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    year: '2024 — 2024',
    type: 'Internship',
    title: 'SCADA Systems & Automation Intern',
    company: 'ASHIDA ELECTRONICS PVT. LTD',
    description:
      'Worked on SCADA systems for industrial automation, assisting with system monitoring, HMI configuration, alarm/trend setup, and component testing. Gained practical exposure to real-time data monitoring, industrial control systems, and automation workflows.',
  },
]

const education = [
  {
    year: '2025 — 2028',
    degree: 'BTech in Computer Science Engineering',
    institution: 'Amity University, Mumbai',
  },
  {
    year: '2022 — 2025',
    degree: 'Diploma in Electronics & Telecommunication Engineering (EXTC)',
    institution: 'Vidyalankar Polytechnic',
  },
  {
    year: '2010 — 2022',
    degree: 'Secondary Education',
    institution: 'Auxilium Convent High School',
  },
]

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'HTML / CSS', 'PHP'],
  },
  {
    category: 'Frameworks & Computer Vision',
    items: ['Flutter', 'YOLOv8', 'Embedded Systems'],
  },
  {
    category: 'CS Fundamentals',
    items: [
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems (OS)',
      'Computer Networks',
    ],
  },
  {
    category: 'Developer Tools & AI',
    items: ['GitHub', 'Google Antigravity', 'Claude AI', 'MySQL', 'SCADA / HMI Tools'],
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = document.querySelectorAll('[data-exp-card]')
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: index * 0.1,
      })
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen py-20 px-4 border-b-4 border-double border-stone-950"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif font-black text-stone-950 uppercase mb-4">
          Experience & Skills
        </h2>
        <div className="w-full h-0.5 bg-stone-950 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience & Education Timeline */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 text-stone-950 uppercase border-b-2 border-stone-950 pb-2">
                Experience
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    data-exp-card
                    className="opacity-0 translate-x-8 pb-8 border-b border-stone-950"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs uppercase font-mono tracking-widest px-2.5 py-0.5 bg-stone-950 text-[#eae7df] font-bold">
                        {exp.type}
                      </span>
                      <p className="text-xs font-mono text-stone-600 font-bold">{exp.year}</p>
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-stone-950 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-stone-700 font-mono font-bold mb-3">{exp.company}</p>
                    <p className="text-stone-800 leading-relaxed text-sm md:text-base text-justify">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 text-stone-950 uppercase border-b-2 border-stone-950 pb-2">
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    data-exp-card
                    className="opacity-0 translate-x-8 pb-6 border-b border-stone-400 last:border-0"
                  >
                    <p className="text-xs font-mono text-stone-950 font-bold mb-1">{edu.year}</p>
                    <h4 className="text-lg font-serif font-bold text-stone-950 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-stone-700 font-medium">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8 text-stone-950 uppercase border-b-2 border-stone-950 pb-2">
              Skills & Expertise
            </h3>

            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index} data-exp-card className="opacity-0 translate-x-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-stone-600 font-bold mb-3 border-b border-stone-950 pb-1">
                    {skillGroup.category}
                  </p>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <p
                        key={skill}
                        className="text-sm text-stone-800 font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
