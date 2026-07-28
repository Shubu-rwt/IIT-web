import awards from "../data/awards";

import YearSection from "../components/awards/YearSection";

export default function AwardsPage() {

  // Group awards by Year

  const groupedAwards = awards.reduce((acc, awards) => {

    if (!acc[awards.year]) {
      acc[awards.year] = [];
    }

    acc[awards.year].push(awards);

    return acc;

  }, {});

  // Latest Year First

  const years = Object.keys(groupedAwards).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Header */}

        <div className="mb-10">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-cyan-50
              px-4
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              text-cyan-700
            "
          >
            awards
          </span>

          <h1
            className="
              mt-4
              text-4xl
              font-bold
              text-slate-900
              lg:text-5xl
            "
          >
            awards & Honours
          </h1>

          <p
            className="
              mt-4
              max-w-3xl
              text-slate-600
              leading-7
            "
          >
            Recognition received by students under
            <span className="font-semibold text-slate-900">
              {" "}Prof. Deepak Joshi
            </span>
            {" "}for outstanding research contributions,
            innovation and excellence in biomedical engineering.
          </p>

        </div>

        {/* Award Sections */}

        {years.map((year) => (

          <YearSection
            key={year}
            year={year}
            awards={groupedAwards[year]}
          />

        ))}

      </section>

    </main>
  );
}