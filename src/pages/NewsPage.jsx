import news from "../data/news";

export default function NewsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">

        {/* Hero */}

        <div>

          <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">
            NEWS
          </span>

          <h1 className="mt-5 text-4xl font-bold text-gray-900">
            Latest Updates
          </h1>

          <p className="mt-4 text-gray-600">
            Recent student achievements, conferences,
            laboratory visits and research activities.
          </p>

        </div>

        <div className="mt-10 border-t border-gray-200" />

        {/* Timeline */}

        <div className="mt-8 space-y-8">

          {news.map((item) => (

            <div
              key={item.id}
              className="flex gap-6 border-b border-gray-100 pb-8"
            >

              {/* Date */}

              <div className="w-24 shrink-0">

                <p className="text-sm font-semibold text-[#0A4DA3]">
                  {item.date}
                </p>

              </div>

              {/* Dot */}

              <div className="relative flex w-6 justify-center">

                <div className="mt-2 h-3 w-3 rounded-full bg-[#0A4DA3]" />

              </div>

              {/* Content */}

              <div className="flex-1">

                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {item.category}
                </span>

                <h3 className="mt-2 text-lg font-medium leading-7 text-gray-900">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}