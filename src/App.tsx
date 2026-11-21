import { useEffect, useState } from 'react';
import { AboutPage } from './components/AboutPage';
import { CommunityPage } from './components/CommunityPage';
import { Footer } from './components/Footer';
import { GrowPage } from './components/GrowPage';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ImNewPage } from './components/ImNewPage';
import { WatchListenPage } from './components/WatchListenPage';
import { PageRoute } from './data/tcnData';

const VALID_ROUTES: PageRoute[] = ['home', 'im-new', 'grow', 'community', 'watch-listen', 'about'];

function getRouteFromLocation(): PageRoute {
  const hash = window.location.hash.replace('#', '').split('/')[0] as PageRoute;
  if (VALID_ROUTES.includes(hash)) return hash;
  const pathRoute = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/')[0] as PageRoute;
  return VALID_ROUTES.includes(pathRoute) ? pathRoute : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => getRouteFromLocation());
  const [selectedCentreId, setSelectedCentreId] = useState<string>('iganmu');

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.href = canonicalUrl;
    }
    const ogUrlEl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrlEl) {
      ogUrlEl.content = canonicalUrl;
    }
  }, [currentPage]);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getRouteFromLocation());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (page: PageRoute, sectionId?: string) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCentreForVisit = (centreId: string) => {
    setSelectedCentreId(centreId);
    navigate('im-new', 'visit-planner');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#191715]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#191715] focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      <Header currentPage={currentPage} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigate}
            onSelectCentreForVisit={handleSelectCentreForVisit}
          />
        )}
        {currentPage === 'im-new' && (
          <ImNewPage
            preselectedCentreId={selectedCentreId}
            onNavigate={navigate}
          />
        )}
        {currentPage === 'grow' && <GrowPage />}
        {currentPage === 'community' && <CommunityPage />}
        {currentPage === 'watch-listen' && <WatchListenPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
