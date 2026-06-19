import Image from "next/image";

export default function Hero() {
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
            ბუნების ძალა.
            <br />
            <span className="text-[#bf8d2d]">
              ტრადიციის გამოვლინება.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            მრავალწლიანი გამოცდილებით შექმნილი ბუნებრივი მალამოები,
            რომლებიც მზადდება შერჩეული მცენარეული ინგრედიენტებით.
          </p>

          <ul className="mt-8 space-y-3 text-lg text-gray-700">
            <li>✔ თიაქარი</li>
            <li>✔ ფსორიაზი</li>
            <li>✔ კანის სხვადასხვა პრობლემები</li>
            <li>✔ სხვა მრავალი დაავადება</li>
          </ul>

          <div className="mt-10 flex gap-4">

            <a
              href="tel:+995555252914"
              className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
            >
              📞 დაგვიკავშირდით
            </a>

            <a
              href="https://wa.me/995555252914"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-green-700 px-8 py-4 font-semibold text-green-700 hover:bg-green-700 hover:text-white"
            >
              WhatsApp
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