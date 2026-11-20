import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  Headphones,
  Play,
  Radio,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  FAMILY_COMMUNITIES,
  FEATURED_SERMON,
  GROWTH_PATHWAYS,
  MEDIA_CHANNELS,
  PageRoute,
  TCN_CONTACT,
} from '../data/tcnData';
import { HERO_SLIDER_IMAGES, TCN_IMAGES } from '../data/tcnImages';
import { CentreFinder } from './CentreFinder';
import { ResilientImage } from './ResilientImage';

interface HomePageProps {
  onNavigate: (page: PageRoute, sectionId?: string) => void;
  onSelectCentreForVisit: (centreId: string) => void;
}

export function HomePage({ onNavigate, onSelectCentreForVisit }: HomePageProps) {
  const [selectedFamilyId, setSelectedFamilyId] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const selectedFamily = FAMILY_COMMUNITIES.find((f) => f.id === selectedFamilyId);

  const getMinistryImage = (key?: string) => {
    switch (key) {
      case 'children':
        return TCN_IMAGES.childrenMinistry;
      case 'jesus-tribe':
        return TCN_IMAGES.jesusTribeMinistry;
      case 'youth':
        return TCN_IMAGES.youthMinistry;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* 1. HERO SECTION — 7-Image TCN Slider with Warm Ivory Scrim */}
      <section
        aria-label="Welcome to The Covenant Nation"
        className="relative overflow-hidden bg-[#FBF9F5] text-[#191715] py-16 sm:py-20 lg:py-24 min-h-[540px] lg:min-h-[620px] flex items-center"
      >
        {/* Cross-fading 7-photo slider */}
        {HERO_SLIDER_IMAGES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <img
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              aria-hidden={!isActive}
              className={`absolute inset-0 w-full h-full object-cover ${slide.objectPosition} transition-opacity duration-1000 ease-out ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          );
        })}

        {/* Warm daylight ivory gradient scrims — high readability without any black background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#FBF9F5]/80 md:bg-transparent md:bg-gradient-to-r md:from-[#FBF9F5]/96 md:via-[#FBF9F5]/84 md:to-[#FBF9F5]/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5]/70 via-transparent to-[#FBF9F5]/20"
        />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl lg:max-w-2xl py-2 lg:py-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-4">
              The Covenant Nation · Welcome Home
            </p>

            <h1 className="font-serif text-[34px] sm:text-[44px] lg:text-[54px] font-semibold tracking-tight text-[#191715] leading-[1.06]">
              WELCOME TO THE COVENANT NATION CHURCH.
            </h1>

            <p className="mt-5 text-sm sm:text-[15px] font-semibold uppercase tracking-[0.06em] text-[#2F2A25] leading-relaxed">
              A PLACE TO GROW IN GOD&rsquo;S WORD, EXPERIENCE HIS SPIRIT AND FIND A FAMILY TO WALK WITH.
            </p>

            <p className="mt-4 text-base sm:text-[17px] text-[#3F3A34] leading-relaxed max-w-xl">
              Whether you&rsquo;re visiting for the first time or looking for a spiritual home, we are glad
              you&rsquo;re here. Discover a community where we grow together through the Word, prayer and
              meaningful relationships.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate('im-new')}
                className="min-h-[48px] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A17]"
              >
                PLAN YOUR FIRST VISIT
              </button>

              <button
                type="button"
                onClick={() => onNavigate('watch-listen')}
                className="min-h-[48px] px-7 py-3.5 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#191715] bg-white/90 border border-[#CFC6B4] hover:border-[#191715] hover:bg-white rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191715]"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#C85A17]" aria-hidden="true" />
                <span>WATCH LIVE</span>
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* BOLD STANDALONE STATEMENT BEFORE PASTOR & WIFE SECTION */}
      <section className="py-12 sm:py-16 bg-[#FBF9F5] border-t border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-['Playfair_Display',Georgia,serif] text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#191715] leading-[1.12]">
            <span className="italic font-semibold">There&rsquo;s a </span>
            <span className="font-black tracking-[0.02em] text-[#C85A17]">PLACE</span>
            <span className="italic font-semibold"> for you </span>
            <span className="font-black tracking-[0.02em] text-[#C85A17]">HERE</span>.
          </p>
        </div>
      </section>

      {/* 2. A PERSONAL WELCOME FROM PASTOR POJU */}
      <section className="py-20 sm:py-24 bg-[#F3EFE6]/55 border-y border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Authentic Portrait of Pastor Poju & Pastor Toyin Oyemade */}
            <div className="lg:col-span-5">
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#2E2A26] border border-[#E5DFD3]">
                  <ResilientImage
                    src="/assets/aistudio/5a7adb43e7083_668a9676.jpg"
                    alt="Pastor Poju and Pastor Toyin Oyemade, The Covenant Nation"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="mt-3 text-xs font-serif italic text-[#6B645B]">
                  Pastor Poju &amp; Pastor Toyin Oyemade · The Covenant Nation
                </p>
              </div>
            </div>

            {/* Editorial Welcome Message */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
                A Personal Welcome from Our Lead Pastor
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#191715] leading-[1.12]">
                A SPIRITUAL FAMILY. A PLACE TO GROW.
              </h2>

              <blockquote className="mt-6 space-y-4 text-base sm:text-[17px] text-[#332F2B] leading-[1.72] max-w-prose">
                <p>
                  &ldquo;Welcome home to The Covenant Nation. It is not by chance that God has ordered your
                  steps here&mdash;we are truly glad you obeyed His call to worship with us, and we want you
                  to know you are deeply loved.
                </p>
                <p>
                  The Covenant Nation is a family church, a home for everyone. When you make this your
                  spiritual family, God brings you into a loving community where you grow in His Word, walk
                  together in prayer, and experience the full restoration and transformation He has prepared
                  for your life.
                </p>
                <p>
                  God sets people into this house to touch their lives with the fullness of His Spirit. Our
                  prayer is that your faith will be strengthened, your understanding of Scripture will deepen,
                  and you will discover all that God has called you to become.
                </p>
                <p>
                  Whether you&rsquo;re visiting for the first time or looking for a place to truly belong,
                  there is room at the table for you. We would love to welcome you into the family&mdash;make
                  yourself at home.&rdquo;
                </p>
              </blockquote>

              <p className="mt-5 font-serif text-xl font-semibold text-[#191715]">
                &mdash; Pastor Poju Oyemade
              </p>

              {/* Watch & Listen Action */}
              <div className="mt-7 pt-6 border-t border-[#E0D9CA] flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('watch-listen')}
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-medium text-[#C85A17] hover:text-[#AD4B10] transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4" aria-hidden="true" />
                  <span>Watch &amp; Listen to Messages</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HELP PEOPLE FIND THEIR PLACE */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
              Start Your Journey
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#191715] leading-[1.12]">
              WHERE WOULD YOU LIKE TO BEGIN?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5C564E] leading-relaxed">
              Whatever brings you here, let&rsquo;s help you find your next step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Card 1: I'm New Here */}
            <article className="bg-white border border-[#E5DFD3] rounded-xl overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EFEAE0]">
                  <ResilientImage
                    src={TCN_IMAGES.firstVisitEntrance.src}
                    alt={TCN_IMAGES.firstVisitEntrance.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-semibold text-[#191715]">
                    I&rsquo;M NEW HERE
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] text-[#5C564E] leading-relaxed">
                    A warm introduction to The Covenant Nation. Learn what to expect, find a church centre and
                    plan your first visit.
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                <button
                  type="button"
                  onClick={() => onNavigate('im-new')}
                  className="w-full min-h-[46px] px-5 py-3 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors cursor-pointer"
                >
                  <span>COME VISIT US</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>

            {/* Card 2: I Want to Grow in Faith */}
            <article className="bg-white border border-[#E5DFD3] rounded-xl overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EFEAE0]">
                  <ResilientImage
                    src={TCN_IMAGES.spiritualGrowthBible.src}
                    alt={TCN_IMAGES.spiritualGrowthBible.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-semibold text-[#191715]">
                    I WANT TO GROW IN FAITH
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] text-[#5C564E] leading-relaxed">
                    Explore Foundation of Faith, Discipleship Classes, Bible teachings, prayer and resources to
                    strengthen your walk with God.
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                <button
                  type="button"
                  onClick={() => onNavigate('grow')}
                  className="w-full min-h-[46px] px-5 py-3 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#191715] bg-[#F3EFE6] hover:bg-[#E7E0D2] rounded-md transition-colors cursor-pointer"
                >
                  <span>EXPLORE HOW TO GROW</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>

            {/* Card 3: I Want to Belong */}
            <article className="bg-white border border-[#E5DFD3] rounded-xl overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EFEAE0]">
                  <ResilientImage
                    src={TCN_IMAGES.communityFellowship.src}
                    alt={TCN_IMAGES.communityFellowship.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-semibold text-[#191715]">
                    I WANT TO BELONG
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] text-[#5C564E] leading-relaxed">
                    Find a Life Fellowship, Community Group, ministry or the appropriate children&rsquo;s and
                    youth programme.
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                <button
                  type="button"
                  onClick={() => onNavigate('community')}
                  className="w-full min-h-[46px] px-5 py-3 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#191715] bg-[#F3EFE6] hover:bg-[#E7E0D2] rounded-md transition-colors cursor-pointer"
                >
                  <span>FIND YOUR COMMUNITY</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. FIND A PLACE TO WORSHIP (Interactive Centre Finder) */}
      <CentreFinder onSelectCentreForVisit={onSelectCentreForVisit} />

      {/* 5. GROW TOGETHER */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
                Grow Together
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#191715] leading-[1.12]">
                YOUR JOURNEY WITH GOD CONTINUES BEYOND SUNDAY.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('grow')}
              className="self-start lg:self-auto min-h-[42px] inline-flex items-center gap-2 text-sm font-semibold text-[#C85A17] hover:text-[#AD4B10] transition-colors cursor-pointer"
            >
              <span>View all growth resources</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GROWTH_PATHWAYS.map((item, idx) => (
              <article
                key={item.id}
                className="bg-white border border-[#E5DFD3] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-medium text-[#787166]">
                    0{idx + 1}. {item.subtitle}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#191715]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#5C564E] leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFEAE0]">
                  <p className="text-xs text-[#787166] mb-3">{item.schedule}</p>
                  <a
                    href={item.url}
                    target={item.url.startsWith('http') ? '_blank' : undefined}
                    rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A17] hover:text-[#AD4B10] py-1"
                  >
                    <span>{item.actionLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR FAMILY */}
      <section className="py-20 sm:py-24 bg-[#F3EFE6]/55 border-y border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
                Our Family
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#191715] leading-[1.12]">
                MORE THAN A GATHERING. A FAMILY.
              </h2>
              <p className="mt-3 text-base text-[#5C564E] leading-relaxed">
                Every age and season has a place here—from Children&rsquo;s Church and Jesus Tribe to Covenant
                Connect Youth, Life Fellowships, and outreach ministries.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('community')}
              className="self-start lg:self-auto min-h-[44px] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#191715] bg-white border border-[#D8D0C1] hover:border-[#191715] rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              Explore All Ministries &amp; Departments
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAMILY_COMMUNITIES.map((community) => {
              const photo = getMinistryImage(community.imageKey);
              const isSelected = selectedFamilyId === community.id;
              return (
                <article
                  key={community.id}
                  className={`bg-white border rounded-xl overflow-hidden flex flex-col justify-between transition-colors ${
                    isSelected ? 'border-[#C85A17]' : 'border-[#E5DFD3]'
                  }`}
                >
                  <div>
                    {photo ? (
                      <div className="aspect-[16/9] overflow-hidden bg-[#EFEAE0]">
                        <ResilientImage
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="px-6 pt-6 flex items-center gap-2 text-xs font-medium text-[#787166]">
                        <Users className="w-3.5 h-3.5 text-[#C85A17]" aria-hidden="true" />
                        <span>{community.audience}</span>
                      </div>
                    )}

                    <div className="p-6">
                      {photo && (
                        <p className="text-xs font-medium text-[#787166] mb-1">{community.audience}</p>
                      )}
                      <h3 className="font-serif text-2xl font-semibold text-[#191715]">
                        {community.name}
                      </h3>
                      <p className="mt-2.5 text-sm text-[#5C564E] leading-relaxed">{community.summary}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedFamilyId((curr) => (curr === community.id ? null : community.id))
                      }
                      className="text-xs font-semibold uppercase tracking-wider text-[#191715] hover:text-[#C85A17] py-1.5 cursor-pointer"
                    >
                      {isSelected ? 'Close Details' : 'How to Connect'}
                    </button>

                    <a
                      href={community.contactUrl}
                      target={community.contactUrl.startsWith('http') ? '_blank' : undefined}
                      rel={community.contactUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#C85A17] hover:text-[#AD4B10] py-1.5"
                    >
                      <span>{community.contactLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Inline Expanded Ministry Detail Panel */}
          {selectedFamily && (
            <div className="mt-6 bg-white border border-[#C85A17]/40 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C85A17]">
                  {selectedFamily.name} · {selectedFamily.audience}
                </p>
                <p className="mt-2 text-sm sm:text-base text-[#332F2B] leading-relaxed">
                  {selectedFamily.details}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={selectedFamily.contactUrl}
                  target={selectedFamily.contactUrl.startsWith('http') ? '_blank' : undefined}
                  rel={selectedFamily.contactUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="min-h-[44px] px-5 py-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md"
                >
                  <span>{selectedFamily.contactLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                {selectedFamily.secondaryUrl && (
                  <a
                    href={selectedFamily.secondaryUrl}
                    target={selectedFamily.secondaryUrl.startsWith('http') ? '_blank' : undefined}
                    rel={selectedFamily.secondaryUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="min-h-[44px] px-5 py-2.5 inline-flex items-center gap-2 text-xs font-semibold text-[#191715] border border-[#D8D0C1] hover:border-[#191715] rounded-md"
                  >
                    <span>{selectedFamily.secondaryLabel}</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. STAY CONNECTED (Media Experience) */}
      <section className="py-20 sm:py-24 bg-[#191715] text-[#FBF9F5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D49A2A] mb-3">
              Stay Connected
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.12]">
              THE WORD, WORSHIP AND ENCOURAGEMENT THROUGH THE WEEK.
            </h2>
          </div>

          {/* Featured Existing Sermon Card */}
          <div className="bg-[#23201D] border border-[#36312C] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-10">
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
              <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-white">
                {FEATURED_SERMON.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#CFC8BC]">{FEATURED_SERMON.speaker}</p>
              <p className="mt-4 text-sm sm:text-base text-[#DED8CE] leading-relaxed max-w-xl">
                {FEATURED_SERMON.summary}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={FEATURED_SERMON.eLibraryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-6 py-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors"
                >
                  <Headphones className="w-4 h-4" aria-hidden="true" />
                  <span>Listen in E-Library</span>
                </a>
                <a
                  href={FEATURED_SERMON.sermonsArchiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-6 py-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] border border-[#49433C] hover:border-[#D49A2A] rounded-md transition-colors"
                >
                  <span>Browse Past Sermons</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* 5 Functional Media Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {MEDIA_CHANNELS.map((channel) => {
              const Icon =
                channel.id === 'watch-live'
                  ? Play
                  : channel.id === 'listen-live'
                  ? Radio
                  : channel.id === 'confessions'
                  ? BookOpen
                  : Headphones;
              return (
                <article
                  key={channel.id}
                  className="bg-[#23201D] border border-[#36312C] rounded-xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <Icon className="w-5 h-5 text-[#D49A2A] mb-3" aria-hidden="true" />
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">
                      {channel.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#B8B0A4]">{channel.schedule}</p>
                    <p className="mt-3 text-xs sm:text-sm text-[#DED8CE] leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#36312C]">
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D49A2A] hover:text-white transition-colors"
                    >
                      <span>{channel.actionLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. REAL STORIES, REAL COMMUNITY */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
                Real Stories, Real Community
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#191715] leading-[1.12]">
                SEE WHAT GROWING TOGETHER LOOKS LIKE.
              </h2>
              <p className="mt-4 text-base text-[#5C564E] leading-relaxed">
                Moments of worship, prayer, and genuine friendship across The Covenant Nation family.
              </p>
              <p className="mt-3 text-sm text-[#5C564E] leading-relaxed">
                We only publish verified testimonies approved through our pastoral office. If God has worked in
                your life through a service, Life Fellowship, or the Word, we would be honoured to hear your
                story.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={TCN_CONTACT.testimonyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-6 py-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors"
                >
                  <span>Share Your Testimony</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://insightsforliving.org/photo-gallery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-5 py-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#191715] border border-[#D8D0C1] hover:border-[#191715] rounded-md transition-colors"
                >
                  <span>View Photo Gallery</span>
                </a>
              </div>
            </div>

            {/* Authentic TCN Community Gallery Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EFEAE0] border border-[#E5DFD3]">
                <ResilientImage
                  src={TCN_IMAGES.communityJoy.src}
                  alt={TCN_IMAGES.communityJoy.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EFEAE0] border border-[#E5DFD3]">
                <ResilientImage
                  src={TCN_IMAGES.prayerCongregation.src}
                  alt={TCN_IMAGES.prayerCongregation.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EFEAE0] border border-[#E5DFD3]">
                <ResilientImage
                  src={TCN_IMAGES.studyTogether.src}
                  alt={TCN_IMAGES.studyTogether.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EFEAE0] border border-[#E5DFD3]">
                <ResilientImage
                  src={TCN_IMAGES.choirPraise.src}
                  alt={TCN_IMAGES.choirPraise.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
