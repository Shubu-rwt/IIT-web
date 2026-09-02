import { Link } from "react-router-dom";
const opportunities = [
  {
    title: "Research Positions",
    description:
      "Openings for JRF, SRF and Ph.D. scholars in Neuromechanics. Candidates from Electrical, Electronics, Mechanical and Computer Science are encouraged to apply.",
    tags: ["JRF", "SRF", "Ph.D."],
  },
  {
    title: "Student Opportunities",
    description:
      "B.Tech., M.Tech. thesis projects and summer internships are available for students interested in biomedical engineering and AI.",
    tags: ["B.Tech", "M.Tech", "Internship"],
  },
  {
    title: "Special Programs",
    description:
      "International collaborations, funded research projects and clinical volunteer studies are actively ongoing in the laboratory.",
    tags: ["Zurich", "Research", "Volunteer"],
  },
];

export default function WorkingOpportunities() {
  return (
    <section
      id="opportunities"
      className="bg-[#F8FAFC] py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">
          Join Our Lab
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Working Opportunities
        </h2>

        <p className="mt-4 max-w-3xl text-slate-500 leading-7">
          Join our multidisciplinary research group working on
          biomechanics, rehabilitation engineering, machine learning,
          wearable healthcare and biomedical technologies.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {opportunities.map((item) => (

            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                hover:shadow-xl
                transition
              "
            >

              <div className="w-10 h-10 rounded-xl bg-[#21409A]/10 mb-5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#21409A]" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7 text-sm">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">

                {item.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-slate-600
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Contact Button */}

        <div className="mt-10 text-center">

          {/* <button
            className="
              rounded-full
              bg-[#21409A]
              px-8
              py-3
              text-white
              font-semibold
              transition
              hover:bg-[#19327b]
            "
          >
            Contact Us
          </button> */}
<Link
                to="/contact"
               className="
              rounded-full
              bg-[#21409A]
              px-8
              py-3
              text-white
              font-semibold
              transition
              hover:bg-[#19327b]
            "
              >
                Contact
              </Link>
        </div>

      </div>
    </section>
  );
}