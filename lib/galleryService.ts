import { uploadGalleryImage } from "./galleryUpload";
import { saveGalleryItem } from "./galleryDatabase";

type GalleryData = {
  file: File;
  category: string;
  title_ka: string;
  title_en: string;
  title_ru: string;
  title_el: string;
};

export async function createGalleryItem(data: GalleryData) {
  const image = await uploadGalleryImage(data.file);

  await saveGalleryItem({
    image,
    category: data.category,
    title_ka: data.title_ka,
    title_en: data.title_en,
    title_ru: data.title_ru,
    title_el: data.title_el,
  });

  return image;
}