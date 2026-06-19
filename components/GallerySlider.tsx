"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
];

export default function GallerySlider() {
  const [accepted, setAccepted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!accepted) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-amber-300 bg-amber-50 p-12 text-center shadow-xl">

        <div className="text-6xl">⚠️</div>

        <h3 className="mt-6 text-4xl font-bold text-[#1f4d2d]">
          ყურადღება
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          ქვემოთ წარმოდგენილია კანის დაავადებების
          რეალური ფოტოები.

          <br /><br />

          ზოგიერთი მათგანი შესაძლოა იყოს
          მძიმე სანახავი.

          <br /><br />

          ფოტოების ნახვა გაგრძელდება მხოლოდ
          თქვენი თანხმობის შემდეგ.
        </p>

        <button
          onClick={() => setAccepted(true)}
          className="mt-10 rounded-xl bg-[#1f4d2d] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#173b24]"
        >
          ფოტოების ჩვენება
        </button>

      </div>
    );
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">

                  <div className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f4d2d] opacity-0 transition duration-300 group-hover:opacity-100">
                    🔍 ნახვა
                  </div>

                </div>

                <div className="absolute left-4 top-4 rounded-full bg-[#1f4d2d] px-4 py-2 text-sm font-semibold text-white">
                  რეალური შედეგი
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 right-0 text-5xl text-white hover:text-gray-300"
            >
              ×
            </button>

            <Image
              src={selectedImage}
              alt="Gallery"
              width={1200}
              height={1500}
              className="max-h-[90vh] w-auto rounded-3xl shadow-2xl"
            />

          </div>
        </div>
      )}
    </>
  );
}