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
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h1 className="font-pixel text-6xl leading-[0.9] md:text-8xl">
            Meet our team.
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            {domains.map((domain) => (
              <button
                key={domain}
                type="button"
                aria-pressed={active === domain}
                onClick={() =>
                  setActive((prev) => (prev === domain ? null : domain))
                }
                className={`cursor-pointer border-[3px] border-black px-6 py-3 text-sm font-bold shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
                  active === domain ? "bg-black text-white" : "bg-white"
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
          className="w-full border-4 border-black object-cover shadow-[8px_8px_0_0_#000]"
        />
      </section>

      <hr className="border-t-4 border-black" />
    </main>
  );
}
