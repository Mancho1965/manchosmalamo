export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="rounded-3xl bg-[#f8f6f1] p-12 shadow-xl">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b58a35]">
              CONTACT
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#1f4d2d]">
              დაგვიკავშირდით
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              თუ გაქვთ შეკითხვა ან გსურთ კონსულტაცია,
              დაგვიკავშირდით ნებისმიერ დროს.
            </p>

          </div>

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

              <span className="text-3xl">📞</span>

              <div>

                <h3 className="font-semibold text-[#1f4d2d]">
                  ტელეფონი
                </h3>

                <a
                  href="tel:+995555252914"
                  className="text-lg text-gray-600 hover:text-green-700"
                >
                  +995 555 25 29 14
                </a>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

              <span className="text-3xl">💬</span>

              <div>

                <h3 className="font-semibold text-[#1f4d2d]">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/995555252914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 hover:text-green-700"
                >
                  მოგვწერეთ WhatsApp-ზე
                </a>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

              <span className="text-3xl">📧</span>

              <div>

                <h3 className="font-semibold text-[#1f4d2d]">
                  ელფოსტა
                </h3>

                <a
                  href="mailto:manchosmalamo@gmail.com"
                  className="text-lg text-gray-600 hover:text-green-700"
                >
                  manchosmalamo@gmail.com
                </a>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

              <span className="text-3xl">📍</span>

              <div>

                <h3 className="font-semibold text-[#1f4d2d]">
                  მდებარეობა
                </h3>

                <p className="text-lg text-gray-600">
                  საქართველო
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

              <span className="text-3xl">🕒</span>

              <div>

                <h3 className="font-semibold text-[#1f4d2d]">
                  სამუშაო საათები
                </h3>

                <p className="text-lg text-gray-600">
                  ყოველდღე 09:00 – 20:00
                </p>

              </div>

            </div>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="https://wa.me/995555252914"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#1f4d2d] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#173b24]"
            >
              💬 WhatsApp
            </a>

            <a
              href="tel:+995555252914"
              className="rounded-xl border-2 border-[#1f4d2d] px-10 py-4 text-lg font-semibold text-[#1f4d2d] transition hover:bg-[#1f4d2d] hover:text-white"
            >
              📞 დარეკვა
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}