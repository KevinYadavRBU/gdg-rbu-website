import Card from "./Card";
import Shapes from "./Shapes";
import logo from "../assets/gdg_logo.png";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    bg: "bg-red-400",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    bg: "bg-blue-400",
    icon: <span className="text-base font-extrabold">in</span>,
  },
  {
    label: "X",
    href: "https://x.com/",
    bg: "bg-green-400",
    icon: <span className="text-base font-extrabold">X</span>,
  },
];

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-4xl px-6">
        <Card className="bg-slate-50 p-8">
          {/* Logo and title */}
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="GDG logo" className="h-14" />
            <h2 className="mt-4 font-pixel text-3xl">Google Developers Group</h2>
            <p className="mt-2 text-sm font-bold">On Campus • Ramdeobaba University</p>
          </div>

          <hr className="my-6 border-t-2 border-dashed border-black" />

          {/* Info boxes */}
          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <Card color="blue" className="p-4 text-sm font-bold shadow-brutal-sm">
                Ramdeobaba University
                <br />
                Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013
              </Card>

              <Card color="yellow" className="p-4 text-sm font-bold shadow-brutal-sm">
                gdsc@rknec.edu
              </Card>
            </div>

            <Card color="purple" className="flex flex-col items-center justify-center gap-4 p-4 shadow-brutal-sm">
              <p className="text-sm font-bold text-white">Follow Us:</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-none border-2 border-black shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${s.bg}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </Card>
      </div>

      <Shapes className="mt-10" />
    </footer>
  );
}