import { useMemo, useState } from 'react';
import { Clock, ExternalLink, Info, MapPin, Navigation, Search } from 'lucide-react';
import { Centre, TCN_CENTRES, TCN_CONTACT } from '../data/tcnData';

interface CentreFinderProps {
  onSelectCentreForVisit: (centreId: string) => void;
  defaultExpanded?: boolean;
}

type RegionFilter = 'All' | 'Lagos' | 'Nigeria (Outside Lagos)' | 'Global';

export function CentreFinder({ onSelectCentreForVisit, defaultExpanded = false }: CentreFinderProps) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<RegionFilter>('All');
  const [showAll, setShowAll] = useState(defaultExpanded);

  const filteredCentres = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TCN_CENTRES.filter((c) => {
      const matchesRegion = region === 'All' || c.region === region;
      if (!matchesRegion) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        c.venue.toLowerCase().includes(q)
      );
    });
  }, [query, region]);

  const isSearchingOrFiltering = query.trim().length > 0 || region !== 'All';
  const displayedCentres =
    showAll || isSearchingOrFiltering ? filteredCentres : filteredCentres.slice(0, 6);

  const getMapsUrl = (centre: Centre) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${centre.name} ${centre.venue}`)}`;

  return (
    <section id="centres" className="py-20 sm:py-24 bg-[#F3EFE6]/65 border-y border-[#E5DFD3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
            Find a Place to Worship
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#191715] leading-[1.12]">
            WE WOULD LOVE TO WORSHIP WITH YOU.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C564E] leading-relaxed">
            Join us at a centre near you. Find a place, check the available service information and plan your visit.
          </p>
        </div>

        {/* Search & Region Filter Controls */}
        <div className="bg-white border border-[#E5DFD3] rounded-xl p-4 sm:p-5 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="relative flex-1">
              <label htmlFor="centre-search" className="sr-only">
                Search centres by city, neighbourhood, or street
              </label>
              <Search
                className="w-4 h-4 text-[#787166] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="centre-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by city, area, or centre (e.g. Lekki, Yaba, Abuja, London, Brooklyn)..."
                className="w-full min-h-[44px] pl-10 pr-4 py-2.5 text-sm text-[#191715] placeholder:text-[#8A8277] bg-[#FBF9F5] border border-[#E5DFD3] rounded-lg focus:outline-none focus:border-[#C85A17] focus:ring-2 focus:ring-[#C85A17]/15"
              />
            </div>

            <div
              role="group"
              aria-label="Filter centres by region"
              className="flex flex-wrap items-center gap-1.5 bg-[#F3EFE6] p-1 rounded-lg"
            >
              {(['All', 'Lagos', 'Nigeria (Outside Lagos)', 'Global'] as RegionFilter[]).map((tab) => {
                const active = region === tab;
                const label = tab === 'All' ? `All (${TCN_CENTRES.length})` : tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setRegion(tab)}
                    className={`min-h-[38px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-white text-[#191715] shadow-xs'
                        : 'text-[#5C564E] hover:text-[#191715]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-[#EFEAE0] flex items-center justify-end text-xs text-[#6B645B]">
            <p>
              Helpline ({TCN_CONTACT.hours}):{' '}
              <a href="tel:+2348186000021" className="font-medium text-[#191715] hover:text-[#C85A17]">
                0818 600 0021
              </a>
            </p>
          </div>
        </div>

        {/* Centres Grid */}
        {displayedCentres.length === 0 ? (
          <div className="bg-white border border-[#E5DFD3] rounded-xl p-10 text-center">
            <p className="font-serif text-2xl font-semibold text-[#191715]">No matching centres found</p>
            <p className="mt-2 text-sm text-[#5C564E]">
              Try searching for another area (e.g. Ikeja, Abuja, London) or join us online via Watch Live.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setRegion('All');
              }}
              className="mt-5 min-h-[42px] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCentres.map((centre) => (
              <article
                key={centre.id}
                className="bg-white border border-[#E5DFD3] rounded-xl p-6 flex flex-col justify-between transition-colors hover:border-[#D4CBB9]"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="text-xs font-medium text-[#787166]">
                      {centre.city} · {centre.country}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#191715] tracking-tight">
                    {centre.name}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm text-[#4A453E]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#C85A17] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="leading-relaxed">{centre.venue}</p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#C85A17] shrink-0 mt-0.5" aria-hidden="true" />
                      <ul className="space-y-1 tabular-nums">
                        {centre.times.map((t) => (
                          <li key={t} className="font-medium text-[#191715]">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {centre.note && (
                      <p className="text-xs text-[#6B645B] pl-6.5">{centre.note}</p>
                    )}

                    {centre.flagForConfirmation && (
                      <div className="flex items-start gap-2 pt-2 text-xs text-[#7D4B16] bg-[#FBF6EB] border border-[#EFE2C6] rounded-lg p-2.5">
                        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{centre.flagForConfirmation}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFEAE0] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <a
                      href={getMapsUrl(centre)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#191715] hover:text-[#C85A17] transition-colors py-1"
                    >
                      <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Directions</span>
                    </a>
                    <span className="text-[#D4CBB9]" aria-hidden="true">·</span>
                    <a
                      href={centre.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#5C564E] hover:text-[#191715] transition-colors py-1"
                    >
                      <span>{centre.instagramHandle}</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectCentreForVisit(centre.id)}
                    className="min-h-[38px] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A17] hover:bg-[#C85A17] hover:text-white border border-[#C85A17]/35 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Plan Visit Here
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Explore All / Collapse Control */}
        {!isSearchingOrFiltering && filteredCentres.length > 6 && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="min-h-[46px] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#191715] hover:bg-[#2F2B27] rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              {showAll ? 'SHOW FEATURED CENTRES' : `EXPLORE ALL CENTRES (${TCN_CENTRES.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
