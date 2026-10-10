import Accordion from "./Accordion";

const faqs = [
  {
    question: "What is GDG RBU?",
    answer:
      "GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration.",
  },
  {
    question: "How to join GDG?",
    answer: "Write the real joining steps here.",
  },
  {
    question: "What does a GDG Lead do?",
    answer: "Write what a GDG Lead does here.",
  },
  {
    question: "How is GDG related to Google?",
    answer: "Write how GDG relates to Google here.",
  },
  {
    question: "How to reach us?",
    answer: "You can email us at gdsc@rknec.edu.",
  },
];

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-3xl overflow-x-hidden px-4 py-12 text-ink sm:px-6 sm:py-16">
      <h2 className="text-center font-pixel text-3xl sm:text-4xl md:text-5xl">FAQs</h2>

      <div className="mt-10 space-y-5">
        {faqs.map((faq) => (
          <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
