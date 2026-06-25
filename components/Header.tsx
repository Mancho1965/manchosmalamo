"use client";

import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dfd3] bg-[#f8f6f1]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-6 sm:py-4">

        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="MANCHO'S"
            width={50}
            height={50}
            priority
            className="sm:h-[70px] sm:w-[70px]"
          />

          <div>
            <h1 className="text-2xl font-bold leading-none text-[#1f4d2d] sm:text-4xl">
              MANCHO'S
            </h1>

            <p className="mt-1 text-[10px] tracking-[0.2em] text-[#b8862c] sm:text-sm">
              {t.header.ointment}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          <a href="#home">{t.header.home}</a>
          <a href="#products">{t.header.products}</a>
          <a href="#features">{t.header.features}</a>
          <a href="#gallery">{t.header.gallery}</a>
          <a href="#blog">{t.header.blog}</a>
          <a href="#contact">{t.header.contact}</a>
        </nav>

        <div className="flex items-center gap-3">

          <a
            href="https://m.facebook.com/profile.php?id=100069459975977&name=xhp_nt__fb__action__open_user"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#1666d8] hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.01 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.235 2.686.235v2.962h-1.514c-1.491 0-1.956.93-1.956 1.885v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.083 24 18.092 24 12.073z" />
            </svg>
          </a>

          <LanguageSwitcher />

        </div>

      </div>
    </header>
  );
}