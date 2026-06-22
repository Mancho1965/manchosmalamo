"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#f8f6f1] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b58a35]">
            {t.features.badge}
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#1f4d2d]">
            {t.features.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {t.features.description}
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {t.features.cards.map(
            (
              item: {
                icon: string;
                title: string;
                text: string;
              },
              index: number
            ) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 text-6xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold text-[#1f4d2d]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}