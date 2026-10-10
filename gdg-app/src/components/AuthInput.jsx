export default function AuthInput({ icon, right, ...props }) {
  return (
    <div className="flex min-h-[40px] items-center gap-3 border-[3px] border-ink bg-surface-alt px-4 py-3 text-ink shadow-brutal-sm">
      {icon}
      <input
        className="w-full min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
        {...props}
      />
      {right}
    </div>
  );
}
