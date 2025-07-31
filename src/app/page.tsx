"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Link,
  Progress,
  Spinner,
} from "@heroui/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <header className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-foreground">
          Demostración de Cohesión de Tema
        </h1>
        <ThemeSwitcher />
      </header>
      <main className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-foreground">
            Componentes por Defecto
          </h2>
          <p className="text-foreground-600">
            Estos componentes no tienen props de estilo. Heredan su apariencia
            directamente del tema definido en `tailwind.config.ts`.
          </p>
          <Divider />
          <div className="flex flex-wrap items-center gap-4">
            <Button>Botón</Button>
            <Button color="secondary">Botón Secondary</Button>
            <Button color="success">Botón Success</Button>
            <Button color="warning">Botón Warning</Button>
            <Button color="danger">Botón Danger</Button>
            <Button isDisabled>Botón Deshabilitado</Button>
          </div>
          <div className="flex items-center gap-4">
            <Spinner />
            <Spinner color="secondary" />
            <Spinner color="success" />
            <Spinner color="warning" />
            <Spinner color="danger" />
          </div>
          <div>
            <Link href="#">Enlace (Primary por defecto)</Link>
          </div>
          <div>
            <Input label="Input (Bordered por defecto)" />
          </div>
          <div>
            <Progress
              aria-label="Cargando..."
              value={60}
              className="max-w-md"
            />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-foreground">
            Contenedores
          </h2>
          <p className="text-foreground-600">
            Los contenedores como Card usan los colores `background` y `foreground` del tema.
          </p>
          <Divider />
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">
                Card (Sombra md por defecto)
              </h3>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                El fondo de esta tarjeta y el color del texto se definen
                globalmente en el tema. No se necesitan clases adicionales.
              </p>
            </CardBody>
          </Card>
        </section>
      </main>
    </div>
  );
}
