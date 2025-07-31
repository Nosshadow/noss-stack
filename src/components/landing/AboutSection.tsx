import React from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-gray-900">
      <Card className="max-w-4xl w-full bg-gray-800 text-white">
        <CardHeader>
          <motion.h2 
            className="text-3xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Acerca de Mí
          </motion.h2>
        </CardHeader>
        <CardBody>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Mi Historia</h3>
              <p className="mb-4">
                Desde que descubrí cómo una línea de código podía resolver problemas complejos, me fascinó la programación. Paralelamente, mi formación como Contador Público me enseñó la importancia de la precisión y el análisis riguroso. Hoy, combino estas dos pasiones para crear soluciones digitales que no solo son funcionales, sino también financieramente inteligentes.
              </p>
              <h3 className="text-xl font-semibold mb-2">Filosofía de Trabajo</h3>
              <p>
                Creo en el código limpio, la comunicación clara y la mejora continua. Mi enfoque se centra en entender el problema a fondo para construir una solución eficiente y escalable, siempre con un ojo en el impacto que tendrá en el negocio.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Por qué yo?</h3>
              <p className="mb-4">
                Mi perfil dual me da una ventaja única. Entiendo la lógica de negocio detrás de una aplicación financiera y puedo construirla. Puedo analizar datos desde una perspectiva contable y desarrollar las herramientas para visualizarlos.
              </p>
              <h3 className="text-xl font-semibold mb-2">Valores</h3>
              <ul className="list-disc list-inside">
                <li>Atención al Detalle</li>
                <li>Eficiencia y Optimización</li>
                <li>Aprendizaje Continuo</li>
                <li>Integridad y Transparencia</li>
              </ul>
            </div>
          </motion.div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutSection;
