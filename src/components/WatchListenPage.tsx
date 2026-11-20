import { BookOpen, ExternalLink, Headphones, Play, Radio } from 'lucide-react';
import {
  CONFESSION_DOWNLOADS,
  FEATURED_SERMON,
  MEDIA_CHANNELS,
  RECENT_TEACHINGS,
  TCN_SOCIALS,
} from '../data/tcnData';
import { TCN_IMAGES } from '../data/tcnImages';
import { ResilientImage } from './ResilientImage';

export function WatchListenPage() {
  return (
    <div className="bg-[#FBF9F5]">
      {/* Dark Streaming Header */}
      <section className="bg-[#191715] text-[#FBF9F5] py-14 sm:py-20 border-b border-[#2E2A26]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D49A2A] mb-3">
              Watch &amp; Listen
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-[1.08]">
              THE WORD, WORSHIP AND ENCOURAGEMENT THROUGH THE WEEK.
            </h1>
            <p className="mt-4 text-base text-[#DED8CE] leading-relaxed">
              Join live Sunday worship from Lagos at 8:00 AM &amp; 10:30 AM WAT, pray with us daily at
              5:00 AM WAT on Mixlr, or explore Pastor Poju Oyemade&rsquo;s teachings in the E-Library.
            </p>
          </div>

          {/* Featured Sermon Banner */}
          <div className="bg-[#23201D] border border-[#36312C] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 aspect-[16/10] lg:aspect-auto bg-[#141210]">
              <ResilientImage
                src="/assets/aistudio/1_W9HXxsIVgal3HsxaaXE-wA_3f967275.jpg"
                alt={TCN_IMAGES.pastorPojuTeaching.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D49A2A]">
                {FEATURED_SERMON.series}
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-white">
                {FEATURED_SERMON.title}
              </h2>
              <p className="mt-1.5 text-sm text-[#CFC8BC]">{FEATURED_SERMON.speaker}</p>
              <p className="mt-4 text-sm sm:text-base text-[#DED8CE] leading-relaxed max-w-xl">
                {FEATURED_SERMON.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-3.5">
                <a
                  href={FEATURED_SERMON.eLibraryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-6 py-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md"
                >
                  <Headphones className="w-4 h-4" aria-hidden="true" />
                  <span>Listen in E-Library</span>
                </a>
                <a
                  href={TCN_SOCIALS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-6 py-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white border border-[#49433C] hover:border-[#D49A2A] rounded-md"
                >
                  <Play className="w-4 h-4" aria-hidden="true" />
                  <span>YouTube Live &amp; Replays</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-16 sm:py-20 border-b border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715] mb-8">
            Live Streams, Radio, Podcasts &amp; Archive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEDIA_CHANNELS.map((ch) => {
              const Icon =
                ch.id === 'watch-live'
                  ? Play
                  : ch.id === 'listen-live'
                  ? Radio
                  : ch.id === 'confessions'
                  ? BookOpen
                  : Headphones;
              return (
                <article
                  key={ch.id}
                  className="bg-white border border-[#E5DFD3] rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <Icon className="w-5 h-5 text-[#C85A17] mb-3" aria-hidden="true" />
                    <h3 className="font-serif text-2xl font-semibold text-[#191715]">{ch.title}</h3>
                    <p className="mt-1 text-xs font-medium text-[#787166]">{ch.schedule}</p>
                    <p className="mt-3 text-sm text-[#5C564E] leading-relaxed">{ch.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#EFEAE0] flex flex-wrap items-center gap-4">
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A17] hover:underline"
                    >
                      <span>{ch.actionLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    {ch.secondaryUrl && (
                      <a
                        href={ch.secondaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[#5C564E] hover:text-[#191715]"
                      >
                        {ch.secondaryLabel}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Worship Atmosphere & Recent Teachings */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EFEAE0] border border-[#E5DFD3]">
              <ResilientImage
                src={TCN_IMAGES.worshipHands.src}
                alt={TCN_IMAGES.worshipHands.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="mt-3 text-xs font-serif italic text-[#6B645B]">
              Authentic worship at The Covenant Nation · Midweek service Wednesdays 6:45 PM WAT on Mixlr &amp; 7:00 PM on YouTube.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-semibold text-[#191715] mb-5">
              Recent Sermons &amp; Confessions
            </h2>
            <div className="bg-white border border-[#E5DFD3] rounded-xl divide-y divide-[#EFEAE0]">
              {RECENT_TEACHINGS.map((t) => (
                <a
                  key={t.title}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-[#FBF9F5] transition-colors group"
                >
                  <div>
                    <p className="font-serif text-lg font-semibold text-[#191715] group-hover:text-[#C85A17]">
                      {t.title}
                    </p>
                    <p className="text-xs text-[#6B645B]">{t.speaker}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#787166] group-hover:text-[#C85A17] shrink-0" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {CONFESSION_DOWNLOADS.slice(0, 3).map((c) => (
                <a
                  key={c.title}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium text-[#191715] bg-[#F3EFE6] hover:bg-[#E7E0D2] rounded-md transition-colors"
                >
                  {c.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
