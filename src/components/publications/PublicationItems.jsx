import {
  FiCalendar,
  FiExternalLink,
  FiFileText,
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

  // Publication URL
  const hasPublicationUrl =
    typeof publication.publicationUrl === "string" &&
    publication.publicationUrl.trim() !== "";

  const publicationUrl = hasPublicationUrl
    ? publication.publicationUrl.trim()
    : null;

  // PDF URL
  const hasPdf =
    typeof publication.pdf === "string" &&
    publication.pdf.trim() !== "";

  const pdfUrl = hasPdf
    ? publication.pdf.trim()
    : null;

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
        last:border-b-0
      "
    >
      {/* Hover indicator */}

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

        {/* =====================================================
            TOP INFORMATION
        ===================================================== */}

        <div className="flex flex-wrap items-center gap-3">

          {/* Type */}

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

          {/* Year */}

          <span
            className="
              flex
              items-center
              gap-1
              text-sm
              text-slate-500
            "
          >
            <FiCalendar size={14} />

            {publication.year}
          </span>

          {/* Status */}

          {publication.status && (
            <span
              className="
                text-sm
                font-medium
                text-emerald-600
              "
            >
              {publication.status}
            </span>
          )}

        </div>


        {/* =====================================================
            TITLE
        ===================================================== */}

        <h3
          className="
            mt-4
            text-[22px]
            font-bold
            leading-snug
            text-slate-900
          "
        >
          {hasPublicationUrl ? (
            <a
              href={publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                hover:text-[#163D88]
                hover:underline
                underline-offset-4
              "
            >
              {publication.title}
            </a>
          ) : (
            <span>
              {publication.title}
            </span>
          )}
        </h3>


        {/* =====================================================
            AUTHORS / INVENTORS
        ===================================================== */}

        {(publication.authors || publication.inventors) && (
          <p
            className="
              mt-3
              text-[15px]
              leading-7
              text-slate-600
            "
          >
            {publication.authors || publication.inventors}
          </p>
        )}


        {/* =====================================================
            JOURNAL / CONFERENCE / PUBLISHER
        ===================================================== */}

        {venue && (
          <p
            className="
              mt-3
              italic
              text-[15px]
              text-slate-500
            "
          >
            {venue}

            {publication.volume &&
              ` • Vol. ${publication.volume}`}

            {publication.issue &&
              ` (${publication.issue})`}

            {publication.pages &&
              ` • pp. ${publication.pages}`}
          </p>
        )}


        {/* =====================================================
            LINKS
            Only displayed when a URL actually exists
        ===================================================== */}

        {(hasPublicationUrl || hasPdf) && (
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-5
            "
          >

            {/* Publication URL */}

            {hasPublicationUrl && (
              <a
                href={publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[#163D88]
                  transition-colors
                  duration-200
                  hover:underline
                "
              >
                <FiExternalLink size={15} />

                View Publication
              </a>
            )}


            {/* PDF */}

            {hasPdf && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[#163D88]
                  transition-colors
                  duration-200
                  hover:underline
                "
              >
                <FiFileText size={15} />

                PDF
              </a>
            )}

          </div>
        )}

      </div>
    </article>
  );
}

