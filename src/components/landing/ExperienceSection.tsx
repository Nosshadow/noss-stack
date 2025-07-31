import React from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Desarrollador Freelance',
    company: 'Proyectos Personales',
    date: '2023 - Presente',
    description: 'Desarrollo de aplicaciones web completas, desde el diseño de la base de datos hasta el despliegue. Especializado en la creación de soluciones a medida para pequeñas empresas.'
  },
  {
    role: 'Asistente de Contabilidad',
    company: 'Firma Contable XYZ',
    date: '2021 - 2023',
    description: 'Preparación de estados financieros, conciliaciones bancarias y declaraciones de impuestos. Optimicé procesos internos desarrollando scripts en Python para automatizar tareas repetitivas.'
  }
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const ExperienceSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 bg-gray-950">
      <h2 className="text-3xl font-bold mb-8 text-white">Experiencia</h2>
      <motion.div 
        className="relative w-full max-w-2xl"
        variants={timelineVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

        {experiences.map((exp, index) => (
          <motion.div key={index} className="relative mb-8" variants={itemVariants}>
            <div className="flex items-center">
              <div className="z-10 w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <Card className="w-full mx-auto bg-gray-800 text-white">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                  </div>
                  <h4 className="text-md font-semibold text-primary">{exp.company}</h4>
                </CardHeader>
                <CardBody>
                  <p>{exp.description}</p>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
