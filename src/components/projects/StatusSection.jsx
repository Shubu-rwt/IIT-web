import ProjectItem from "./ProjectItem";

export default function StatusSection({ title, projects }) {
  if (!projects.length) return null;

  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-6 w-1 rounded bg-[#0A4DA3]" />
        <h2 className="text-2xl font-bold text-[#0A4DA3]">
          {title} ({projects.length})
        </h2>
      </div>

      <div>
        {projects.map((projects) => (
          <ProjectItem key={projects.id} projects={projects} />
        ))}
      </div>
    </section>
  );
}