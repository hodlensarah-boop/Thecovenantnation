import { FormEvent, useEffect, useState } from 'react';
import { Calendar, CheckCircle2, Clock, ExternalLink, MapPin, Navigation, Phone } from 'lucide-react';
import { Centre, PageRoute, TCN_CENTRES, TCN_CONTACT } from '../data/tcnData';
import { TCN_IMAGES } from '../data/tcnImages';
import { ResilientImage } from './ResilientImage';

interface ImNewPageProps {
  preselectedCentreId: string;
  onNavigate: (page: PageRoute, sectionId?: string) => void;
}

export function ImNewPage({ preselectedCentreId, onNavigate }: ImNewPageProps) {
  const [selectedCentreId, setSelectedCentreId] = useState(preselectedCentreId || 'iganmu');
  const [selectedTime, setSelectedTime] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [bringingFamily, setBringingFamily] = useState('Just me');
  const [formError, setFormError] = useState('');
  const [submittedPlan, setSubmittedPlan] = useState<{
    centre: Centre;
    time: string;
    firstName: string;
    email: string;
    bringingFamily: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedCentreId) {
      setSelectedCentreId(preselectedCentreId);
      setSubmittedPlan(null);
    }
  }, [preselectedCentreId]);

  const activeCentre = TCN_CENTRES.find((c) => c.id === selectedCentreId) || TCN_CENTRES[0];

  useEffect(() => {
    setSelectedTime(activeCentre.times[0] || '');
  }, [activeCentre]);

  const handlePlanSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = firstName.trim();
    const cleanEmail = email.trim();
    if (!cleanName) {
      setFormError('Please enter your first name so we know who we are welcoming.');
      return;
    }
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setFormError('Please enter a valid email address for your visit summary.');
      return;
    }
    setFormError('');
    setSubmittedPlan({
      centre: activeCentre,
      time: selectedTime || activeCentre.times[0],
      firstName: cleanName,
      email: cleanEmail,
      bringingFamily,
    });
  };

  const downloadCalendarInvite = () => {
    if (!submittedPlan) return;
    const now = new Date();
    const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    const yyyy = nextSunday.getFullYear();
    const mm = String(nextSunday.getMonth() + 1).padStart(2, '0');
    const dd = String(nextSunday.getDate()).padStart(2, '0');

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Covenant Nation//Plan Your Visit//EN',
      'BEGIN:VEVENT',
      `DTSTART:${yyyy}${mm}${dd}T080000`,
      `DTEND:${yyyy}${mm}${dd}T100000`,
      `SUMMARY:Sunday Worship at ${submittedPlan.centre.name}`,
      `LOCATION:${submittedPlan.centre.venue}`,
      `DESCRIPTION:Planned First Visit (${submittedPlan.time}). Welcome home to The Covenant Nation!`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TCN-${submittedPlan.centre.id}-Sunday-Visit.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${activeCentre.name} ${activeCentre.venue}`
  )}`;

  return (
    <div className="bg-[#FBF9F5]">
      {/* Intro Hero */}
      <section className="py-14 sm:py-20 border-b border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
                I&rsquo;m New Here
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#191715] leading-[1.08]">
                WE CAN&rsquo;T WAIT TO WELCOME YOU HOME.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#5C564E] leading-relaxed">
                Visiting a church for the first time can feel unfamiliar. At The Covenant Nation, you are
                family from the moment you walk through our doors—warm ushers, practical teaching from
                God&rsquo;s Word, heartfelt worship, and safe spaces for your children.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => {
                    const plannerEl = document.getElementById('visit-planner');
                    if (plannerEl) {
                      plannerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="min-h-[46px] px-6 py-3 inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors cursor-pointer"
                >
                  Plan Your Visit Below
                </button>
                <a
                  href={TCN_CONTACT.newToChurchFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-5 py-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#191715] border border-[#D8D0C1] hover:border-[#191715] rounded-md transition-colors"
                >
                  <span>Official Welcome Card</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#EFEAE0] border border-[#E5DFD3]">
                <ResilientImage
                  src={TCN_IMAGES.firstVisitEntrance.src}
                  alt={TCN_IMAGES.firstVisitEntrance.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20 bg-[#F3EFE6]/55 border-b border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715] mb-10">
            What Your First Sunday Looks Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E5DFD3] rounded-xl p-6">
              <p className="text-xs font-semibold text-[#C85A17] mb-2">01 · Warm Arrival</p>
              <h3 className="font-serif text-2xl font-semibold text-[#191715]">Come Just As You Are</h3>
              <p className="mt-2.5 text-sm text-[#5C564E] leading-relaxed">
                Whether you dress casually or formally, our Ushering and Help Desk teams are ready at the
                entrance to help you find a seat and feel comfortable.
              </p>
            </div>

            <div className="bg-white border border-[#E5DFD3] rounded-xl p-6">
              <p className="text-xs font-semibold text-[#C85A17] mb-2">02 · Children &amp; Teens</p>
              <h3 className="font-serif text-2xl font-semibold text-[#191715]">Safe Spaces for Kids</h3>
              <p className="mt-2.5 text-sm text-[#5C564E] leading-relaxed">
                Children&rsquo;s Church (ages 1–12) and Jesus Tribe (ages 13–19) run during services with
                creative Bible teaching, games, and dedicated care.
              </p>
            </div>

            <div className="bg-white border border-[#E5DFD3] rounded-xl p-6">
              <p className="text-xs font-semibold text-[#C85A17] mb-2">03 · Word &amp; Worship</p>
              <h3 className="font-serif text-2xl font-semibold text-[#191715]">Practical Biblical Teaching</h3>
              <p className="mt-2.5 text-sm text-[#5C564E] leading-relaxed">
                Expect uplifting worship, united prayer, and clear teaching from God&rsquo;s Word that helps you
                live out your faith in family, work, and everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Plan Your First Visit Planner */}
      <section id="visit-planner" className="py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-2">
                Simple Visit Planner
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715]">
                PLAN YOUR FIRST VISIT
              </h2>
              <p className="mt-2 text-sm text-[#5C564E]">
                Choose your nearest centre and service time to get directions, save the Sunday date, and
                connect with our welcome team.
              </p>

              {submittedPlan ? (
                <div className="mt-7 bg-[#FBF9F5] border border-[#E5DFD3] rounded-xl p-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#14532D] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#191715]">
                        We look forward to seeing you, {submittedPlan.firstName}.
                      </h3>
                      <p className="mt-1 text-sm text-[#5C564E]">
                        Your visit plan for <strong className="text-[#191715]">{submittedPlan.centre.name}</strong>{' '}
                        ({submittedPlan.time}) is ready below.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E5DFD3] rounded-lg p-4 text-sm space-y-2 text-[#4A453E]">
                    <p>
                      <strong className="text-[#191715]">Venue:</strong> {submittedPlan.centre.venue}
                    </p>
                    <p>
                      <strong className="text-[#191715]">Service Time:</strong> {submittedPlan.time}
                    </p>
                    <p>
                      <strong className="text-[#191715]">Party:</strong> {submittedPlan.bringingFamily}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={downloadCalendarInvite}
                      className="min-h-[44px] px-4 py-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>Add to Calendar (.ics)</span>
                    </button>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#191715] bg-white border border-[#D8D0C1] hover:border-[#191715] rounded-md"
                    >
                      <Navigation className="w-4 h-4" aria-hidden="true" />
                      <span>Open Google Maps</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#E5DFD3] text-xs text-[#5C564E] space-y-2">
                    <p>
                      To register directly with the church pastoral office so an usher can follow up personally,
                      complete the official TCN Welcome Card:
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={TCN_CONTACT.newToChurchFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-[#C85A17] hover:underline"
                      >
                        <span>Complete Official Welcome Card (thecovenantnation.org/newtochurch)</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedPlan(null)}
                        className="text-[#5C564E] hover:text-[#191715] underline cursor-pointer"
                      >
                        Edit Plan
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePlanSubmit} className="mt-7 space-y-5" noValidate>
                  <div>
                    <label htmlFor="visit-centre" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-2">
                      Select a Centre
                    </label>
                    <select
                      id="visit-centre"
                      value={selectedCentreId}
                      onChange={(e) => setSelectedCentreId(e.target.value)}
                      className="w-full min-h-[46px] px-3.5 py-2.5 text-sm text-[#191715] bg-[#FBF9F5] border border-[#D8D0C1] rounded-lg focus:outline-none focus:border-[#C85A17]"
                    >
                      {TCN_CENTRES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} — {c.city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="visit-time" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-2">
                        Preferred Service
                      </label>
                      <select
                        id="visit-time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full min-h-[46px] px-3.5 py-2.5 text-sm text-[#191715] bg-[#FBF9F5] border border-[#D8D0C1] rounded-lg focus:outline-none focus:border-[#C85A17]"
                      >
                        {activeCentre.times.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="visit-party" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-2">
                        Who is Coming?
                      </label>
                      <select
                        id="visit-party"
                        value={bringingFamily}
                        onChange={(e) => setBringingFamily(e.target.value)}
                        className="w-full min-h-[46px] px-3.5 py-2.5 text-sm text-[#191715] bg-[#FBF9F5] border border-[#D8D0C1] rounded-lg focus:outline-none focus:border-[#C85A17]"
                      >
                        <option value="Just me">Just me</option>
                        <option value="Visiting with a friend / spouse">Visiting with a friend / spouse</option>
                        <option value="Family with children (ages 1–12)">Family with children (ages 1–12)</option>
                        <option value="Family with teens (Jesus Tribe 13–19)">Family with teens (Jesus Tribe 13–19)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="visit-name" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-2">
                        First Name
                      </label>
                      <input
                        id="visit-name"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Chinedu"
                        className="w-full min-h-[46px] px-3.5 py-2.5 text-sm text-[#191715] bg-[#FBF9F5] border border-[#D8D0C1] rounded-lg focus:outline-none focus:border-[#C85A17]"
                      />
                    </div>

                    <div>
                      <label htmlFor="visit-email" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-2">
                        Email Address
                      </label>
                      <input
                        id="visit-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full min-h-[46px] px-3.5 py-2.5 text-sm text-[#191715] bg-[#FBF9F5] border border-[#D8D0C1] rounded-lg focus:outline-none focus:border-[#C85A17]"
                      />
                    </div>
                  </div>

                  {formError && (
                    <p role="alert" className="text-sm text-[#991B1B] bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-3.5 py-2.5">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors cursor-pointer"
                  >
                    Prepare My Sunday Visit
                  </button>
                </form>
              )}
            </div>

            {/* Selected Centre Quick Summary + Helpline */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="bg-[#F3EFE6] border border-[#E5DFD3] rounded-2xl p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C85A17] mb-2">
                  Selected Worship Centre
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#191715]">{activeCentre.name}</h3>
                <div className="mt-4 space-y-3 text-sm text-[#4A453E]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C85A17] shrink-0 mt-0.5" aria-hidden="true" />
                    <p>{activeCentre.venue}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#C85A17] shrink-0 mt-0.5" aria-hidden="true" />
                    <ul className="space-y-1 tabular-nums font-medium text-[#191715]">
                      {activeCentre.times.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {activeCentre.flagForConfirmation && (
                  <p className="mt-4 text-xs text-[#7D4B16] bg-[#FBF6EB] border border-[#EFE2C6] rounded-lg p-3">
                    {activeCentre.flagForConfirmation}
                  </p>
                )}
                <div className="mt-5 pt-4 border-t border-[#E0D9CA] flex flex-wrap gap-4 text-xs font-semibold">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#191715] hover:text-[#C85A17]"
                  >
                    <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href={activeCentre.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#5C564E] hover:text-[#191715]"
                  >
                    <span>{activeCentre.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#787166] mb-2">
                  <Phone className="w-3.5 h-3.5 text-[#C85A17]" aria-hidden="true" />
                  <span>Need Assistance?</span>
                </div>
                <p className="text-sm text-[#4A453E] leading-relaxed">
                  Our First-Timer &amp; Helpline team is happy to answer questions about parking, buses, or
                  children&rsquo;s check-in.
                </p>
                <div className="mt-4 space-y-1 text-sm">
                  <p className="font-semibold text-[#191715]">0818 600 0021 · 0818 600 0024 · 0818 600 0025</p>
                  <p className="text-xs text-[#6B645B]">{TCN_CONTACT.hours}</p>
                  <p className="pt-1">
                    <a
                      href={`mailto:${TCN_CONTACT.helplineEmail}`}
                      className="text-xs font-medium text-[#C85A17] hover:underline"
                    >
                      {TCN_CONTACT.helplineEmail}
                    </a>
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#EFEAE0]">
                  <button
                    type="button"
                    onClick={() => onNavigate('home', 'centres')}
                    className="text-xs font-semibold uppercase tracking-wider text-[#191715] hover:text-[#C85A17] cursor-pointer"
                  >
                    Browse All {TCN_CENTRES.length} Centres &rarr;
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
