import { supabase } from "./supabase";

export async function uploadGalleryImage(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("gallery")
    .upload(fileName, file);

  if (error) throw error;

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("gallery")
    .getPublicUrl(fileName);

  return publicUrl;
}