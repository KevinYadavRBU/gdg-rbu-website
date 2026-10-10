const colors = {
  white: "bg-surface text-ink",
  yellow: "bg-gdg-yellow text-black",
  blue: "bg-gdg-blue text-black",
  red: "bg-gdg-red text-black",
  green: "bg-gdg-green text-black",
  purple: "bg-gdg-purple text-black",
  black: "bg-ink text-surface",
};

export default function Button({
  as: Tag = "button",
  children,
  color = "white",
  rounded = false,
  className = "",
  ...props
}) {
  return (
    <Tag
      className={`inline-block min-h-[40px] cursor-pointer border-[3px] border-ink px-4 py-2 text-center text-sm font-bold shadow-brutal-sm transition-all
        hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none
        ${rounded ? "rounded-lg" : "rounded-none"}
        ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
