import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pruthvi Vanka - Portfolio',
  description: 'Analytical and performance-driven Computer Engineering student skilled in Python, SQL, Power BI, and Flask. Experienced in building predictive models, deploying ML solutions, and creating interactive dashboards.',
  keywords: 'Pruthvi Vanka, Portfolio, Computer Engineering, AI, ML, Data Analyst, Python, SQL',
  authors: [{ name: 'Pruthvi Vanka' }],
  openGraph: {
    title: 'Pruthvi Vanka - Portfolio',
    description: 'Computer Engineering Student specializing in AI/ML',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
