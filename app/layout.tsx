import type { Metadata } from 'next';
import { Inter, Anek_Bangla, Noto_Sans_Bengali } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});
const anek_bangla = Anek_Bangla({
  subsets: ['bengali'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-anek-bangla',
});
const noto_sans_bengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-noto-sans-bengali',
});

export const metadata: Metadata = {
  title: 'NGC | Department of Economics',
  description: 'Department of Economics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable}  ${anek_bangla.variable} ${noto_sans_bengali.variable} flex flex-col mx-auto`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
