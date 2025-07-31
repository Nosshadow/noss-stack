'use client';

import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';

// Import Components
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import SkillsSection from '@/components/landing/SkillsSection';
import ProjectsSection from '@/components/landing/ProjectsSection';
import ExperienceSection from '@/components/landing/ExperienceSection';
import EducationSection from '@/components/landing/EducationSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import ContactSection from '@/components/landing/ContactSection';

const sections = [
  { id: 'hero', Component: HeroSection },
  { id: 'about', Component: AboutSection },
  { id: 'skills', Component: SkillsSection },
  { id: 'projects', Component: ProjectsSection },
  { id: 'experience', Component: ExperienceSection },
  { id: 'education', Component: EducationSection },
  { id: 'testimonials', Component: TestimonialsSection },
  { id: 'contact', Component: ContactSection },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(0); // Use index for easier navigation

  const changeSection = useCallback((direction: number) => {
    setActiveSection((prev) => {
      const newIndex = prev + direction;
      if (newIndex >= 0 && newIndex < sections.length) {
        return newIndex;
      }
      return prev; // Stay at the current section if at bounds
    });
  }, []);

  const debouncedChangeSection = useDebouncedCallback(changeSection, 200);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      debouncedChangeSection(1);
    } else if (e.deltaY < 0) {
      debouncedChangeSection(-1);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const swipeThreshold = 50;

    if (offset.y < -swipeThreshold || velocity.y < -500) {
      changeSection(1); // Swipe Up
    } else if (offset.y > swipeThreshold || velocity.y > 500) {
      changeSection(-1); // Swipe Down
    }
  };
  
  const ActiveComponent = sections[activeSection].Component;

  return (
    <motion.div
      className="relative h-screen overflow-hidden"
      onWheel={handleWheel}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      dragElastic={0.1}
    >
      <Navbar
        activeSection={sections[activeSection].id}
        setActiveSection={(id) => {
          const newIndex = sections.findIndex((s) => s.id === id);
          if (newIndex !== -1) setActiveSection(newIndex);
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}
