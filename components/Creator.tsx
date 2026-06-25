"use client";

import Image from "next/image";

export default function Creator() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ფოტო */}
          <div className="flex justify-center">

            <Image
              src="/creator.jpg"
              alt="მანანა ჯიმშელეიშვილი"
              width={550}
              height={700}
              className="rounded-3xl shadow-2xl"
              priority
            />

          </div>

          {/* ტექსტი */}
          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8862c]">
              MANCHO'S
            </span>

            <h2 className="mt-4 text-5xl font-bold leading-tight">
              <span className="text-[#b8862c]">
                შემქმნელი
              </span>{" "}
              <span className="text-[#1f4d2d]">
                MANCHO'S
              </span>
            </h2>

            <h3 className="mt-8 text-3xl font-bold text-[#1f4d2d]">
              მანანა ჯიმშელეიშვილი
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              მრავალწლიანი გამოცდილების საფუძველზე შექმნილი ბუნებრივი
              მცენარეული მალამოების ავტორი. თითოეული პროდუქტი მზადდება
              განსაკუთრებული პასუხისმგებლობით, ყურადღებითა და
              ბუნებრივი ინგრედიენტების შერჩევით.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              მთავარი მიზანია ადამიანებს შესთავაზოს ხარისხიანი,
              ბუნებრივ კომპონენტებზე დაფუძნებული პროდუქტი,
              რომელიც ყოველდღიურ კანის მოვლაში დაეხმარება.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="tel:+995555252914"
                className="rounded-xl bg-[#1f4d2d] px-8 py-4 font-semibold text-white transition hover:bg-[#173b24]"
              >
                📞 დარეკვა
              </a>

              <a
                href="https://wa.me/995555252914"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-[#1f4d2d] px-8 py-4 font-semibold text-[#1f4d2d] transition hover:bg-[#1f4d2d] hover:text-white"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://m.facebook.com/profile.php?id=100069459975977&name=xhp_nt__fb__action__open_user"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#1877F2] px-8 py-4 font-semibold text-white transition hover:bg-[#1666d8]"
              >
                Facebook
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}