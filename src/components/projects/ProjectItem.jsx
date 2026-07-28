import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

export default function ProjectItem({ projects }) {
  return (
    <article className="border-b border-gray-200 py-5 last:border-b-0">
      {/* Title */}
      <h3 className="text-lg font-semibold leading-snug text-gray-900">
        {projects.title}
      </h3>

      {/* Metadata */}
      <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <HiOutlineBuildingOffice2 className="h-4 w-4 text-[#0A4DA3]" />
          <span>{projects.fundingAgency}</span>
        </div>

        <div className="flex items-center gap-2">
          <HiOutlineCurrencyRupee className="h-4 w-4 text-[#0A4DA3]" />
          <span>{projects.budget}</span>
        </div>

        {projects.collaborator && (
          <div className="flex items-center gap-2">
            <FiUsers className="h-4 w-4 text-[#0A4DA3]" />
            <span>{projects.collaborator}</span>
          </div>
        )}
      </div>
    </article>
  );
}