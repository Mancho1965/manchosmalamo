"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#f8f6f1]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row">

        {/* ტექსტი */}
        <div className="flex-1">

          <Image
            src="/logo.png"
            alt="MANCHO'S"
            width={300}
            height={300}
            priority
            className="mb-8 h-auto"
          />

          <h1 className="text-5xl font-bold leading-tight text-[#1f4d2d] lg:text-6xl">
            {t.hero.title1}
            <br />
            <span className="text-[#bf8d2d]">
              {t.hero.title2}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            {t.hero.description}
          </p>

          <ul className="mt-8 space-y-3 text-lg text-gray-700">
            {t.hero.items.map((item: string, index: number) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="tel:+995555252914"
              className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              {t.hero.phone}
            </a>

            <a
              href="https://wa.me/995555252914"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              {t.hero.whatsapp}
            </a>

            <a
              href="https://m.facebook.com/profile.php?id=100069459975977&name=xhp_nt__fb__action__open_user"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#1877F2] px-8 py-4 font-semibold text-white transition hover:bg-[#1666d8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019-4.388 11.01-10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.235 2.686.235v2.962h-1.514c-1.491 0-1.956.93-1.956 1.885v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.083 24 18.092 24 12.073z" />
              </svg>

              Facebook
            </a>

          </div>

        </div>

        {/* ფოტო */}
        <div className="flex flex-1 justify-center">

          <Image
            src="/jar.png"
            alt="MANCHO'S მალამო"
            width={700}
            height={700}
            priority
            className="h-auto w-full max-w-[650px]"
          />

        </div>

      </div>
    </section>
  );
}