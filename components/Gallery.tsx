import GallerySlider from "./GallerySlider";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#f8f6f1] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b58a35]">
            რეალური შედეგები
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#1f4d2d]">
            მანამდე / შემდეგ
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            ჩვენი მომხმარებლების რეალური შედეგები.
          </p>

        </div>

        <GallerySlider />

      </div>
    </section>
  );
}