import AwardItems from "./AwardItems";

export default function YearSection({ year, awards }) {
  return (
    <section className="mb-10">

      {/* Header */}

      <div className="mb-5 flex items-center gap-5">

        <h2 className="text-4xl font-bold text-[#163D88]">
          {year}
        </h2>

        <div className="h-px flex-1 bg-slate-300" />

        <span className="text-sm text-slate-500">
          {awards.length} Award{awards.length > 1 ? "s" : ""}
        </span>

      </div>

      {/* List */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

        {awards.map((awards) => (
          <AwardItems
            key={awards.id}
            awards={awards}
          />
        ))}

      </div>

    </section>
  );
}