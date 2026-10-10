import Hero from "../components/Hero";
import EventsSection from "../components/EventsSection";
import TeamSection from "../components/TeamSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-ink">
      <Hero />
      <EventsSection />
      <TeamSection />
      <FAQSection />
    </main>
  );
}
