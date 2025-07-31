import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sistema de Gestión de Inventario',
    description: 'Una aplicación web para el seguimiento de inventario que integra análisis de costos y proyecciones de ventas.',
    image: 'https://via.placeholder.com/400x300.png/2D3748/E2E8F0?text=Project+1',
    liveUrl: '#',
    repoUrl: '#',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL']
  },
  {
    title: 'Dashboard de Análisis Financiero',
    description: 'Dashboard interactivo que visualiza estados financieros, permitiendo a los usuarios analizar tendencias y KPIs.',
    image: 'https://via.placeholder.com/400x300.png/2D3748/E2E8F0?text=Project+2',
    liveUrl: '#',
    repoUrl: '#',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB']
  },
  {
    title: 'App de Presupuestos Personales',
    description: 'Una PWA para ayudar a los usuarios a gestionar sus finanzas personales, categorizar gastos y establecer metas de ahorro.',
    image: 'https://via.placeholder.com/400x300.png/2D3748/E2E8F0?text=Project+3',
    liveUrl: '#',
    repoUrl: '#',
    tech: ['Vue.js', 'Firebase', 'Chart.js']
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

const ProjectsSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-white">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div key={project.title} custom={i} variants={cardVariants} initial="hidden" animate="visible">
            <Card isFooterBlurred className="h-full">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{project.tech.join(', ')}</p>
                <h4 className="text-white font-medium text-2xl">{project.title}</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt={project.title}
                className="z-0 w-full h-full object-cover"
                src={project.image}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <p className="text-tiny text-white/80">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button isIconOnly color="primary" variant="light" as="a" href={project.liveUrl} target="_blank"><ExternalLink /></Button>
                  <Button isIconOnly color="primary" variant="light" as="a" href={project.repoUrl} target="_blank"><Github /></Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
