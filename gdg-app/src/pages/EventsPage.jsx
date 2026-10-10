import EventsSection from "../components/EventsSection";
import PastEventCard from "../components/PastEventCard";
import { pastEvents } from "../data/events";

export default function EventsPage() {
  return (
    <main>
      <EventsSection />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-pixel text-4xl md:text-5xl">Past Events</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((event) => (
            <PastEventCard key={event.title} {...event} />
          ))}
        </div>
      </section>
    </main>
  );
}
