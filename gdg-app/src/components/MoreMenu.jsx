import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const items = [
  { label: "Recruitment", href: "/events", bg: "bg-gdg-red" },
  { label: "Docs", href: "https://www.gdgrbu.app/docs", bg: "bg-gdg-yellow" },
  { label: "Blogs", href: "https://www.gdgrbu.app/blogs", bg: "bg-gdg-green" },
  { label: "Links", href: "https://www.gdgrbu.app/links", bg: "bg-gdg-purple" },
];

export default function MoreMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleMouseDown(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <Button
        rounded
        color="blue"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
      >
        More
      </Button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-56 space-y-4 rounded-xl border border-slate-300 bg-[#fdfcf8] p-4 shadow-lg">
          {items.map((item) => {
            const className = `block w-full rounded-lg border-[3px] border-black px-4 py-2 text-left text-sm font-bold shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${item.bg}`;
            return item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className={className}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className={className}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
