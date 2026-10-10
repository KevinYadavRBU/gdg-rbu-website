import Card from "./Card";
import Button from "./Button";
import { upcomingEvent } from "../data/events";

export default function EventsSection({ event = upcomingEvent }) {
  return (
    <section className="mx-auto max-w-6xl overflow-x-hidden px-4 py-12 text-ink sm:px-6 sm:py-16">
      <h2 className="text-center font-pixel text-3xl sm:text-4xl md:text-5xl">Upcoming Event</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-[2fr_1fr]">
        {/* Dark event card */}
        <Card className="relative flex min-h-72 min-w-0 flex-col justify-end overflow-hidden p-6 text-white">
          <img
            src={event.image}
            alt={`${event.title} poster`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
          <span className="absolute left-4 top-4 z-10 rounded-full border-2 border-ink bg-surface px-3 py-0.5 text-[10px] font-bold text-ink">
            UPCOMING
          </span>

          <div className="relative">
            <h3 className="font-pixel text-2xl uppercase">{event.title}</h3>
            <p className="mt-2 max-w-xl text-xs leading-5 text-gray-300">
              {event.description}
            </p>

            <button
              aria-label="View event details"
              className="mt-4 flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-ink bg-gdg-yellow text-black"
            >
              ↗
            </button>
          </div>
        </Card>

        {/* Yellow register card */}
        <Card color="yellow" className="flex min-w-0 flex-col justify-between p-6">
          <h3 className="font-pixel text-3xl leading-tight text-black sm:text-4xl">New Event</h3>

          <div className="mt-6 border-t border-dotted border-ink pt-4 text-black">
            <p className="text-[10px] font-bold uppercase tracking-widest">Date &amp; Time</p>
            <p className="mt-1 font-bold">{event.date}</p>
            <p className="font-bold break-words">{event.time}</p>
          </div>

          <Button color="black" className="mt-6 w-full py-3">
            Register Now
          </Button>
        </Card>
      </div>
    </section>
  );
}
