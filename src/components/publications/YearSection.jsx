import PublicationItem from "../publications/PublicationItems";

export default function YearSection({
  year,
  publications,
}) {
  return (
    <section className="mb-14">

      {/* Year Header */}

      <div className="sticky top-[88px] z-20 bg-[#F8FAFC] py-3">

        <div className="flex items-center gap-5">

          {/* Year */}

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-[#163D88]
              text-white
              shadow-md
            "
          >
            <span className="text-xl font-bold">
              {year}
            </span>
          </div>

          {/* Divider */}

          <div className="flex-1 border-t border-slate-300" />

          {/* Count */}

          <span
            className="
              rounded-full
              bg-white
              border
              border-slate-300
              px-4
              py-2
              text-sm
              font-medium
              text-slate-600
            "
          >
            {publications.length} Publication
            {publications.length > 1 ? "s" : ""}
          </span>

        </div>

      </div>

      {/* Publications */}

      <div
        className="
          mt-4
          rounded-3xl
          border
          border-slate-200
          bg-white
          overflow-hidden
        "
      >
        {publications.map((publication) => (

          <PublicationItem
            key={`${publication.type}-${publication.id}`}
            publication={publication}
          />

        ))}
      </div>

    </section>
  );
}