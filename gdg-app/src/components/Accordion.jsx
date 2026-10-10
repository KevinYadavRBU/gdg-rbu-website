import { useState } from "react";
import Card from "./Card";

export default function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-w-0">
      <Card>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="flex min-h-[40px] w-full cursor-pointer items-center justify-between gap-3 p-4 text-left font-bold"
        >
          {question}
          <svg
            className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </Card>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-2 pr-2 pt-2">
            <Card className="bg-surface-alt p-4 text-sm">{answer}</Card>
          </div>
        </div>
      </div>
    </div>
  );
}
