import { HiOutlineBriefcase } from "react-icons/hi2";
import projects from "../data/projects";
import CategorySection from "../components/projects/CategorySection";

export default function ProjectsPage() {
  const asPI = projects.filter(
    (project) => project.category === "As PI"
  );

  const asCoPI = projects.filter(
    (project) => project.category === "As Co-PI"
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

        {/* Hero */}
        <div className="mb-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
            <HiOutlineBriefcase className="h-5 w-5 text-[#0A4DA3]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0A4DA3]">
              Projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Research Projects
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-4xl text leading-9 text-gray-600">
            Browse funded research projects, collaborative initiatives,
            biomedical innovations, rehabilitation technologies and healthcare
            research undertaken by{" "}
            <span className="font-semibold text-gray-900">
              Prof. Deepak Joshi
            </span>.
          </p>
        </div>

        {/* Sections */}
        <CategorySection
          title="As Principal Investigator (As PI)"
          projects={asPI}
        />

        <CategorySection
          title="As Co-Principal Investigator (As Co-PI)"
          projects={asCoPI}
        />

      </div>
    </section>
  );
}