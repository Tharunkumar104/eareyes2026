import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { EventsSection } from '@/components/EventsSection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WelcomePopup } from '@/components/WelcomePopup';

// Event date: February 17, 2026
const EVENT_DATE = new Date('2026-02-17T09:00:00');

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Check system preference and show popup on first visit
  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('eareyes-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Show popup on first visit
    const hasVisited = sessionStorage.getItem('eareyes-visited');
    if (!hasVisited) {
      // Small delay for better UX
      setTimeout(() => setShowPopup(true), 500);
      sessionStorage.setItem('eareyes-visited', 'true');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('eareyes-theme', isDark ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Welcome Popup */}
      <WelcomePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        targetDate={EVENT_DATE}
      />

      {/* Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main>
        <HeroSection targetDate={EVENT_DATE} />
        <EventsSection />
        <ScheduleSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
