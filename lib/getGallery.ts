import { supabase } from "./supabase";

export async function getGallery() {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;

  return (data || []).map((item) => ({
    id: item.id,

    image: item.image,

    category: item.category,

    title: {
      ka: item.title_ka || "",
      en: item.title_en || "",
      ru: item.title_ru || "",
      el: item.title_el || "",
    },

    description: {
      ka: item.description_ka || "",
      en: item.description_en || "",
      ru: item.description_ru || "",
      el: item.description_el || "",
    },

    before_image: item.before_image,
    after_image: item.after_image,
  }));
}