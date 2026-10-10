import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { items } from "./MoreMenu";

/* eslint-disable-next-line react-refresh/only-export-components -- shared with Navbar */
export const navLinks = [
  { label: "Home", to: "/", color: "blue" },
  { label: "Team", to: "/team", color: "red" },
  { label: "Events", to: "/events", color: "yellow" },
  { label: "Gallery", to: "/gallery", color: "green" },
  { label: "Portfolio", to: "/portfolio", color: "purple" },
];

export default function MobileMenu({ dark, onToggle, onClose }) {
  return (
    <div className="border-b-2 border-ink bg-surface px-4 pb-6 pt-4 text-ink md:hidden">
      <div className="flex flex-col gap-3">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === "/"}
            onClick={onClose}
          >
            {({ isActive }) => (
              <Button
                as="span"
                color={link.color}
                className={`w-full ${
                  isActive ? "translate-x-0.5 translate-y-0.5 shadow-none" : ""
                }`}
              >
                {link.label}
              </Button>
            )}
          </NavLink>
        ))}

        <p className="mt-2 text-xs font-bold uppercase tracking-widest">More</p>
        {items.map((item) =>
          item.href.startsWith("/") ? (
            <Link
              key={item.label}
              to={item.href}
              onClick={onClose}
              className={`block min-h-[40px] w-full border-[3px] border-ink px-4 py-2 text-center text-sm font-bold text-black shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${item.bg}`}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className={`block min-h-[40px] w-full border-[3px] border-ink px-4 py-2 text-center text-sm font-bold text-black shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${item.bg}`}
            >
              {item.label}
            </a>
          ),
        )}

        <div className="mt-2 flex items-center gap-3">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <Button
            as={Link}
            to="/portfolio"
            color="black"
            className="w-full py-3"
            onClick={onClose}
          >
            Join Us
          </Button>
        </div>
      </div>
    </div>
  );
}
