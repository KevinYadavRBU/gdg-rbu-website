import Card from "./Card";
import Button from "./Button";

export default function EventsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-pixel text-4xl md:text-5xl">Upcoming Event</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-[2fr_1fr]">
        {/* Dark event card */}
        <Card className="relative flex min-h-72 flex-col justify-end overflow-hidden bg-gradient-to-b from-gray-300 to-gray-900 p-6 text-white">
          <span className="absolute left-4 top-4 rounded-full border-2 border-black bg-white px-3 py-0.5 text-[10px] font-bold text-black">
            UPCOMING
          </span>

          <h3 className="font-pixel text-2xl uppercase">GDG Orientation</h3>
          <p className="mt-2 max-w-xl text-xs leading-5 text-gray-300">
            Google Developer Groups (GDG) – Student Chapter is a community of
            students passionate about technology, innovation, and learning. We
            bring students together to learn, build, and grow through technical
            workshops, hands-on sessions, hackathons, projects, and networking.
          </p>

          <button
            aria-label="View event details"
            className="mt-4 flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-black bg-gdg-yellow text-black"
          >
            ↗
          </button>
        </Card>

        {/* Yellow register card */}
        <Card color="yellow" className="flex flex-col justify-between p-6">
          <h3 className="font-pixel text-4xl leading-tight">New Event</h3>

          <div className="mt-6 border-t border-dotted border-black pt-4">
            <p className="text-[10px] font-bold uppercase tracking-widest">Date &amp; Time</p>
            <p className="mt-1 font-bold">Oct 7, 2026</p>
            <p className="font-bold">3:00 PM</p>
          </div>

          <Button color="black" className="mt-6 w-full py-3">
            Register Now
          </Button>
        </Card>
      </div>
    </section>
  );
}