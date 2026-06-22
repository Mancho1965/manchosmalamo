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
            className="sm:w-[70px] sm:h-[70px]"
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

        <nav className="hidden lg:flex items-center gap-10">
          <a href="#home">{t.header.home}</a>
          <a href="#products">{t.header.products}</a>
          <a href="#features">{t.header.features}</a>
          <a href="#gallery">{t.header.gallery}</a>
          <a href="#blog">{t.header.blog}</a>
          <a href="#contact">{t.header.contact}</a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}