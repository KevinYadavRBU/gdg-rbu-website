const colors = {
  white: "bg-surface text-ink",
  yellow: "bg-gdg-yellow text-black",
  blue: "bg-gdg-blue text-black",
  purple: "bg-gdg-purple text-black",
};

export default function Card({ children, color = "white", className = "" }) {
  return (
    <div
      className={`rounded-xl border-[3px] border-ink text-ink shadow-brutal ${colors[color]} ${className}`}
    >
      {children}
    </div>
  );
}
