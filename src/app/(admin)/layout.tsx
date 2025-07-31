import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de Administración",
  description: "Gestión de contenido del sitio.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Aquí se podría agregar una barra lateral o menú de navegación para el panel */}
      <main>{children}</main>
    </section>
  );
}
