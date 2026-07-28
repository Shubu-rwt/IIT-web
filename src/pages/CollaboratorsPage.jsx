import collaborators from "../data/collaborators";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";

export default function CollaboratorsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

        {/* Hero */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
            <HiOutlineUserGroup className="h-5 w-5 text-[#0A4DA3]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0A4DA3]">
              Collaborators
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Research Collaborators
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-5xl text-xl leading-9 text-gray-600">
            Researchers, clinicians and academic partners from leading
            institutions across India and abroad who have collaborated on
            biomedical engineering, rehabilitation technologies and healthcare
            innovation.
          </p>

          {/* Divider */}
          <div className="mt-12 mb-12 flex items-center gap-4">
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.22em] text-[#0A4DA3]">
              Directory
            </span>

            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
        </div>

        {/* Collaborator Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                  {collaborators.map((person) => (
            <article
              key={person.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3] hover:shadow-md"
            >
              {/* Image */}
              <div className="flex justify-center border-b border-gray-100 bg-gray-50 p-6">
                <img
                  src={person.image}
                  alt={person.name}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/200x200/E5E7EB/6B7280?text=Photo";
                  }}
                  className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-sm transition-all duration-300 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="space-y-2 p-5 text-center">
                <h3 className="text-lg font-semibold leading-snug text-gray-900">
                  {person.name}
                </h3>

                <p className="text-sm font-medium text-[#0A4DA3]">
                  {person.designation}
                </p>

                <p className="text-sm text-gray-700">
                  {person.department}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <BsBuilding className="h-4 w-4 flex-shrink-0" />
                  <span>{person.institution}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FiMapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{person.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}