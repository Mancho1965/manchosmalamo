"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#1f4d2d] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-bold">
              MANCHO'S
            </h2>

            <p className="mt-2 text-green-100">
              {t.header.ointment}
            </p>

            <p className="mt-6 max-w-sm leading-8 text-green-100">
              {t.footer.description}
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-xl font-semibold">
              {t.footer.navigation}
            </h3>

            <ul className="mt-6 space-y-3">

              <li>
                <a href="#" className="transition hover:text-[#d6b15b]">
                  {t.header.home}
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-[#d6b15b]">
                  {t.footer.about}
                </a>
              </li>

              <li>
                <a href="#gallery" className="transition hover:text-[#d6b15b]">
                  {t.header.gallery}
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-[#d6b15b]">
                  {t.header.contact}
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold">
              {t.header.contact}
            </h3>

            <div className="mt-6 space-y-4">

              <p>📞 +995 555 25 29 14</p>

              <p>📧 manchosmalamo@gmail.com</p>

              <p>📍 {t.contact.country}</p>

              <a
                href="https://wa.me/995555252914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-[#1f4d2d] transition hover:bg-[#d6b15b] hover:text-white"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-green-700 pt-8 text-center text-sm text-green-200">
          © {new Date().getFullYear()} MANCHO'S {t.header.ointment}.{" "}
          {t.footer.rights}
        </div>

      </div>

    </footer>
  );
}