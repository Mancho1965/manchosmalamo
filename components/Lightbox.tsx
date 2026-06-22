"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

type LangText = {
  ka: string;
  en: string;
  ru: string;
  el: string;
};

type GalleryItem = {
  image: string;
  title: LangText;
  description: LangText;
};

type Props = {
  item: GalleryItem | null;
  language: "ka" | "en" | "ru" | "el";
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  item,
  language,
  onClose,
  onNext,
  onPrev,
}: Props) {
  const { language: currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-3xl text-white transition hover:bg-black/70"
        >
          ×
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/70"
        >
          ←
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/70"
        >
          →
        </button>

        <div className="grid lg:grid-cols-[45%_55%]">
          <div className="relative h-[350px] lg:h-[650px] bg-black">
            <Image
              src={item.image}
              alt={item.title[language]}
              fill
              className="object-contain"
            />
          </div>

          <div className="max-h-[650px] overflow-y-auto p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8862c]">
              MANCHO'S
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1f4d2d]">
              {item.title[language]}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              {item.description[language]}
            </p>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm leading-7 text-gray-700">
                ⚠️ {t.lightboxNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}