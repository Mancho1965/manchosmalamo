import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8f6f1]">

      {/* Sidebar */}
      <aside className="w-72 bg-[#1f4d2d] text-white shadow-2xl">

        <div className="border-b border-white/10 p-8">
          <h1 className="text-3xl font-bold">
            MANCHO'S
          </h1>

          <p className="mt-2 text-sm text-white/70">
            Admin Panel
          </p>
        </div>

        <nav className="flex flex-col p-5">

          <Link
            href="/admin/dashboard"
            className="rounded-xl px-5 py-4 transition hover:bg-white/10"
          >
            🏠 Dashboard
          </Link>

          <Link
            href="/admin/gallery"
            className="mt-2 rounded-xl px-5 py-4 transition hover:bg-white/10"
          >
            📷 Gallery
          </Link>

          <Link
            href="/admin/blog"
            className="mt-2 rounded-xl px-5 py-4 transition hover:bg-white/10"
          >
            📰 Blog
          </Link>

          <Link
            href="/admin/products"
            className="mt-2 rounded-xl px-5 py-4 transition hover:bg-white/10"
          >
            🧴 Products
          </Link>

          <Link
            href="/admin/creator"
            className="mt-2 rounded-xl px-5 py-4 transition hover:bg-white/10"
          >
            👩 Creator
          </Link>

          <Link
            href="/admin/contact"
            className="mt-2 rounded-xl px-5 py-4 transition hover:bg-white/10"
          >
            📞 Contact
          </Link>

          <Link
            href="/admin/languages"
            className="mt-2 rounded-xl px-5 py-4 transition hover:bg-white/10"
          >
            🌍 Languages
          </Link>

          <Link
            href="/admin/settings"
            className="mt-2 rounded-xl px-5 py-4 transition hover:bg-white/10"
          >
            ⚙ Settings
          </Link>

        </nav>

        <div className="absolute bottom-0 w-72 border-t border-white/10 p-5">
          <button className="w-full rounded-xl bg-red-600 py-3 transition hover:bg-red-700">
            🚪 Logout
          </button>
        </div>

      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}