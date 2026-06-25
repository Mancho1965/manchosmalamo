export default function GalleryPage() {
  return (
    <div>

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-[#1f4d2d]">
            Gallery
          </h1>

          <p className="mt-2 text-gray-600">
            Manage all gallery photos.
          </p>
        </div>

        <button className="rounded-xl bg-[#1f4d2d] px-6 py-3 font-semibold text-white transition hover:bg-[#173b24]">
          ➕ Add Photo
        </button>

      </div>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

        <div className="flex flex-wrap gap-4">

          <input
            type="text"
            placeholder="🔍 Search..."
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#1f4d2d]"
          />

          <select className="rounded-xl border border-gray-300 px-4 py-3">
            <option>All Categories</option>
            <option>Psoriasis</option>
            <option>Lymphedema</option>
            <option>Diabetic Wound</option>
            <option>Gangrene</option>
            <option>Burn</option>
            <option>Scabies</option>
            <option>Fungus</option>
          </select>

        </div>

        <div className="mt-12 rounded-2xl border-2 border-dashed border-gray-300 py-24 text-center">

          <div className="text-7xl">
            📷
          </div>

          <h2 className="mt-6 text-3xl font-bold text-[#1f4d2d]">
            No Photos Yet
          </h2>

          <p className="mt-3 text-gray-600">
            Click "Add Photo" to upload your first gallery image.
          </p>

        </div>

      </div>

    </div>
  );
}