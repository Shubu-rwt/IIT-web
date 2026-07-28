import { FiBookOpen } from "react-icons/fi";

export default function PublicationHero({ publicationData }) {
  const total =
    publicationData.journals.length +
    publicationData.conferences.length +
    publicationData.patents.length +
    publicationData.bookChapters.length;

  return (
    <section className="mb-8">

      <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5">

        <FiBookOpen className="text-cyan-600" />

        <span className="text-xs font-semibold uppercase tracking-[2px] text-cyan-700">
          Publications
        </span>

      </div>

      <h1 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
        Research Publications
      </h1>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Browse peer-reviewed journal articles, conference papers,
        patents and book chapters published by
        <span className="font-semibold text-slate-900">
          {" "}Prof. Deepak Joshi
        </span>.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">

        <span className="rounded-full bg-[#163D88] px-4 py-2 text-white font-medium">
          {total} Publications
        </span>

        <span className="rounded-full border border-slate-300 bg-white px-4 py-2">
          {publicationData.journals.length} Journals
        </span>

        <span className="rounded-full border border-slate-300 bg-white px-4 py-2">
          {publicationData.conferences.length} Conferences
        </span>

        <span className="rounded-full border border-slate-300 bg-white px-4 py-2">
          {publicationData.patents.length} Patents
        </span>

        <span className="rounded-full border border-slate-300 bg-white px-4 py-2">
          {publicationData.bookChapters.length} Book Chapters
        </span>

        <span className="rounded-full border border-slate-300 bg-white px-4 py-2">
          2011–2025
        </span>

      </div>

    </section>
  );
}