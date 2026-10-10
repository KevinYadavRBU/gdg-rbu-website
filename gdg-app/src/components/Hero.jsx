import Button from "./Button";
import TypingText from "./Typingtext";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
      {/* Left: text */}
      <div>
        <h1 className="font-pixel text-5xl uppercase leading-none md:text-6xl">
          Google Developers 
          Group, RBU
        </h1>

        <p className="mt-6 max-w-md text-xl leading-9">
          Empowering students with cutting-edge tech skills, community, and
          resources for a future in technology
        </p>

        <div className="mt-8 flex gap-4">
          <Button className="px-6 py-3">LEARN MORE</Button>
          <Button className="px-6 py-3">PROFILE</Button>
        </div>

        <span className="mt-4 inline-block -rotate-2 rounded bg-black px-2 py-1 text-[10px] font-bold text-white">
          GDG • RBU
        </span>
      </div>

      {/* Right: black shape with search */}
      <div className="relative h-72">
        <div className="absolute right-0 top-0 h-40 w-3/5 rounded-3xl bg-black" />
        <div className="absolute bottom-0 left-0 h-48 w-full rounded-3xl bg-black" />
        <div className="absolute left-1/2 top-1/2 w-3/5 -translate-x-1/2 -translate-y-1/2 select-none rounded-full bg-white px-5 py-2 text-left text-sm">
  <TypingText text="gdgrbu.app" />
</div>
      </div>
    </section>
  );
}