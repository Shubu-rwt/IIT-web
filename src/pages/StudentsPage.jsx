import { FiExternalLink } from "react-icons/fi";
import students from "../data/students";

/* =========================================================
   STUDENT CARD
========================================================= */

function StudentCard({ student }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3]/40 hover:shadow-xl">

      {/* Top Information */}
      <div className="flex gap-5 p-5">

        {/* Photo */}
        <div className="shrink-0">
          <div className="overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
            <img
              src={student.photo}
              alt={student.name}
              className="h-28 w-24 object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Name + Designation */}
        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-start justify-between gap-2">

            <div>

              <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                {student.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#0A4DA3]">
                Ph.D. Scholar
              </p>

            </div>

            {/* Scholarship */}
            {student.scholarship && (
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0A4DA3]">
                {student.scholarship}
              </span>
            )}

          </div>

        </div>

      </div>


      {/* Divider */}
      <div className="mx-5 border-t border-gray-100" />


      {/* Biography */}
      <div className="flex flex-1 flex-col p-5">

        <p className="text-sm leading-6 text-gray-600">
          {student.bio}
        </p>


        {/* Website */}
        {student.website && (
          <a
            href={student.website}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-[#0A4DA3] transition-all hover:gap-3"
          >
            {student.websiteLabel || "Website"}

            <FiExternalLink size={14} />

          </a>
        )}

      </div>

    </article>
  );
}


/* =========================================================
   PROJECT RESEARCH SCIENTIST CARD
========================================================= */

function ScientistCard({ student }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3]/40 hover:shadow-xl">

      {/* Top Information */}
      <div className="flex gap-5 p-5">

        {/* Photo */}
        <div className="shrink-0">

          <div className="overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">

            <img
              src={student.photo}
              alt={student.name}
              className="h-28 w-24 object-cover transition duration-500 group-hover:scale-105"
            />

          </div>

        </div>


        {/* Name */}
        <div className="min-w-0 flex-1">

          <h3 className="text-lg font-semibold tracking-tight text-gray-900">
            {student.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-[#0A4DA3]">
            Project Research Scientist
          </p>

        </div>

      </div>


      {/* Divider */}
      <div className="mx-5 border-t border-gray-100" />


      {/* Biography */}
      <div className="flex flex-1 flex-col p-5">

        <p className="text-sm leading-6 text-gray-600">
          {student.bio}
        </p>

        {student.website && (
          <a
            href={student.website}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-[#0A4DA3] transition-all hover:gap-3"
          >
            {student.websiteLabel || "Website"}

            <FiExternalLink size={14} />

          </a>
        )}

      </div>

    </article>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ title, description }) {
  return (
    <div className="mb-8">

      <div className="flex items-center gap-4">

        {/* Blue vertical line */}
        <div className="h-8 w-1 rounded-full bg-[#0A4DA3]" />

        <div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm text-gray-500">
              {description}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   LAB ALUMNI
========================================================= */

function LabAlumni() {
  return (
    <section className="mt-16">

      <SectionHeading
        title="Lab Alumni"
        description="Former members of the research laboratory"
      />


      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="min-w-[750px] w-full border-collapse">

            {/* Header */}
            <thead>

              <tr className="bg-gray-50">

                <th className="w-[170px] border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Category
                </th>

                <th className="w-[190px] border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Name
                </th>

                <th className="border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Current Designation
                </th>

              </tr>

            </thead>


            {/* Body */}
            <tbody>

              {students.labAlumni.map((group) => (

                group.rows.map((row, rowIndex) => (

                  <tr
                    key={`${group.category}-${row.name || rowIndex}`}
                    className="transition hover:bg-blue-50/40"
                  >

                    {/* Category */}
                    {rowIndex === 0 && (
                      <td
                        rowSpan={group.rows.length}
                        className="border-b border-gray-100 px-5 py-4 align-top text-sm font-semibold text-gray-800"
                      >
                        {group.category}
                      </td>
                    )}


                    {/* Full row */}
                    {row.fullRow ? (

                      <td
                        colSpan={2}
                        className="border-b border-gray-100 px-5 py-4 text-sm leading-6 text-gray-600"
                      >
                        {row.designation}
                      </td>

                    ) : (

                      <>

                        {/* Name */}
                        <td className="border-b border-gray-100 px-5 py-4 text-sm font-medium text-gray-800">
                          {row.name}
                        </td>


                        {/* Designation */}
                        <td
                          className="border-b border-gray-100 px-5 py-4 text-sm leading-6 text-gray-600"
                          dangerouslySetInnerHTML={{
                            __html: row.designation,
                          }}
                        />

                      </>

                    )}

                  </tr>

                ))

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

export default function StudentsPage() {

  return (
    <section className="min-h-screen bg-gray-50">


      {/* =====================================================
          COMPACT HERO
      ===================================================== */}

      <div className="border-b border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">

          <div className="max-w-3xl">

            {/* Label */}
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A4DA3]">
              Students
            </span>


            {/* Heading */}
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Research Students
            </h1>


            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Current members and researchers contributing to the
              Neuromechanics Research Lab.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">


        {/* ===================================================
            PH.D. SCHOLARS
        =================================================== */}

        <section>

          <SectionHeading
            title="Ph.D. Scholars"
            description="Current doctoral researchers and their areas of research"
          />


          <div className="grid gap-6 lg:grid-cols-2">

            {students.phdScholars.map((student) => (

              <StudentCard
                key={student.id}
                student={student}
              />

            ))}

          </div>

        </section>


        {/* ===================================================
            PROJECT RESEARCH SCIENTISTS
        =================================================== */}

        <section className="mt-16">

          <SectionHeading
            title="Project Research Scientists"
            description="Researchers working on ongoing laboratory projects"
          />


          <div className="grid gap-6 lg:grid-cols-2">

            {students.projectResearchScientists.map(
              (student) => (

                <ScientistCard
                  key={student.id}
                  student={student}
                />

              )
            )}

          </div>

        </section>


        {/* ===================================================
            LAB ALUMNI
        =================================================== */}

        <LabAlumni />

      </main>

    </section>
  );
}