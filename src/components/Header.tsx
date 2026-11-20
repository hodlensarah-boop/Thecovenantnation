import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '../data/tcnData';
import { TCN_IMAGES } from '../data/tcnImages';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, sectionId?: string) => void;
}

const NAV_ITEMS: { id: PageRoute; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'im-new', label: "I'm New" },
  { id: 'grow', label: 'Grow' },
  { id: 'community', label: 'Community' },
  { id: 'watch-listen', label: 'Watch & Listen' },
  { id: 'about', label: 'About Us' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (page: PageRoute, sectionId?: string) => {
    setMobileOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
        isScrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-[#E5DFD3] shadow-xs'
          : 'bg-[#FBF9F5]/85 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Crest + Single-Line Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85A17] rounded-sm"
        >
          <img
            src={TCN_IMAGES.logo.src}
            alt={TCN_IMAGES.logo.alt}
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain shrink-0"
          />
          <span className="font-serif text-xl sm:text-[22px] font-semibold tracking-tight text-[#191715]">
            The Covenant Nation
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Typography Navigation */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const active = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85A17] ${
                  active
                    ? 'text-[#C85A17] border-[#C85A17]'
                    : 'text-[#44403A] border-transparent hover:text-[#191715] hover:border-[#D49A2A]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('im-new', 'visit-planner')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 min-h-[42px] text-xs font-semibold tracking-wider uppercase text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A17]"
          >
            PLAN YOUR VISIT
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#191715] hover:bg-[#F3EFE6] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A17]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* One-Handed Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden border-t border-[#E5DFD3] bg-[#FBF9F5] px-4 pt-3 pb-6 shadow-lg"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between min-h-[48px] px-3 rounded-md text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#F3EFE6] text-[#C85A17]'
                      : 'text-[#191715] hover:bg-[#F3EFE6]/70'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="text-xs font-semibold uppercase tracking-wider">Current</span>}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#E5DFD3] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleLinkClick('im-new', 'visit-planner')}
              className="w-full min-h-[48px] px-5 py-3 text-sm font-semibold tracking-wider uppercase text-white bg-[#C85A17] hover:bg-[#AD4B10] rounded-md transition-colors cursor-pointer"
            >
              PLAN YOUR VISIT
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('watch-listen')}
              className="w-full min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#191715] border border-[#D8D0C1] hover:bg-[#F3EFE6] rounded-md transition-colors cursor-pointer"
            >
              Watch Live Worship
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
