import { useMemo, useState } from 'react';
import { ExternalLink, Mail, Search } from 'lucide-react';
import { COVENANT_OUTREACHES, FAMILY_COMMUNITIES, TCN_DEPARTMENTS } from '../data/tcnData';
import { TCN_IMAGES } from '../data/tcnImages';
import { ResilientImage } from './ResilientImage';

export function CommunityPage() {
  const [deptQuery, setDeptQuery] = useState('');

  const filteredDepts = useMemo(() => {
    const q = deptQuery.trim().toLowerCase();
    if (!q) return TCN_DEPARTMENTS;
    return TCN_DEPARTMENTS.filter(
      (d) => d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)
    );
  }, [deptQuery]);

  const nextGen = FAMILY_COMMUNITIES.filter((f) => ['children', 'jesus-tribe', 'youth'].includes(f.id));

  const getImg = (id: string) => {
    if (id === 'children') return TCN_IMAGES.childrenMinistry;
    if (id === 'jesus-tribe') return TCN_IMAGES.jesusTribeMinistry;
    return TCN_IMAGES.youthMinistry;
  };

  return (
    <div className="bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-14 sm:py-20 border-b border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
              Community &amp; Family
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#191715] leading-[1.08]">
              MORE THAN A GATHERING. A FAMILY.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5C564E] leading-relaxed">
              From toddlers in Children&rsquo;s Church to teens in Jesus Tribe, young adults in Covenant Connect,
              and neighbourhood Life Fellowships—every person has a place to belong and serve.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#EFEAE0] border border-[#E5DFD3]">
              <ResilientImage
                src={TCN_IMAGES.communityFellowship.src}
                alt={TCN_IMAGES.communityFellowship.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Children, Teens & Youth */}
      <section id="next-gen" className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715] mb-10">
            Children, Jesus Tribe &amp; Youth Church
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {nextGen.map((group) => {
              const img = getImg(group.id);
              return (
                <article
                  key={group.id}
                  className="bg-white border border-[#E5DFD3] rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/9] bg-[#EFEAE0]">
                      <ResilientImage
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-medium text-[#C85A17] mb-1">{group.audience}</p>
                      <h3 className="font-serif text-2xl font-semibold text-[#191715]">{group.name}</h3>
                      <p className="mt-3 text-sm text-[#5C564E] leading-relaxed">{group.details}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-3 border-t border-[#EFEAE0] flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={group.contactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A17] hover:underline"
                    >
                      <span>{group.contactLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    {group.secondaryUrl && (
                      <a
                        href={group.secondaryUrl}
                        target={group.secondaryUrl.startsWith('http') ? '_blank' : undefined}
                        rel={group.secondaryUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xs font-medium text-[#5C564E] hover:text-[#191715]"
                      >
                        {group.secondaryLabel}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Covenant Ministries & Social Impact */}
      <section className="py-16 sm:py-20 bg-[#F3EFE6]/65 border-y border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-2">
              Serving Our Neighbours
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715]">
              Covenant Ministries &amp; Social Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COVENANT_OUTREACHES.map((m) => (
              <article key={m.name} className="bg-white border border-[#E5DFD3] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-[#787166]">{m.focus}</p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-[#191715]">{m.name}</h3>
                  <p className="mt-2.5 text-sm text-[#5C564E] leading-relaxed">{m.description}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#EFEAE0] flex items-center justify-between gap-3">
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A17] hover:underline"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="text-xs text-[#5C564E] hover:text-[#191715]">
                      {m.email}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Departments & Units Directory */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-2">
                Departments &amp; Units
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715]">
                Serve With the Church Family
              </h2>
              <p className="mt-2 text-sm text-[#5C564E]">
                After completing Foundation of Faith, members can join any unit by emailing the team directly
                or meeting the departmental head after service.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <label htmlFor="dept-search" className="sr-only">
                Search departments
              </label>
              <Search
                className="w-4 h-4 text-[#787166] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="dept-search"
                type="search"
                value={deptQuery}
                onChange={(e) => setDeptQuery(e.target.value)}
                placeholder="Filter departments..."
                className="w-full min-h-[42px] pl-10 pr-3.5 py-2 text-sm bg-white border border-[#E5DFD3] rounded-lg focus:outline-none focus:border-[#C85A17]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDepts.map((dept) => (
              <div
                key={dept.name}
                className="bg-white border border-[#E5DFD3] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#191715]">{dept.name}</h3>
                  <p className="mt-1.5 text-sm text-[#5C564E] leading-relaxed">{dept.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EFEAE0]">
                  <a
                    href={`mailto:${dept.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C85A17] hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{dept.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
