'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { CustomCursor } from '@/components/custom-cursor'
import { Preloader } from '@/components/preloader'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  const [preloaderComplete, setPreloaderComplete] = useState(false)

  return (
    <main className="overflow-x-hidden">
      <Preloader onComplete={() => setPreloaderComplete(true)} />
      {preloaderComplete && <CustomCursor />}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
