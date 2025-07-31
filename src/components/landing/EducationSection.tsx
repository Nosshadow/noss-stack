import React from 'react';
import { Card, CardBody, CardHeader, Divider } from '@heroui/react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Licenciatura en Contaduría Pública',
    institution: 'Universidad Central de Venezuela',
    date: '2017 - 2021',
    description: 'Sólida formación en principios contables, auditoría, finanzas y legislación fiscal.'
  },
  {
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Platzi Master',
    date: '2022 - 2023',
    description: 'Programa intensivo cubriendo tecnologías como React, Node.js, Python con Django, y bases de datos SQL y NoSQL.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EducationSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-white">Educación y Certificaciones</h2>
      <motion.div 
        className="w-full max-w-2xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {education.map((edu, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="w-full bg-gray-800 text-white">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">{edu.date}</p>
                </div>
                <h4 className="text-md font-semibold text-primary">{edu.institution}</h4>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{edu.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EducationSection;
