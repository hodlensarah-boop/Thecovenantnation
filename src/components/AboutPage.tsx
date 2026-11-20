import { ExternalLink, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { TCN_CONTACT } from '../data/tcnData';
import { TCN_IMAGES } from '../data/tcnImages';
import { ResilientImage } from './ResilientImage';

export function AboutPage() {
  return (
    <div className="bg-[#FBF9F5]">
      {/* Story & Vision */}
      <section className="py-14 sm:py-20 border-b border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17] mb-3">
            About The Covenant Nation
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#191715] leading-[1.08] max-w-3xl">
            A CHURCH WITHOUT WALLS, ROOTED IN GOD&rsquo;S WORD SINCE 1994.
          </h1>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-5 text-base text-[#3D3934] leading-[1.75]">
              <p>
                The Covenant Nation was dedicated in 1994 as Covenant Christian Centre and has flourished into a
                church without walls. Embracing the next phase of the work of the ministry saw the change in name
                and logo in January 2020 by the Senior Pastor and Founder, Pastor &lsquo;Poju Oyemade.
              </p>
              <p>
                The ministry places strong emphasis on a personal relationship with Christ and communion with
                Him through the Bible. Practical insights on how to live and grow in the Christian faith are
                taught and encouraged in daily life so believers make an impact in their world.
              </p>
              <p>
                With Sunday attendance across more than twenty centres in Nigeria alongside vibrant congregations
                in the United Kingdom, United States, Ireland, and Canada, the church cares for individuals down
                to the personal level through Life Fellowships (Prayer Cells) and Covenant Community Groups.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#F3EFE6] border border-[#E5DFD3] rounded-2xl p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C85A17] mb-3">
                Our Vision
              </p>
              <blockquote className="font-serif text-xl sm:text-2xl font-medium italic text-[#191715] leading-relaxed">
                &ldquo;The vision of Insights for Living is to teach Christians who they are in Christ Jesus,
                and how to live a victorious life in their covenant rights and privileges.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-[#5C564E] leading-relaxed">
                We are called to assist believers in becoming rooted, grounded, and established in the Word of
                God—moving from milk to meat, from religion to reality (Colossians 1:23–28; Hebrews 5:12–14).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Pastor Poju Oyemade */}
      <section className="py-16 sm:py-20 bg-[#F3EFE6]/55 border-b border-[#E5DFD3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#2E2A26] border border-[#E5DFD3]">
              <ResilientImage
                src={TCN_IMAGES.pastorPojuPortrait.src}
                alt={TCN_IMAGES.pastorPojuPortrait.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="mt-3 text-xs font-serif italic text-[#6B645B]">
              Pastor Poju Oyemade · Senior Pastor &amp; Founder
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4 text-base text-[#3D3934] leading-[1.75]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A17]">
              Leadership
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191715]">
              About Pastor Poju Oyemade
            </h2>
            <p>
              Pastor Poju Oyemade is the Senior Pastor and Founder of The Covenant Nation (TCN), founded in 1994
              and headquartered in Lagos, Nigeria. He is a highly regarded teacher of the Word of Faith who draws
              insightful lessons from Scripture applicable to everyday life, family, business, and nation
              building.
            </p>
            <p>
              His call to ministry dates back to his time as an undergraduate at the University of Lagos, and he
              was ordained into ministry by Bishop David Oyedepo. He serves as a bridge across generations—linking
              church leaders, entrepreneurs, professionals, and civic builders.
            </p>
            <p>
              Pastor Poju convenes three flagship annual gatherings: The World Faith Believers Convention
              (WOFBEC), The Platform Nigeria (May 1 &amp; October 1), and the International Conference for Pastors,
              Ministers, Leaders and Workers (ICPLMW). He hosts the regular broadcasts <em>Insights for Living</em>{' '}
              and <em>The Quantum Leap</em>, and is married to Pastor Toyin Oyemade, a teacher of the Word,
              filmmaker, and content creator.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Offices & Giving */}
      <section id="contact-offices" className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-7">
            <h2 className="font-serif text-3xl font-semibold text-[#191715] mb-5">Church Offices &amp; Helpline</h2>
            <div className="space-y-4 text-sm text-[#4A453E]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C85A17] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#191715]">Yaba Office (9:00 AM – 3:00 PM WAT)</p>
                  <p>400, Herbert Macaulay Way, Yaba, Lagos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C85A17] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#191715]">Lekki Office</p>
                  <p>The Covenant Chapel, behind Enyo Filling Station, Chisco Bus Stop, Lekki</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C85A17] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#191715]">Helpline ({TCN_CONTACT.hours})</p>
                  <p>0818 600 0021 · 0818 600 0024 · 0818 600 0025 · 0818 600 0082</p>
                  <p className="mt-1 text-xs text-[#6B645B]">TCN Media Store (CD/Resource enquiries): 0814 000 0224</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C85A17] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <a href={`mailto:${TCN_CONTACT.enquiriesEmail}`} className="text-[#C85A17] font-medium hover:underline">
                    {TCN_CONTACT.enquiriesEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F3EFE6] border border-[#E5DFD3] rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <Heart className="w-6 h-6 text-[#C85A17] mb-3" aria-hidden="true" />
              <h2 className="font-serif text-3xl font-semibold text-[#191715]">Giving &amp; Partnership</h2>
              <p className="mt-3 text-sm sm:text-base text-[#4A453E] leading-relaxed">
                To cheerfully give offerings, tithes, pledges, or partnership seeds toward the work of the
                ministry and community outreach, please use The Covenant Nation&rsquo;s official giving portal.
              </p>
            </div>
            <div className="mt-6">
              <a
                href={TCN_CONTACT.givingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] px-6 py-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors"
              >
                <span>Open Official Giving Portal</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
