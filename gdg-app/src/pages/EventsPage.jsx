import EventsSection from "../components/EventsSection";
import PastEventCard from "../components/PastEventCard";
import { pastEvents } from "../data/events";

export default function EventsPage() {
  return (
    <main className="overflow-x-hidden text-ink">
      <EventsSection />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl">Past Events</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((event) => (
            <PastEventCard key={event.title} {...event} />
          ))}
        </div>
      </section>
    </main>
  );
}
