import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio personal",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Aquí se podría agregar un Navbar o Header común para el landing page */}
      <main>{children}</main>
      {/* Aquí se podría agregar un Footer común para el landing page */}
    </section>
  );
}
