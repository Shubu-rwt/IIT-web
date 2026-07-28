import YearSection from "./YearSection";

export default function PublicationTimeline({
  publicationData,
  activeFilter,
  searchTerm,
}) {

  // Merge all publications
  const publications = [
    ...publicationData.journals,
    ...publicationData.conferences,
    ...publicationData.patents,
    ...publicationData.bookChapters,
  ];

  // Search + Filter
  const filtered = publications.filter((item) => {

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.title?.toLowerCase().includes(search) ||
      item.authors?.toLowerCase().includes(search) ||
      item.inventors?.toLowerCase().includes(search) ||
      item.journal?.toLowerCase().includes(search) ||
      item.conference?.toLowerCase().includes(search) ||
      item.publisher?.toLowerCase().includes(search) ||
      String(item.year).includes(search);

    const matchesFilter =
      activeFilter === "All" ||
      item.type === activeFilter;

    return matchesSearch && matchesFilter;

  });

  // Sort Latest First
  filtered.sort((a, b) => b.year - a.year);

  // Group by Year
  const grouped = filtered.reduce((acc, item) => {

    if (!acc[item.year]) {
      acc[item.year] = [];
    }

    acc[item.year].push(item);

    return acc;

  }, {});

  const years = Object.keys(grouped).sort(
    (a, b) => b - a
  );

  // Empty State
  if (years.length === 0) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-white
          py-20
          text-center
        "
      >

        <h3 className="text-2xl font-bold text-slate-800">
          No Publications Found
        </h3>

        <p className="mt-3 text-slate-500">
          Try another keyword or filter.
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-12">

      {years.map((year) => (

        <YearSection
          key={year}
          year={year}
          publications={grouped[year]}
        />

      ))}

    </div>
  );
}