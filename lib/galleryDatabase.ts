import { supabase } from "./supabase";

type GalleryData = {
  image: string;
  category: string;
  title_ka: string;
  title_en: string;
  title_ru: string;
  title_el: string;
};

export async function saveGalleryItem(data: GalleryData) {
  const { error } = await supabase
    .from("gallery")
    .insert([
      {
        image: data.image,
        category: data.category,
        title_ka: data.title_ka,
        title_en: data.title_en,
        title_ru: data.title_ru,
        title_el: data.title_el,
      },
    ]);

  if (error) throw error;
}