import { FiArrowRight } from "react-icons/fi";
import students from "../data/students";

export default function StudentsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Hero */}

        <div className="max-w-3xl">

          <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">
            Students
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900">
            Research Students
          </h1>

          <p className="mt-4 text-gray-600">
            Current members of the Neuromechanics Research Lab.
          </p>

        </div>

        <div className="mt-10 h-px bg-gray-200"></div>

        {/* Cards */}

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {students.map((student) => (

            <div
              key={student.id}
              className="group flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3] hover:shadow-lg"
            >

              {/* Image */}

              <img
                src={student.photo}
                alt={student.name}
                className="h-24 w-24 flex-shrink-0 rounded-xl object-cover ring-2 ring-gray-100 transition group-hover:ring-[#0A4DA3]/30"
              />

              {/* Content */}

              <div className="flex flex-1 flex-col">

                <div className="flex items-start justify-between">

                  <div>

                    <h2 className="text-lg font-semibold text-gray-900">
                      {student.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {student.designation}
                    </p>

                  </div>

                  {student.scholarship && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-[#0A4DA3]">
                      {student.scholarship}
                    </span>
                  )}

                </div>

                {/* Research */}

                <div className="mt-4 flex flex-wrap gap-2">

                  {student.research.map((area) => (

                    <span
                      key={area}
                      className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                    >
                      {area}
                    </span>

                  ))}

                </div>

                {/* Button */}

                <button className="mt-5 flex w-fit items-center gap-2 text-sm font-medium text-[#0A4DA3] transition hover:gap-3">

                  View Profile

                  <FiArrowRight size={16} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}