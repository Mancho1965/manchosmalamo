export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      <div className="mx-auto max-w-7xl p-10">

        <h1 className="text-5xl font-bold text-[#1f4d2d]">
          MANCHO'S Admin
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome back.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">📷</div>
            <h2 className="mt-5 text-2xl font-bold text-[#1f4d2d]">
              Gallery
            </h2>
            <p className="mt-2 text-gray-600">
              Manage gallery photos.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">📰</div>
            <h2 className="mt-5 text-2xl font-bold text-[#1f4d2d]">
              Blog
            </h2>
            <p className="mt-2 text-gray-600">
              Create and edit articles.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">🧴</div>
            <h2 className="mt-5 text-2xl font-bold text-[#1f4d2d]">
              Products
            </h2>
            <p className="mt-2 text-gray-600">
              Manage products.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">📞</div>
            <h2 className="mt-5 text-2xl font-bold text-[#1f4d2d]">
              Contact
            </h2>
            <p className="mt-2 text-gray-600">
              Phone, Email, Facebook, WhatsApp.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">🌍</div>
            <h2 className="mt-5 text-2xl font-bold text-[#1f4d2d]">
              Languages
            </h2>
            <p className="mt-2 text-gray-600">
              Edit translations.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">⚙️</div>
            <h2 className="mt-5 text-2xl font-bold text-[#1f4d2d]">
              Settings
            </h2>
            <p className="mt-2 text-gray-600">
              Website settings.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}