"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";

const slides = [
  {
    image: "/logo1.avif",
    title: "Conquer the Highest Mountain Peaks",
    description:
      "Experience the thrill of high-altitude trekking and breathtaking Himalayan views.",
  },
  {
    image: "/logo2.avif",
    title: "Relax on Pristine Tropical Beaches",
    description:
      "Escape to crystal-clear waters, white sands, and unforgettable island sunsets.",
  },
  {
    image: "/logo3.avif",
    title: "Discover Ancient Cultural Heritage",
    description:
      "Immerse yourself in rich history, stunning architecture, and vibrant local traditions.",
  },
];

const fields = [
  { icon: MapPin, label: "Location", value: "Where are you going?" },
  { icon: Calendar, label: "Date", value: "Select dates" },
  { icon: Users, label: "Guests", value: "Add guests" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[760px] overflow-hidden md:h-[600px]">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1300ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-[#0f172a]/25" />

      <div className="relative mx-auto h-full max-w-[1280px] px-4 xl:px-0">
        <div className="pt-[80px] md:pt-[122px]">
          <h1 className="max-w-[686px] text-[32px] font-bold leading-tight text-white sm:text-[40px] md:text-[50px]">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-[560px] text-[15px] text-slate-100 md:text-lg">
            {slide.description}
          </p>
        </div>

        <div className="absolute bottom-6 left-4 right-4 flex flex-col gap-3 rounded-2xl bg-white/25 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm md:bottom-auto md:left-0 md:right-0 md:top-[384px] md:h-[88px] md:flex-row md:items-center md:justify-between md:gap-0 md:p-0 md:px-[86px]">
          {fields.map(({ icon: Icon, label, value }) => (
            <button
              key={label}
              type="button"
              className="flex h-[52px] w-full items-center gap-3 rounded-xl bg-white/40 px-4 md:w-[240px] md:gap-4 md:px-5"
            >
              <Icon size={22} className="shrink-0 text-ink md:size-6" />
              <div className="flex flex-1 flex-col items-start gap-0.5 md:items-center md:gap-1">
                <span className="text-[10px] font-medium text-muted md:text-[11px]">
                  {label}
                </span>
                <span className="text-[13px] font-semibold text-ink md:text-sm">
                  {value}
                </span>
              </div>
            </button>
          ))}
          <Link
            href="/destinations"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-[15px] font-semibold text-white hover:opacity-90 md:h-14 md:w-[170px]"
          >
            Explore Now
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full ${
              i === current ? "w-6 bg-primary" : "w-2 bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}