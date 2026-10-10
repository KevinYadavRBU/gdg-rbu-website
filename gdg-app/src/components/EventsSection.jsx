import Card from "./Card";
import Button from "./Button";
import { upcomingEvent } from "../data/events";

export default function EventsSection({ event = upcomingEvent }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-pixel text-4xl md:text-5xl">Upcoming Event</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-[2fr_1fr]">
        {/* Dark event card */}
        <Card className="relative flex min-h-72 flex-col justify-end overflow-hidden p-6 text-white">
          <img
            src={event.image}
            alt={`${event.title} poster`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
          <span className="absolute left-4 top-4 z-10 rounded-full border-2 border-black bg-white px-3 py-0.5 text-[10px] font-bold text-black">
            UPCOMING
          </span>

          <div className="relative">
            <h3 className="font-pixel text-2xl uppercase">{event.title}</h3>
            <p className="mt-2 max-w-xl text-xs leading-5 text-gray-300">
              {event.description}
            </p>

            <button
              aria-label="View event details"
              className="mt-4 flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-black bg-gdg-yellow text-black"
            >
              ↗
            </button>
          </div>
        </Card>

        {/* Yellow register card */}
        <Card color="yellow" className="flex flex-col justify-between p-6">
          <h3 className="font-pixel text-4xl leading-tight">New Event</h3>

          <div className="mt-6 border-t border-dotted border-black pt-4">
            <p className="text-[10px] font-bold uppercase tracking-widest">Date &amp; Time</p>
            <p className="mt-1 font-bold">{event.date}</p>
            <p className="font-bold">{event.time}</p>
          </div>

          <Button color="black" className="mt-6 w-full py-3">
            Register Now
          </Button>
        </Card>
      </div>
    </section>
  );
}
