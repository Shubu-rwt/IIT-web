import { FiSearch } from "react-icons/fi";

export default function PublicationSearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="relative w-full lg:w-[420px]">

      <FiSearch
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-slate-400
          text-lg
        "
      />

      <input
        type="text"
        placeholder="Search by title, author, journal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          py-3
          pl-12
          pr-4
          text-[15px]
          outline-none
          transition-all
          duration-300
          placeholder:text-slate-400
          focus:border-[#163D88]
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>
  );
}