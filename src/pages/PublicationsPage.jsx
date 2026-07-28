import { useState } from "react";

import publicationData from "../data/publications";

import PublicationHero from "../components/publications/PublicationHero";
import PublicationSearch from "../components/publications/PublicationSearch";
import PublicationFilter from "../components/publications/PublicationFilters";
import PublicationTimeline from "../components/publications/PublicationTimeline";

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Hero */}
        <PublicationHero publicationData={publicationData} />

        {/* Search & Filter */}

        <section
          className="
            mt-8
            mb-8
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <PublicationSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <PublicationFilter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

          </div>

        </section>

        {/* Publications */}

        <PublicationTimeline
          publicationData={publicationData}
          searchTerm={searchTerm}
          activeFilter={activeFilter}
        />

      </section>

    </main>
  );
}