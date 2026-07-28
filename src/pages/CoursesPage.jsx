import { useState } from "react";
import courses from "../data/courses";

export default function CoursesPage() {
  const [expanded, setExpanded] = useState([]);

  const toggleCourse = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((item) => item !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Hero */}

        <div className="max-w-3xl">

          <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">
            Courses
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900">
            Courses Taught
          </h1>

          <p className="mt-4 text-gray-600">
            Undergraduate and postgraduate courses taught at IIT Delhi.
          </p>

        </div>

        <div className="mt-10 h-px bg-gray-200" />

        {/* Masonry */}

        <div className="mt-10 columns-1 gap-6 md:columns-2">

          {courses.map((course) => {

            const isOpen = expanded.includes(course.id);

            return (

              <div
                key={course.id}
                className="mb-6 break-inside-avoid rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#0A4DA3] hover:shadow-lg"
              >

                {/* Header */}

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h2 className="text-xl font-semibold leading-8 text-gray-900">
                      {course.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {course.code}
                    </p>

                  </div>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                    {course.credits}
                  </span>

                </div>

                <div className="my-5 h-px bg-gray-100" />

                <div className="flex items-center justify-between">

                  <p className="text-sm font-semibold uppercase tracking-wider text-[#0A4DA3]">
                    Offered {course.semesters.length} Times
                  </p>

                  <button
                    onClick={() => toggleCourse(course.id)}
                    className="text-sm font-medium text-[#0A4DA3] hover:underline"
                  >
                    {isOpen ? "Show Less ▲" : "View All ▼"}
                  </button>

                </div>

                <ul
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "mt-5 max-h-[500px]" : "mt-5 max-h-32"
                  } space-y-2`}
                >

                  {(isOpen
                    ? course.semesters
                    : course.semesters.slice(0, 3)
                  ).map((semester, index) => (

                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >

                      <span className="mt-2 h-2 w-2 rounded-full bg-[#0A4DA3]" />

                      {semester}

                    </li>

                  ))}

                </ul>

                {!isOpen && course.semesters.length > 3 && (

                  <p className="mt-4 pl-5 text-sm font-medium text-gray-400">

                    + {course.semesters.length - 3} more semesters

                  </p>

                )}

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}