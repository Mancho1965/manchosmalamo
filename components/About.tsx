import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* მარცხენა ფოტო */}

        <div className="flex justify-center">

          <Image
            src="/jar.png"
            alt="MANCHO'S მალამო"
            width={650}
            height={650}
            className="h-auto w-full max-w-[520px]"
          />

        </div>

        {/* ტექსტი */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b78b2f]">
            ABOUT MANCHO'S
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-[#1f4d2d]">
            MANCHO'S
            <br />
            მალამოს შესახებ
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            MANCHO'S წარმოადგენს ბუნებრივ მცენარეულ მალამოებს,
            რომლებიც მრავალწლიანი გამოცდილებით მზადდება
            ხარისხიანი ინგრედიენტების გამოყენებით.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            ჩვენი მიზანია მომხმარებელს შევთავაზოთ ბუნებრივ
            კომპონენტებზე დაფუძნებული პროდუქტი, რომელიც
            ყოველდღიურ კანის მოვლაში დაგეხმარებათ.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-semibold text-[#1f4d2d]">
                🌿 ბუნებრივი ინგრედიენტები
              </h3>
              <p className="mt-2 text-gray-600">
                მხოლოდ შერჩეული მცენარეული ნედლეული.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-semibold text-[#1f4d2d]">
                🧴 მზადდება ქიმიური მინარევების გარეშე.
              </h3>
              <p className="mt-2 text-gray-600">
                თითოეული მალამო მზადდება განსაკუთრებული ყურადღებით.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-semibold text-[#1f4d2d]">
                ⭐ მრავალწლიანი გამოცდილება
              </h3>
              <p className="mt-2 text-gray-600">
                რეცეპტები გამოცდილებასა და პრაქტიკას ეფუძნება.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-semibold text-[#1f4d2d]">
                🇬🇪 საქართველოში დამზადებული
              </h3>
              <p className="mt-2 text-gray-600">
                ადგილობრივი წარმოება მაღალი ხარისხის სტანდარტებით.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}