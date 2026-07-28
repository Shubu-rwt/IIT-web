import { FiAward, FiUser } from "react-icons/fi";

export default function AwardItem({ awards }) {
  return (
    <article className="border-b border-slate-200 px-8 py-8 last:border-b-0 lg:px-10">

      <div
        className={`grid gap-8 ${
          awards.certificate
            ? "lg:grid-cols-[minmax(0,1fr)_120px]"
            : "grid-cols-1"
        }`}
      >

        {/* Left Content */}

        <div className="min-w-0">

          {/* Prize + Year */}

          <div className="mb-4 flex items-center gap-4">

            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">

              <FiAward size={14} />

              {awards.prize}

            </span>

            <span className="text-sm text-slate-500">
              {awards.year}
            </span>

          </div>

          {/* Title */}

          <h3 className="text-2xl font-semibold text-slate-900">
            {awards.title}
          </h3>

          {/* Description */}

          <p className="mt-4 text-[15px] leading-8 text-slate-600">
            {awards.description}
          </p>

          {/* Student */}

          <div className="mt-5 flex items-center gap-2">

            <FiUser className="text-[#163D88]" />

            <span className="font-medium text-[#163D88]">
              {awards.student}
            </span>

          </div>

        </div>

        {/* Certificate */}

        {awards.certificate && (

          <div className="flex justify-end">

            <a
              href={awards.certificate}
              target="_blank"
              rel="noreferrer"
            >

              <img
                src={awards.certificate}
                alt={awards.title}
                className="
                  h-32
                  w-24
                  rounded-lg
                  border
                  border-slate-200
                  object-cover
                  transition
                  hover:shadow-md
                "
              />

            </a>

          </div>

        )}

      </div>

    </article>
  );
}