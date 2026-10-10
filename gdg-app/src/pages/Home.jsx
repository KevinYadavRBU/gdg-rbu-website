import Hero from "../components/Hero";
import EventsSection from "../components/EventsSection";
import TeamSection from "../components/TeamSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventsSection />
      <TeamSection />
      <FAQSection />
    </main>
  );
}