import React from 'react';
import { Button } from '@heroui/react';
import { Avatar } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <motion.div
      className="h-screen w-full flex flex-col items-center justify-center text-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-32 h-32 text-large mb-4" />
      </motion.div>
      <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-2">
        Tu Nombre Aquí
      </motion.h1>
      <motion.h2 variants={itemVariants} className="text-2xl text-gray-400 mb-4">
        Programador Junior & Contador Público: Soluciones Integrales para tu Negocio Digital
      </motion.h2>
      <motion.p variants={itemVariants} className="max-w-2xl mb-6">
        Apasionado por el código y los números, combinando la lógica de programación con la precisión contable para optimizar procesos y generar valor.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button color="primary" size="lg" endContent={<ArrowRight />}>
          Ver mis Proyectos
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
