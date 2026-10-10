const colors = {
  white: "bg-white",
  yellow: "bg-gdg-yellow",
  blue: "bg-gdg-blue",
  purple: "bg-gdg-purple",
};

export default function Card({ children, color = "white", className = "" }) {
  return (
    <div
      className={`rounded-xl border-[3px] border-black shadow-brutal ${colors[color]} ${className}`}
    >
      {children}
    </div>
  );
}