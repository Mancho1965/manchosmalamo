"use client";

import { useEffect, useMemo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { getGallery } from "@/lib/getGallery";

import GalleryFilters from "./GalleryFilters";
import Lightbox from "./Lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Category =
  | "all"
  | "psoriasis"
  | "lymphedema"
  | "diabetic-wound"
  | "gangrene"
  | "burn"
  | "scabies"
  | "fungus"
  | "general";

export default function GallerySlider() {
  const { language } = useLanguage();
  const t = translations[language];

  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [accepted, setAccepted] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("all");
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getGallery();
        setGalleryItems(data || []);
      } catch (error) {
        console.error("GALLERY ERROR:", error);
      }
    }

    loadGallery();
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return galleryItems;

    return galleryItems.filter(
      (item) => item.category === selectedCategory
    );
  }, [galleryItems, selectedCategory]);

  function getTitle(item: any) {
    return item.title?.[language] || "";
  }

  function getDescription(item: any) {
    return item.description?.[language] || "";
  }

  if (!accepted) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-amber-300 bg-amber-50 p-12 text-center shadow-xl">
        <div className="text-6xl">⚠️</div>

        <h3 className="mt-6 text-4xl font-bold text-[#1f4d2d]">
          {t.warning.title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          {t.warning.text1}
          <br />
          <br />
          {t.warning.text2}
          <br />
          <br />
          {t.warning.text3}
        </p>

        <button
          onClick={() => setAccepted(true)}
          className="mt-10 rounded-xl bg-[#1f4d2d] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#173b24]"
        >
          {t.warning.button}
        </button>
      </div>
    );
  }

  return (
    <>
      <GalleryFilters
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={filteredItems.length > 1}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {filteredItems.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={getTitle(item)}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
                  <div className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f4d2d] opacity-0 transition duration-300 group-hover:opacity-100">
                    🔍 {t.warning.view}
                  </div>
                </div>

                <div className="absolute left-4 top-4 rounded-full bg-[#1f4d2d] px-4 py-2 text-sm font-semibold text-white">
                  {t.warning.real}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#1f4d2d]">
                  {getTitle(item)}
                </h3>

                <p className="mt-3 line-clamp-3 text-gray-600">
                  {getDescription(item)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        item={
          selectedIndex !== null
            ? filteredItems[selectedIndex]
            : null
        }
        language={language as "ka" | "en" | "ru" | "el"}
        onClose={() => setSelectedIndex(null)}
        onPrev={() =>
          setSelectedIndex((prev) => {
            if (prev === null) return null;
            return prev === 0
              ? filteredItems.length - 1
              : prev - 1;
          })
        }
        onNext={() =>
          setSelectedIndex((prev) => {
            if (prev === null) return null;
            return prev === filteredItems.length - 1
              ? 0
              : prev + 1;
          })
        }
      />
    </>
  );
}