import StatusSection from "./StatusSection";

export default function CategorySection({ title, projects }) {
  const ongoing = projects.filter(
    (projects) => projects.status === "Ongoing"
  );

  const completed = projects.filter(
    (projects) => projects.status === "Completed"
  );

  return (
    <section className="mb-14">
      <h2 className="mb-8 border-b border-gray-300 pb-3 text-3xl font-bold uppercase tracking-wide text-[#0A4DA3]">
        {title}
      </h2>

      <StatusSection title="Ongoing" projects={ongoing} />

      <StatusSection title="Completed" projects={completed} />
    </section>
  );
}