import { BookOpen, Download, ExternalLink, Headphones } from 'lucide-react';
import {
  CONFESSION_DOWNLOADS,
  FEATURED_SERMON,
  GROWTH_PATHWAYS,
  RECENT_TEACHINGS,
} from '../data/tcnData';
import { TCN_IMAGES } from '../data/tcnImages';
import { ResilientImage } from './ResilientImage';

export function GrowPage() {
  return (
    <div className="bg-[#FBF9F5]">
      {/* Header */}
      <section className="py-14 sm:py-20 border-b border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
              Grow in Faith
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#191715] leading-[1.08]">
              YOUR JOURNEY WITH GOD CONTINUES BEYOND SUNDAY.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5C564E] leading-relaxed">
              We are committed to helping every believer move from spiritual infancy into joyful maturity—rooted
              in Scripture, strengthened through prayer, and equipped for daily life.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#EFEAE0] border border-[#E5DFD3]">
              <ResilientImage
                src={TCN_IMAGES.spiritualGrowthBible.src}
                alt={TCN_IMAGES.spiritualGrowthBible.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Spiritual Growth Pathways */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715] mb-10">
            Foundations, Discipleship &amp; Prayer Cells
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {GROWTH_PATHWAYS.map((pathway, idx) => (
              <article
                key={pathway.id}
                className="bg-white border border-[#E5DFD3] rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#787166]">
                    0{idx + 1}. {pathway.subtitle}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-semibold text-[#191715]">
                    {pathway.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C564E] leading-relaxed">
                    {pathway.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#EFEAE0] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-[#6B645B]">{pathway.schedule}</span>
                  <div className="flex flex-wrap items-center gap-4">
                    {pathway.email && (
                      <a
                        href={`mailto:${pathway.email}`}
                        className="text-xs font-medium text-[#5C564E] hover:text-[#191715]"
                      >
                        {pathway.email}
                      </a>
                    )}
                    <a
                      href={pathway.url}
                      target={pathway.url.startsWith('http') ? '_blank' : undefined}
                      rel={pathway.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="min-h-[40px] px-4 py-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md"
                    >
                      <span>{pathway.actionLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Confessions & Bible Study Manual */}
      <section id="confessions" className="py-16 sm:py-20 bg-[#F3EFE6]/65 border-y border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-2">
              Official Downloads
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715]">
              Bible Study Manual &amp; Faith Confessions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C564E]">
              Direct links to The Covenant Nation&rsquo;s verified scripture confessions and study manuals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONFESSION_DOWNLOADS.map((doc) => (
              <a
                key={doc.title}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E5DFD3] hover:border-[#C85A17] rounded-xl p-5 flex items-start justify-between gap-4 transition-colors group"
              >
                <div>
                  <BookOpen className="w-4 h-4 text-[#C85A17] mb-2.5" aria-hidden="true" />
                  <h3 className="font-serif text-xl font-semibold text-[#191715] group-hover:text-[#C85A17] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#6B645B]">{doc.meta}</p>
                </div>
                <Download className="w-4 h-4 text-[#787166] group-hover:text-[#C85A17] shrink-0 mt-1" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Teachings & Sermons */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-2">
                Biblical Teaching
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715]">
                Teachings by Pastor Poju Oyemade
              </h2>
            </div>
            <a
              href={FEATURED_SERMON.eLibraryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C85A17] hover:underline"
            >
              <span>Explore Full E-Library</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="bg-white border border-[#E5DFD3] rounded-2xl divide-y divide-[#EFEAE0]">
            {[
              { title: FEATURED_SERMON.title, speaker: FEATURED_SERMON.speaker, url: FEATURED_SERMON.eLibraryUrl },
              ...RECENT_TEACHINGS,
            ].map((teaching) => (
              <a
                key={teaching.title}
                href={teaching.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-[#FBF9F5] transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <Headphones className="w-4 h-4 text-[#C85A17] shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-serif text-xl font-semibold text-[#191715] group-hover:text-[#C85A17] transition-colors">
                      {teaching.title}
                    </p>
                    <p className="text-xs text-[#6B645B]">{teaching.speaker}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C564E] group-hover:text-[#C85A17] whitespace-nowrap">
                  <span>Listen</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
