"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/sobre-mi" },
  { name: "Experiencia", href: "/experiencia" },
  { name: "Blog", href: "/blog" },
  { name: "Admin", href: "/admin" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <NextUINavbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Mi Portafolio</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.href} isActive={pathname === link.href}>
            <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
