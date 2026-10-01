import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";

const destinations = [
  {
    image: "/destinations/annapurna.jpg",
    name: "Annapurna Base Camp",
    description:
      "Breathtaking Himalayan peaks and world-class alpine trekking trails.",
    rating: "4.9 (1.4k)",
    price: "From $550",
  },
  {
    image: "/destinations/boudha.jpg",
    name: "Boudhanath Stupa",
    description:
      "Spritual hub, magnificant giant mandala dome, and vibrant Tibetan culture.",
    rating: "4.8 (2.1k)",
    price: "From $350",
  },
  {
    image: "/destinations/patan.jpg",
    name: "Patan Durbar Square",
    description:
      "Ancient Newari architecture, intricate wood carvings, and historical courtyards.",
    rating: "4.9 (1.8k)",
    price: "From $300",
  },
  {
    image: "/destinations/phewa-lake.jpg",
    name: "Phewa Lake, Pokhara",
    description:
      "Serene lakeside atmosphere with stunning mountain views, and adventurous paragliding.",
    rating: "4.9 (3.2k)",
    price: "From $280",
  },
  {
    image: "/destinations/lumbini.jpg",
    name: "Lumbini, Nepal",
    description:
      "The sacred birthplace of Lord Buddha, world peace pagodam and serene monasteries.",
    rating: "4.8 (1.6k)",
    price: "From $220",
  },
  {
    image: "/destinations/everest.jpg",
    name: "Everest Base Camp",
    description:
      "Stand at the foot of the world's highest peak with expert guidance.",
    rating: "5.0 (5.6k)",
    price: "From $1,250",
  },
];

export default function Destinations() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-16 xl:px-0">
      <p className="text-[11px] font-bold tracking-[0.2em] text-primary">
        EXPLORE THE NEPAL
      </p>
      <h2 className="mt-3 text-[28px] font-bold text-ink">
        Popular Destinations
      </h2>
      <p className="mt-2 max-w-[500px] text-[13px] leading-relaxed text-muted">
        Discover unforgettable places recommended by our travel experts.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((place) => (
          <Link
            key={place.name}
            href={`/destinations/${place.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="group relative aspect-[395/450] overflow-hidden rounded-xl"
          >
            <Image
              src={place.image}
              alt={place.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-white/15 p-5 backdrop-blur-md transition-transform duration-700 ease-out md:translate-y-full md:group-hover:translate-y-0">
              <h3 className="text-[18px] font-bold leading-tight text-white drop-shadow-md">
                {place.name}
              </h3>
              <p className="mt-1.5 text-[12px] leading-snug text-white/90 drop-shadow">
                {place.description}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[12px] font-semibold text-white drop-shadow">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span>{place.rating}</span>
                </div>
                <span className="text-[12px] font-semibold text-white drop-shadow">
                  {place.price}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-1 text-[12px] font-medium text-white drop-shadow">
                See More Details
                <ChevronRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
