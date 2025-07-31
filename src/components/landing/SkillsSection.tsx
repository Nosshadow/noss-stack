import React from 'react';
import { Card, CardBody, CardHeader, Chip, Tab, Tabs } from '@heroui/react';
import { motion } from 'framer-motion';
import { Code, Calculator, Users } from 'lucide-react';

const skills = {
  programming: [
    'Python', 'JavaScript', 'Java', 'PHP', 'TypeScript',
    'React', 'Next.js', 'Node.js', 'Django', 'Flask', 'Laravel', 'Spring Boot',
    'SQL (MySQL, PostgreSQL)', 'NoSQL (MongoDB)',
    'Git', 'Docker', 'VS Code', 'Postman',
    'APIs RESTful', 'POO', 'Estructuras de Datos'
  ],
  accounting: [
    'Peachtree', 'SAP', 'Quickbooks',
    'Contabilidad General', 'Auditoría', 'Impuestos', 'Análisis Financiero', 'Costos',
    'NIIF/IFRS', 'Principios Contables',
    'Interpretación de Estados Financieros', 'Presupuestos'
  ],
  soft: [
    'Resolución de Problemas', 'Comunicación Efectiva', 'Trabajo en Equipo',
    'Adaptabilidad', 'Pensamiento Lógico', 'Gestión del Tiempo', 'Atención al Detalle'
  ]
};

const SkillsSection = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-gray-950">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Card className="max-w-4xl w-full bg-gray-800 text-white">
          <CardHeader>
            <h2 className="text-3xl font-bold text-center w-full">Habilidades</h2>
          </CardHeader>
          <CardBody>
            <Tabs aria-label="Skills tabs" color="primary" variant="bordered">
              <Tab key="programming" title={<div className="flex items-center space-x-2"><Code /><span>Programación</span></div>}>
                <div className="flex flex-wrap gap-2 p-4">
                  {skills.programming.map(skill => <Chip key={skill} color="primary" variant="flat">{skill}</Chip>)}
                </div>
              </Tab>
              <Tab key="accounting" title={<div className="flex items-center space-x-2"><Calculator /><span>Contabilidad</span></div>}>
                <div className="flex flex-wrap gap-2 p-4">
                  {skills.accounting.map(skill => <Chip key={skill} color="secondary" variant="flat">{skill}</Chip>)}
                </div>
              </Tab>
              <Tab key="soft" title={<div className="flex items-center space-x-2"><Users /><span>Transversales</span></div>}>
                <div className="flex flex-wrap gap-2 p-4">
                  {skills.soft.map(skill => <Chip key={skill} color="success" variant="flat">{skill}</Chip>)}
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default SkillsSection;
