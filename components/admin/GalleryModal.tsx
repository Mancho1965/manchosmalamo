"use client";

import { useState } from "react";
import GalleryUpload from "./GalleryUpload";
import { createGalleryItem } from "@/lib/galleryService";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function GalleryModal({
  open,
  onClose,
}: Props) {
  const [file, setFile] = useState<File | null>(null);

  const [titleKa, setTitleKa] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [titleEl, setTitleEl] = useState("");

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handlePublish() {
    if (!file) {
      alert("Choose photo");
      return;
    }

    try {
      setLoading(true);

      await createGalleryItem({
        file,
        category: "general",
        title_ka: titleKa,
        title_en: titleEn,
        title_ru: titleRu,
        title_el: titleEl,
      });

      alert("Photo published!");

      onClose();

    } catch (err) {
      console.error(err);
      alert("Publish failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">

      <div className="w-full max-w-4xl rounded-3xl bg-white p-8 shadow-2xl">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-[#1f4d2d]">
            Add New Photo
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-red-600"
          >
            ×
          </button>

        </div>

        <div className="mt-8">

          <GalleryUpload
            onFileSelect={(file) => setFile(file)}
          />

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <input
            value={titleKa}
            onChange={(e) => setTitleKa(e.target.value)}
            placeholder="Title (Georgian)"
            className="rounded-xl border p-4"
          />

          <input
            value={titleEn}
            onChange={(e) => setTitleEn(e.target.value)}
            placeholder="Title (English)"
            className="rounded-xl border p-4"
          />

          <input
            value={titleRu}
            onChange={(e) => setTitleRu(e.target.value)}
            placeholder="Title (Russian)"
            className="rounded-xl border p-4"
          />

          <input
            value={titleEl}
            onChange={(e) => setTitleEl(e.target.value)}
            placeholder="Title (Greek)"
            className="rounded-xl border p-4"
          />

        </div>

        <div className="mt-6 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handlePublish}
            disabled={loading}
            className="rounded-xl bg-[#1f4d2d] px-6 py-3 font-semibold text-white"
          >
            {loading ? "Publishing..." : "Publish"}
          </button>

        </div>

      </div>

    </div>
  );
}