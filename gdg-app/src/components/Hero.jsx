import { Link } from "react-router-dom";
import Button from "./Button";
import TypingText from "./TypingText";


const isLoggedIn = false;

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 overflow-x-hidden px-4 py-12 text-ink sm:px-6 sm:py-16 md:grid-cols-2">
      {/* Left: text */}
      <div className="min-w-0">
        <h1 className="font-pixel text-4xl uppercase leading-none sm:text-5xl md:text-6xl">
          Google Developers
          Group, RBU
        </h1>

        <p className="mt-6 max-w-md text-lg leading-8 text-ink sm:text-xl sm:leading-9">
          Empowering students with cutting-edge tech skills, community, and
          resources for a future in technology
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button as={Link} to="/events" className="px-6 py-3">LEARN MORE</Button>
          <Button as={Link} to={isLoggedIn ? "/profile" : "/portfolio"} className="px-6 py-3">{isLoggedIn ? "PROFILE" : "JOIN"}</Button>
        </div>

        <span className="mt-4 inline-block -rotate-2 rounded border-2 border-ink bg-ink px-2 py-1 text-[10px] font-bold text-surface">
          GDG • RBU
        </span>
      </div>

      {/* Right: shape section with search */}
      <div className="relative h-72 min-w-0">
        <div className="absolute right-0 top-0 h-40 w-3/5 rounded-3xl border-2 border-ink bg-ink" />
        <div className="absolute bottom-0 left-0 h-48 w-full rounded-3xl border-2 border-ink bg-ink" />
        <div className="absolute left-1/2 top-1/2 w-3/5 max-w-full -translate-x-1/2 -translate-y-1/2 select-none rounded-full border-2 border-ink bg-surface px-5 py-2 text-left text-sm text-ink">
  <TypingText text="gdgrbu.app" />
</div>
      </div>
    </section>
  );
}
