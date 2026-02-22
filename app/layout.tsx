import type { Metadata } from "next";
import { Source_Serif_4, Oswald, Figtree } from "next/font/google"; // Import the font
import "./globals.css";
import localFont from 'next/font/local'

// Font Family 2 Configuration
const Halyard = localFont({
  src: [
    {
      path: '../public/fonts/Halyard/Halyard Display Book.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Halyard/Halyard Display Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Halyard/Halyard Display Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Halyard/Halyard Display Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Halyard/Halyard Display SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Halyard/Halyard Display Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-Halyard',
})

// Configure Source Serif 4 from Google Fonts
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif-4",
  preload: false,
  display: 'optional',
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  preload: false,
  display: 'optional',
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  preload: false,
  display: 'optional',
});

export const metadata: Metadata = {
  title: "Travel Gate",
  description: "We Make Travel Matter",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Halyard.variable} ${sourceSerif.variable} ${oswald.variable} ${figtree.variable}`}
    >
      <body className="font-figtree antialiased">
        {children}
      </body>
    </html>
  );
}
