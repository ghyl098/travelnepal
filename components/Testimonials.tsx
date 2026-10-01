import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    review:
      "An unforgettable experience! The guides were very knowledgeable and friendly.",
    name: "Aayush Sharma",
    location: "Kathmandu, Nepal",
    avatar: "/testimonials/aayush.png",
  },
  {
    review:
      "Boudha and Patan tour was mesmerizing. Highly recommended agency!",
    name: "Priya Adhikari",
    location: "Pokhara, Nepal",
    avatar: "/testimonials/priya.png",
  },
  {
    review:
      "Everest Base Camp trek was life-changing. Safety and hospitality were top-notch.",
    name: "John Smith",
    location: "Sydney, Australia",
    avatar: "/testimonials/john.png",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-16 xl:px-0">
      <p className="text-[11px] font-bold tracking-[0.2em] text-primary">
        TESTIMONIALS
      </p>
      <h2 className="mt-3 text-[28px] font-bold text-ink">
        What Our Travelers Say
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="mt-5 text-[14px] leading-relaxed text-ink">
              {item.review}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-[15px] font-bold text-ink">{item.name}</p>
                <p className="text-[12px] text-muted">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}