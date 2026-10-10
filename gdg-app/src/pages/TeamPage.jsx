import { useState } from "react";
import teamPhoto from "../assets/team.webp";

const domains = [
  "MENTORS",
  "CP",
  "DESIGN",
  "MAC",
  "MANAGEMENT",
  "MARKETING",
  "SOCIALS",
  "WEB DEV",
];

export default function TeamPage() {
  const [active, setActive] = useState(null);

  return (
    <main className="overflow-x-hidden text-ink">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2">
        <div className="min-w-0">
          <h1 className="font-pixel text-5xl leading-[0.9] sm:text-6xl md:text-8xl">
            Meet our team.
          </h1>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            {domains.map((domain) => (
              <button
                key={domain}
                type="button"
                aria-pressed={active === domain}
                onClick={() =>
                  setActive((prev) => (prev === domain ? null : domain))
                }
                className={`min-h-[40px] cursor-pointer border-[3px] border-ink px-3 py-2 text-sm font-bold shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:px-6 sm:py-3 ${
                  active === domain ? "bg-ink text-surface" : "bg-surface text-ink"
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        <img
          src={teamPhoto}
          alt="GDG RBU team group photo"
          className="w-full max-w-full border-4 border-ink object-cover shadow-[8px_8px_0_0_var(--color-ink)]"
        />
      </section>

      <hr className="border-t-4 border-ink" />
    </main>
  );
}
