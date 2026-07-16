import type { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import './globals.css';
import BotWidget from '@/components/BotWidget';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'IKFTECH | AI-First Digital Engineering & Automation Partner',
  description:
    'IKFTECH designs, engineers, and automates digital products with AI-first workflows — from strategy and UX to full-stack engineering, AI agents, and enterprise scale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <BotWidget />
        <Footer />
      </body>
    </html>
  );
}
