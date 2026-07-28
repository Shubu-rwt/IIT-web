import {
  FiCalendar,
  FiExternalLink,
  FiFileText,
  FiBookOpen,
} from "react-icons/fi";

export default function PublicationItem({ publication }) {
  const getTypeColor = () => {
    switch (publication.type) {
      case "Patent":
        return "bg-amber-100 text-amber-700";

      case "Conference":
        return "bg-violet-100 text-violet-700";

      case "Book Chapter":
        return "bg-emerald-100 text-emerald-700";

      default:
        return "bg-blue-100 text-[#163D88]";
    }
  };

  const venue =
    publication.journal ||
    publication.conference ||
    publication.publisher ||
    "";

  return (
    <article
      className="
        group
        relative
        border-b
        border-slate-200
        py-6
        transition-all
        duration-300
      "
    >
      {/* Left Accent */}

      <span
        className="
          absolute
          left-0
          top-5
          h-[70%]
          w-1
          rounded-full
          bg-[#163D88]
          scale-y-0
          transition-transform
          duration-300
          group-hover:scale-y-100
        "
      />

      <div className="pl-5">

        {/* Top */}

        <div className="flex flex-wrap items-center gap-3">

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-[11px]
              font-semibold
              uppercase
              tracking-[2px]
              ${getTypeColor()}
            `}
          >
            {publication.type}
          </span>

          <span className="flex items-center gap-1 text-sm text-slate-500">
            <FiCalendar size={14} />
            {publication.year}
          </span>

          {publication.status && (
            <span className="text-sm text-emerald-600 font-medium">
              {publication.status}
            </span>
          )}

        </div>

        {/* Title */}

        <h3
          className="
            mt-4
            text-[22px]
            font-bold
            leading-snug
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-[#163D88]
          "
        >
          {publication.title}
        </h3>

        {/* Authors */}

        {(publication.authors || publication.inventors) && (
          <p className="mt-3 text-[15px] leading-7 text-slate-600">
            {publication.authors || publication.inventors}
          </p>
        )}

        {/* Journal / Conference */}

        {venue && (
          <p className="mt-3 italic text-[15px] text-slate-500">
            {venue}

            {publication.volume &&
              ` • Vol. ${publication.volume}`}

            {publication.issue &&
              ` (${publication.issue})`}

            {publication.pages &&
              ` • pp. ${publication.pages}`}
          </p>
        )}

        {/* Bottom */}

        <div className="mt-5 flex flex-wrap items-center gap-5">

          {publication.doi && (
            <a
              href={publication.doi.startsWith("http")
                ? publication.doi
                : `https://doi.org/${publication.doi}`
              }
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-[#163D88]
                hover:underline
              "
            >
              <FiExternalLink />
              DOI
            </a>
          )}

          {publication.pdf && (
            <a
              href={publication.pdf}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-[#163D88]
                hover:underline
              "
            >
              <FiFileText />
              PDF
            </a>
          )}

          <button
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-slate-500
              hover:text-[#163D88]
            "
          >
            <FiBookOpen />
            Cite
          </button>

        </div>

      </div>
    </article>
  );
}