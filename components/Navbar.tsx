"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 xl:px-0">
        <Link href="/" className="flex items-center gap-1.5">
          <Image src="/logo.png" alt="TravelNepal logo" width={60} height={60} />
          <span className="text-xl font-bold text-ink">TravelNepal</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative block pb-1.5 text-[15px] font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-muted after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 ${
                    isActive
                      ? "text-primary after:origin-left after:scale-x-100 after:bg-primary"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            aria-label="Favourites"
            className="hidden size-10 items-center justify-center rounded-full bg-slate-100 text-muted hover:text-primary sm:flex"
          >
            <Heart size={20} fill="currentColor" />
          </button>
          <Link
            href="/booking"
            className="hidden h-12 items-center rounded-lg bg-primary px-6 text-[15px] font-medium text-white hover:opacity-90 md:flex"
          >
            Book a Trip
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-10 items-center justify-center rounded-lg text-ink md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto max-w-[1280px] px-4 py-4">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-[15px] font-semibold ${
                      isActive ? "text-primary" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3">
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="flex h-12 items-center justify-center rounded-lg bg-primary text-[15px] font-medium text-white"
              >
                Book a Trip
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}