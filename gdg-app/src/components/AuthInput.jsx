export default function AuthInput({ icon, right, ...props }) {
  return (
    <div className="flex items-center gap-3 border-[3px] border-black bg-[#fdfcf8] px-4 py-3 shadow-brutal-sm">
      {icon}
      <input
        className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
        {...props}
      />
      {right}
    </div>
  );
}