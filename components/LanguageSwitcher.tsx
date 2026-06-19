export default function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button className="font-semibold text-green-700">
        ქართული
      </button>

      <span className="text-gray-300">|</span>

      <button className="text-gray-500 hover:text-green-700">
        EN
      </button>

      <span className="text-gray-300">|</span>

      <button className="text-gray-500 hover:text-green-700">
        RU
      </button>
    </div>
  );
}