"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

type Category =
  | "all"
  | "psoriasis"
  | "lymphedema"
  | "diabetic-wound"
  | "gangrene"
  | "burn"
  | "scabies"
  | "fungus";

type Props = {
  selected: Category;
  onChange: (category: Category) => void;
};

export default function GalleryFilters({
  selected,
  onChange,
}: Props) {
  const { language } = useLanguage();
  const t = translations[language];

  const buttons: { value: Category; label: string }[] = [
    { value: "all", label: t.galleryFilters.all },
    { value: "psoriasis", label: t.galleryFilters.psoriasis },
    { value: "lymphedema", label: t.galleryFilters.lymphedema },
    { value: "diabetic-wound", label: t.galleryFilters.diabeticWound },
    { value: "gangrene", label: t.galleryFilters.gangrene },
    { value: "burn", label: t.galleryFilters.burn },
    { value: "scabies", label: t.galleryFilters.scabies },
    { value: "fungus", label: t.galleryFilters.fungus },
  ];

  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {buttons.map((button) => (
        <button
          key={button.value}
          onClick={() => onChange(button.value)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            selected === button.value
              ? "bg-[#1f4d2d] text-white"
              : "border border-[#1f4d2d] bg-white text-[#1f4d2d] hover:bg-[#1f4d2d] hover:text-white"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}