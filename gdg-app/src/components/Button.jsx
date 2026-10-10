const colors = {
  white: "bg-white",
  yellow: "bg-gdg-yellow",
  blue: "bg-gdg-blue",
  red: "bg-gdg-red",
  green: "bg-gdg-green",
  purple: "bg-gdg-purple",
  black: "bg-black text-white",
};

export default function Button({ as: Tag = "button", children, color = "white", rounded = false, className = "", ...props }) {
  return (
    <Tag
      className={`cursor-pointer border-[3px] border-black px-4 py-2 text-sm font-bold shadow-brutal-sm transition-all
        hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none
        ${rounded ? "rounded-lg" : "rounded-none"} ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}