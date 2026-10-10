import { useState, useEffect } from "react";

export default function TypingText({ text, speed = 150, pause = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const done = count === text.length;
    const timer = setTimeout(
      () => setCount(done ? 0 : count + 1),
      done ? pause : speed
    );
    return () => clearTimeout(timer);
  }, [count, text, speed, pause]);

  return (
    <span>
      {text.slice(0, count)}
      <span className="animate-pulse">|</span>
    </span>
  );
}