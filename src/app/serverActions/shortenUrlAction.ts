import { UrlShortenerService } from "@/services/UrlShortenerService";
import { revalidatePath } from "next/cache";

export const shortenUrl = async (formData: FormData) => {
  "use server";
  const originalUrl = formData.get("originalUrl") as string;

  const shortenerService = new UrlShortenerService();
  const shortUrl = await shortenerService.shortUrl(originalUrl);
  revalidatePath("/urls");
};
