import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a]">
      <div className="mx-auto max-w-[1280px] px-4 py-14 xl:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="TravelNepal logo"
                width={48}
                height={48}
              />
              <span className="text-[18px] font-bold text-white">
                TravelNepal
              </span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-400">
              Discover the beauty of the Himalayas with our expert guides and
              curated travel packages.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-slate-400 transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Get in Touch */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-slate-400">
              <li>Kathmandu, Nepal</li>
              <li>+977-9845795220</li>
              <li>info@travelnepal.com</li>
            </ul>
          </div>

          {/* Column 4 — Stay Updated */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Stay Updated</h3>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full min-w-0 rounded-lg bg-white/10 px-4 py-2.5 text-[13px] text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full shrink-0 rounded-lg bg-primary px-5 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90 sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar — copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-4 py-5 text-center xl:px-0">
          <p className="text-[12px] text-slate-400">
            © 2026 TravelNepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}