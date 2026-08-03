'use client';

import { Search } from 'lucide-react';

const filters = [
  'All',
  'AI',
  'FinTech',
  'Healthcare',
  'E-Commerce',
  'SaaS',
  'Logistics',
  'Web3',
];

type Props = {
  active: string;
  setActive: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
};

export default function WorkFilters({
  active,
  setActive,
  search,
  setSearch,
}: Props) {
  return (
    <section className="sticky top-20 z-20 bg-white/80 backdrop-blur-xl border-b border-brand-line">

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="relative w-full lg:max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/40"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search case studies..."
            className="
              h-12
              w-full
              rounded-full
              border
              border-brand-line
              bg-white
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              duration-300
              focus:border-[#9B1C31]
              focus:ring-4
              focus:ring-[#9B1C31]/10
            "
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3">

          {filters.map((filter) => {

            const selected = active === filter;

            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    selected
                      ? 'bg-[#9B1C31] text-white shadow-lg shadow-[#9B1C31]/30'
                      : 'border border-brand-line bg-white text-brand-black hover:border-[#9B1C31] hover:text-[#9B1C31]'
                  }
                `}
              >
                {filter}
              </button>
            );
          })}

        </div>

      </div>

    </section>
  );
}