import React from 'react';
import { Button } from '@heroui/react';

// This will be passed from the main page component
interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = [
  'Hero',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Education',
  'Testimonials',
  'Contact',
];

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  return (
    <nav className="w-full p-4 bg-transparent text-white text-center absolute top-0 z-10">
      <div className="flex justify-center space-x-4">
        {sections.map((section) => (
          <Button
            key={section}
            variant={activeSection === section.toLowerCase() ? 'solid' : 'light'}
            onPress={() => setActiveSection(section.toLowerCase())}
            className="capitalize"
          >
            {section}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
