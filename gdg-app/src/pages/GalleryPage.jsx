import { useState } from "react";

const events = [
  { name: "Tech Sprint", count: 9, bg: "bg-gdg-blue" },
  { name: "Google Cloud Study Jam", count: 7, bg: "bg-gdg-red" },
  { name: "Explore 2.0", count: 6, bg: "bg-gdg-yellow" },
];

export default function GalleryPage() {
  const [active, setActive] = useState(null);

  const totalPhotos = events.reduce((sum, event) => sum + event.count, 0);
  const selectedEvent = events.find((event) => event.name === active);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="-rotate-1 border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000] md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-mono text-5xl font-extrabold uppercase md:text-6xl">
              Evidence
            </h1>
            <p className="mt-2 font-mono text-sm uppercase">
              Global Event Gallery
            </p>
          </div>

          <span className="border-[3px] border-black bg-gdg-yellow px-4 py-2 font-mono font-bold uppercase shadow-brutal-sm">
            {selectedEvent ? selectedEvent.count : totalPhotos} Photos
          </span>
        </div>

        <p className="mt-6 font-mono text-xs uppercase">
          {selectedEvent
            ? `Showing ${selectedEvent.count} photos from ${selectedEvent.name}`
            : `Showing all ${totalPhotos} photos across ${events.length} events`}
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          {events.map((event) => (
            <button
              key={event.name}
              type="button"
              aria-pressed={active === event.name}
              onClick={() =>
                setActive((prev) => (prev === event.name ? null : event.name))
              }
              className={`cursor-pointer border-[3px] border-black px-4 py-2 font-mono text-sm font-bold uppercase transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
                active === event.name
                  ? "translate-x-0.5 translate-y-0.5 shadow-none"
                  : "shadow-brutal-sm"
              } ${event.bg}`}
            >
              {event.name} ({event.count})
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
