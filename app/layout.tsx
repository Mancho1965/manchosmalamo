import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manchosmalamo.com"),

  title: {
    default: "MANCHO'S მალამო | ბუნებრივი მცენარეული მალამოები",
    template: "%s | MANCHO'S მალამო",
  },

  description:
    "MANCHO'S - ბუნებრივი მცენარეული მალამოები. მრავალწლიანი გამოცდილებით შექმნილი პროდუქცია კანის მოვლისთვის.",

  keywords: [
    "MANCHO'S",
    "მალამო",
    "ბუნებრივი მალამო",
    "მცენარეული მალამო",
    "კანის მოვლა",
    "herbal ointment",
    "natural ointment",
    "Georgia",
  ],

  authors: [
    {
      name: "MANCHO'S",
    },
  ],

  creator: "MANCHO'S",

  publisher: "MANCHO'S",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "ka_GE",
    url: "https://manchosmalamo.com",
    siteName: "MANCHO'S მალამო",
    title: "MANCHO'S მალამო",
    description:
      "ბუნებრივი მცენარეული მალამოები მრავალწლიანი გამოცდილებით.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MANCHO'S მალამო",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MANCHO'S მალამო",
    description:
      "ბუნებრივი მცენარეული მალამოები მრავალწლიანი გამოცდილებით.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ka"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f8f6f1] text-gray-900">
        {children}
      </body>
    </html>
  );
}