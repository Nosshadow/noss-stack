import React from 'react';
import { Card, CardBody, User } from '@heroui/react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Profesora de Contabilidad, UCV',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    comment: 'Su capacidad para conectar los mundos de la contabilidad y la tecnología es impresionante. Siempre demostró una curiosidad insaciable y un rigor analítico excepcional.'
  },
  {
    name: 'John Smith',
    role: 'Mentor de Programación, Platzi',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    comment: 'Un desarrollador con un talento natural para la lógica y la resolución de problemas. Su código es limpio, eficiente y siempre está dispuesto a aprender y mejorar.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const TestimonialsSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 bg-gray-950">
      <h2 className="text-3xl font-bold mb-8 text-white">Testimonios</h2>
      <motion.div 
        className="grid md:grid-cols-2 gap-8 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="p-6 bg-gray-800 text-white h-full">
              <CardBody>
                <p className="italic mb-4">{testimonial.comment}</p>
                <User
                  name={testimonial.name}
                  description={testimonial.role}
                  avatarProps={{
                    src: testimonial.avatar
                  }}
                />
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
