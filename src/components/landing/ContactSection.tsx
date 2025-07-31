import React from 'react';
import { Card, CardBody, CardHeader, Input, Textarea, Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-white">Contacto</h2>
      <motion.div
        className="w-full max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="bg-gray-800 text-white p-6">
          <CardHeader>
            <motion.h3 variants={itemVariants} className="text-xl text-center">Hablemos de cómo puedo ayudarte.</motion.h3>
          </CardHeader>
          <CardBody>
            <form className="space-y-4">
              <motion.div variants={itemVariants}>
                <Input type="text" label="Nombre" placeholder="Tu nombre completo" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input type="email" label="Email" placeholder="tu@email.com" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Textarea label="Mensaje" placeholder="Escribe tu mensaje aquí..." />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button color="primary" className="w-full">Enviar Mensaje</Button>
              </motion.div>
            </form>
            <motion.div variants={itemVariants} className="flex justify-center space-x-6 mt-8">
              <a href="#" aria-label="LinkedIn"><Linkedin className="text-gray-400 hover:text-white" /></a>
              <a href="#" aria-label="GitHub"><Github className="text-gray-400 hover:text-white" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="text-gray-400 hover:text-white" /></a>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactSection;
