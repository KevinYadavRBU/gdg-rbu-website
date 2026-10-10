   import teamPhoto from "../assets/team.webp";
   import Card from "./Card";

const features = [
  {
    title: "Passionate Community Leaders",
    text: "Our organizers build an inclusive environment where developers can connect, share knowledge, and grow together.",
  },
  {
    title: "Empowering Developers",
    text: "We host meetups and codelabs to help developers stay current with modern tools and best practices.",
  },
];

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Card className="overflow-hidden bg-[#fdfcf8]">
        <div className="grid md:grid-cols-2">
          {/* Left: text */}
          <div className="p-8 md:p-12">
            <h2 className="font-pixel text-4xl leading-tight md:text-5xl">
              Meet the Google Developer Group Team
            </h2>

            <p className="mt-6 text-sm leading-6">
              Google Developer Groups (GDG) are open and volunteer-run
              communities for developers interested in Google technologies. Our
              team focuses on learning, networking, and collaboration through
              events and hands-on sessions.
            </p>

            <ul className="mt-8 space-y-5">
              {features.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: photo */}
          <img
            src={teamPhoto}
            alt="GDG RBU team"
            className="h-72 w-full object-cover md:h-full"
          />
        </div>
      </Card>
    </section>
  );
}