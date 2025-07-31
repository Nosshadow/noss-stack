import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Un blog sobre desarrollo de software.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Aquí se podría agregar un Navbar o Header específico para el blog */}
      <main>{children}</main>
      {/* Aquí se podría agregar un Footer específico para el blog */}
    </section>
  );
}
