import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#f7f4ee]/90 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a href="#" className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="MANCHO'S"
            width={70}
            height={70}
            className="h-auto"
            priority
          />

          <div>

            <h2 className="text-3xl font-bold tracking-wide text-[#1d4f31]">
              MANCHO'S
            </h2>

            <p className="text-sm tracking-[0.25em] text-[#b18a2f]">
              მალამო
            </p>

          </div>

        </a>

        {/* Menu */}

        <nav className="hidden items-center gap-12 lg:flex">

          <a href="#" className="font-medium text-[#23492d] hover:text-[#b18a2f] transition">
            მთავარი
          </a>

          <a href="#about" className="font-medium text-[#23492d] hover:text-[#b18a2f] transition">
            პროდუქცია
          </a>

          <a href="#features" className="font-medium text-[#23492d] hover:text-[#b18a2f] transition">
            უპირატესობები
          </a>

          <a href="#gallery" className="font-medium text-[#23492d] hover:text-[#b18a2f] transition">
            შედეგები
          </a>

          <a href="#blog" className="font-medium text-[#23492d] hover:text-[#b18a2f] transition">
            ბლოგი
          </a>

          <a href="#contact" className="font-medium text-[#23492d] hover:text-[#b18a2f] transition">
            კონტაქტი
          </a>

        </nav>

        {/* Language */}

        <LanguageSwitcher />

      </div>
    </header>
  );
}