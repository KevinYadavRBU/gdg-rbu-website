import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/gdg_logo.png";

const links = [
  { label: "Home", to: "/", color: "blue" },
  { label: "Team", to: "/team", color: "red" },
  { label: "Events", to: "/events", color: "yellow" },
  { label: "Gallery", to: "/gallery", color: "green" },
  { label: "Portfolio", to: "/portfolio", color: "purple" },
  { label: "More", to: "/more", color: "blue" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b-2 border-black bg-white px-6 py-3">
      <Link to="/">
        <img src={logo} alt="GDG logo" className="h-8" />
      </Link>

      <div className="hidden gap-4 md:flex">
        {links.map((link) => (
          <NavLink key={link.label} to={link.to} end={link.to === "/"}>
            {({ isActive }) => (
              <Button
                as="span"
                color={link.color}
                rounded
                className={isActive ? "translate-x-0.5 translate-y-0.5 shadow-none" : ""}
              >
                {link.label}
              </Button>
            )}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm font-medium">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gdg-purple text-xs font-bold text-white">
          KY
        </div>
        <span className="hidden sm:inline">Kevin Yadav</span>
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </nav>
  );
}