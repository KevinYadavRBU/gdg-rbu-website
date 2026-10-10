import Card from "./Card";

export default function PastEventCard({ title, description, image }) {
  return (
    <Card className="flex h-full min-w-0 flex-col rounded-3xl p-5">
      <span className="self-start rounded-full border-2 border-ink bg-gdg-blue px-3 py-0.5 text-[10px] font-bold text-black">
        completed
      </span>

      <div className="mt-3 flex items-center justify-between gap-2">
        <h3 className="font-bold uppercase break-words">{title}</h3>
        <button
          aria-label={`View ${title} details`}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center border-2 border-ink bg-gdg-yellow text-black"
        >
          ↗
        </button>
      </div>

      <img
        src={image}
        alt={`${title} poster`}
        className="mt-3 h-40 w-full rounded-xl object-cover"
      />

      <p className="mt-3 text-sm leading-6 line-clamp-3 break-words">{description}</p>
    </Card>
  );
}
