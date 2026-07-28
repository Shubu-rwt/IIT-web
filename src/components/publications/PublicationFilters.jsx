const filters = [
  "All",
  "Journal",
  "Conference",
  "Patent",
  "Book Chapter",
];

export default function PublicationFilter({
  activeFilter,
  setActiveFilter,
}) {
  return (
    <div className="flex flex-wrap gap-2">

      {filters.map((filter) => {

        const active = activeFilter === filter;

        return (

          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              rounded-xl
              px-4
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                active
                  ? "bg-[#163D88] text-white shadow-md"
                  : "bg-white border border-slate-300 text-slate-600 hover:border-[#163D88] hover:text-[#163D88]"
              }
            `}
          >
            {filter}
          </button>

        );

      })}

    </div>
  );
}