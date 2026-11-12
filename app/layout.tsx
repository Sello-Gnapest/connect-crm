import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Connect CRM',
  description: 'Sales CRM dashboard for managing leads, deals, customers, and workflows.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
