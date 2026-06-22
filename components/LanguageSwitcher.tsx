"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => setLanguage("ka")}
        className={`rounded px-1.5 py-1 transition ${
          language === "ka"
            ? "font-semibold text-[#1f4d2d]"
            : "text-gray-500 hover:text-[#1f4d2d]"
        }`}
      >
        KA
      </button>

      <span className="text-gray-300">|</span>

      <button
        onClick={() => setLanguage("en")}
        className={`rounded px-1.5 py-1 transition ${
          language === "en"
            ? "font-semibold text-[#1f4d2d]"
            : "text-gray-500 hover:text-[#1f4d2d]"
        }`}
      >
        EN
      </button>

      <span className="text-gray-300">|</span>

      <button
        onClick={() => setLanguage("ru")}
        className={`rounded px-1.5 py-1 transition ${
          language === "ru"
            ? "font-semibold text-[#1f4d2d]"
            : "text-gray-500 hover:text-[#1f4d2d]"
        }`}
      >
        RU
      </button>

      <span className="text-gray-300">|</span>

      <button
        onClick={() => setLanguage("el")}
        className={`rounded px-1.5 py-1 transition ${
          language === "el"
            ? "font-semibold text-[#1f4d2d]"
            : "text-gray-500 hover:text-[#1f4d2d]"
        }`}
      >
        EL
      </button>
    </div>
  );
}