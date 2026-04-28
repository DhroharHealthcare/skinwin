'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import MegaMenu from '../navigation/MegaMenu';
import Footer from './Footer';
import FloatingWhatsApp from '../FloatingWhatsApp';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      <MegaMenu />
      <main key={pathname} className="pt-20 page-transition">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PageLayout;