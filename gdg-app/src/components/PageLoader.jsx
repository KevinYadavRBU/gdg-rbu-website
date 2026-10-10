import { useState, useEffect } from "react";

const dots = [".", "..", "..."];

export default function PageLoader({ name = "Page" }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((prev) => (prev + 1) % dots.length);
    }, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 text-ink">
      <p className="rounded-none border-[3px] border-ink bg-gdg-bg px-6 py-3 font-bold shadow-brutal-sm">
        Loading-{name}
        {dots[step]}
      </p>
    </main>
  );
}
