import { PageRoute, TCN_CONTACT, TCN_SOCIALS } from '../data/tcnData';
import { TCN_IMAGES } from '../data/tcnImages';

interface FooterProps {
  onNavigate: (page: PageRoute, sectionId?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const go = (page: PageRoute, sectionId?: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page, sectionId);
  };

  return (
    <footer className="bg-[#191715] text-[#FBF9F5] border-t border-[#2E2A26]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2E2A26]">
          {/* Brand & Warm Invitation */}
          <div className="md:col-span-5">
            <a
              href="#home"
              onClick={go('home')}
              className="inline-flex items-center gap-3 mb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D49A2A] rounded-sm"
            >
              <img
                src={TCN_IMAGES.logo.src}
                alt={TCN_IMAGES.logo.alt}
                className="w-11 h-11 object-contain"
              />
              <span className="font-serif text-2xl font-semibold tracking-tight text-[#FBF9F5]">
                The Covenant Nation
              </span>
            </a>
            <p className="text-sm leading-relaxed text-[#CFC8BC] max-w-sm">
              Welcome home. There&rsquo;s a place for you here — to grow in God&rsquo;s Word, experience His Spirit,
              and walk alongside a caring spiritual family.
            </p>
            <div className="mt-6 text-xs text-[#A8A095] space-y-1.5">
              <p>
                Helpline:{' '}
                <a href="tel:+2348186000021" className="text-[#FBF9F5] hover:text-[#D49A2A] underline-offset-4 hover:underline">
                  0818 600 0021
                </a>{' '}
                ·{' '}
                <a href="tel:+2348186000024" className="text-[#FBF9F5] hover:text-[#D49A2A] underline-offset-4 hover:underline">
                  0818 600 0024
                </a>
              </p>
              <p>
                Enquiries:{' '}
                <a
                  href={`mailto:${TCN_CONTACT.enquiriesEmail}`}
                  className="text-[#FBF9F5] hover:text-[#D49A2A] underline-offset-4 hover:underline"
                >
                  {TCN_CONTACT.enquiriesEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Column 1: Explore & Belong */}
          <div className="md:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#D49A2A] mb-4">
              Your Next Step
            </h2>
            <ul className="space-y-2.5 text-sm text-[#DDD6CA]">
              <li>
                <a href="#about" onClick={go('about')} className="hover:text-white transition-colors">
                  About The Covenant Nation
                </a>
              </li>
              <li>
                <a href="#im-new" onClick={go('im-new')} className="hover:text-white transition-colors">
                  I&rsquo;m New
                </a>
              </li>
              <li>
                <a href="#centres" onClick={go('home', 'centres')} className="hover:text-white transition-colors">
                  Find a Centre
                </a>
              </li>
              <li>
                <a
                  href="http://fof.covenantchristiancentre.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Foundation of Faith
                </a>
              </li>
              <li>
                <a href="#community" onClick={go('community')} className="hover:text-white transition-colors">
                  Life Fellowships
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  onClick={go('community', 'next-gen')}
                  className="hover:text-white transition-colors"
                >
                  Children, Jesus Tribe &amp; Youth
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Media, Contact & Giving */}
          <div className="md:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#D49A2A] mb-4">
              Resources
            </h2>
            <ul className="space-y-2.5 text-sm text-[#DDD6CA]">
              <li>
                <a href="#watch-listen" onClick={go('watch-listen')} className="hover:text-white transition-colors">
                  Watch &amp; Listen
                </a>
              </li>
              <li>
                <a href="#grow" onClick={go('grow', 'confessions')} className="hover:text-white transition-colors">
                  Confessions
                </a>
              </li>
              <li>
                <a href="#about" onClick={go('about', 'contact-offices')} className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={TCN_CONTACT.givingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Giving
                </a>
              </li>
              <li>
                <a
                  href={TCN_CONTACT.testimonyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Share a Testimony
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Social Media */}
          <div className="md:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#D49A2A] mb-4">
              Connect
            </h2>
            <ul className="space-y-2.5 text-sm text-[#DDD6CA]">
              <li>
                <a
                  href={TCN_SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={TCN_SOCIALS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={TCN_SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={TCN_SOCIALS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9E968B]">
          <p>&copy; {new Date().getFullYear()} The Covenant Nation (Insights for Living). All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={TCN_CONTACT.privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FBF9F5] transition-colors"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://insightsforliving.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FBF9F5] transition-colors"
            >
              Official Archive (insightsforliving.org)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
