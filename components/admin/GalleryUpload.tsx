"use client";

import { useRef, useState } from "react";

type Props = {
  onFileSelect: (file: File) => void;
};

export default function GalleryUpload({
  onFileSelect,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File) => {
    setPreview(URL.createObjectURL(file));
    onFileSelect(file);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          handleFile(file);
        }}
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 text-center hover:border-[#1f4d2d]"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="mx-auto max-h-72 rounded-xl"
          />
        ) : (
          <>
            <div className="text-6xl">📤</div>

            <h3 className="mt-5 text-2xl font-bold text-[#1f4d2d]">
              Upload Photo
            </h3>

            <p className="mt-2 text-gray-600">
              Click here to choose an image
            </p>
          </>
        )}
      </div>
    </div>
  );
}