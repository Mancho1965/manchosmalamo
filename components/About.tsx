"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* ფოტო */}
        <div className="flex justify-center">
          <Image
            src="/about.jpg"
            alt="MANCHO'S"
            width={650}
            height={650}
            className="h-auto w-full max-w-[520px]"
            priority
          />
        </div>

        {/* ტექსტი */}
        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b78b2f]">
            {t.about.badge}
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-[#1f4d2d]">
            {t.about.title1}
            <br />
            {t.about.title2}
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            {t.about.text1}
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            {t.about.text2}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {t.about.cards.map(
              (
                card: { title: string; text: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 p-5"
                >
                  <h3 className="font-semibold text-[#1f4d2d]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {card.text}
                  </p>
                </div>
              )
            )}
          </div>

        </div>

      </div>
    </section>
  );
}