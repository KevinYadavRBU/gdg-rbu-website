import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Button from "./Button";
import MoreMenu from "./MoreMenu";
import ThemeToggle from "./ThemeToggle";
import MobileMenu, { navLinks } from "./MobileMenu";
import logo from "../assets/gdg_logo.png";

export default function Navbar() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const location = useLocation();
  const [openAt, setOpenAt] = useState(null);
  const menuOpen = openAt === location.pathname;

  function handleThemeToggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenAt(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <nav className="flex items-center justify-between gap-3 border-b-2 border-ink bg-surface px-4 py-3 text-ink sm:px-6">
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="GDG logo"
            className="h-8 rounded dark:bg-white dark:px-2 dark:py-0.5"
          />
        </Link>

        <div className="hidden gap-4 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} end={link.to === "/"}>
              {({ isActive }) => (
                <Button
                  as="span"
                  color={link.color}
                  rounded
                  className={
                    isActive
                      ? "translate-x-0.5 translate-y-0.5 shadow-none"
                      : ""
                  }
                >
                  {link.label}
                </Button>
              )}
            </NavLink>
          ))}
          <MoreMenu />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle dark={dark} onToggle={handleThemeToggle} />
          <Button as={Link} to="/portfolio" color="black">
            Join Us
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle dark={dark} onToggle={handleThemeToggle} />
          <button
            type="button"
            onClick={() =>
              menuOpen ? setOpenAt(null) : setOpenAt(location.pathname)
            }
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 cursor-pointer items-center justify-center border-[3px] border-ink bg-surface text-ink shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <MobileMenu
          dark={dark}
          onToggle={handleThemeToggle}
          onClose={() => setOpenAt(null)}
        />
      )}
    </header>
  );
}
