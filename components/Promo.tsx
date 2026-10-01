"use client";

import { useState } from "react";
import { Copy, X } from "lucide-react";

export default function Promo() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("TRAVEL25");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="mx-auto max-w-[1280px] px-4 pb-16 xl:px-0">
        <div className="flex min-h-[280px] flex-col items-center justify-between gap-6 rounded-2xl bg-[#0f172a] px-8 py-10 md:h-[280px] md:flex-row md:px-16">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-bold tracking-[0.2em] text-primary">
              LIMITED TIME OFFER
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-tight text-white">
              Get 25% Off on Your First Adventure Booking!
            </h2>
            <p className="mt-3 max-w-[600px] text-[13px] leading-relaxed text-slate-300">
              Explore breathtaking destinations with our certified local guides.
              Book now and save big.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full shrink-0 rounded-lg bg-[#f97316] px-8 py-4 text-[15px] font-semibold text-white transition hover:opacity-90 md:w-auto"
          >
            Claim Offer Now
          </button>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[400px] rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-ink"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <h3 className="text-[22px] font-bold text-ink">
                Claim Your Offer!
              </h3>
              <p className="mt-1.5 text-[15px] font-bold text-primary">
                Congratulations! 🎉
              </p>
              <p className="mt-3 text-[13px] text-muted">
                You&apos;ve unlocked an exclusive discount:
              </p>

              <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-primary bg-primary/5 px-5 py-3">
                <span className="text-[20px] font-bold tracking-wide text-ink">
                  TRAVEL25
                </span>
                <button
                  type="button"
                  aria-label="Copy code"
                  onClick={copyCode}
                  className="text-slate-400 hover:text-primary"
                >
                  <Copy size={18} />
                </button>
              </div>

              {copied && (
                <p className="mt-2 text-[12px] font-medium text-primary">
                  Code copied!
                </p>
              )}

              <p className="mt-4 text-[12.5px] leading-snug text-muted">
                Use this code at checkout to save 25% on your booking!
              </p>
              <p className="mt-1.5 text-[12px] text-slate-400">
                Code expires in 24 hours.
              </p>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-5 w-full rounded-lg bg-[#f97316] py-3 text-[14px] font-semibold text-white transition hover:opacity-90"
              >
                Got It, Explore Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}