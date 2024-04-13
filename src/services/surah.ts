import { equran } from "@/api/axios";
import { ISurah } from "@/types/surah";

export const getSurah = async (): Promise<ISurah> => {
  return equran
    .get("/surat")
    .then((res) => res.data.data)
    .catch((err) => err);
};
