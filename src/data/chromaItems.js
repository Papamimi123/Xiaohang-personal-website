import mePhoto from "@/assets/gym.jpg";
import mePhoto2 from "@/assets/chill.jpg";
import mePhoto3 from "@/assets/vibe.jpg";
import mePhoto4 from "@/assets/work.jpg";
import { getSiteCopy } from "@/data/siteCopy";

export const getChromaItems = (language = "en") => {
  const copy = getSiteCopy(language).chroma;

  return [
    {
      image: mePhoto4,
      title: copy.work.title,
      subtitle: copy.work.subtitle,
      handle: copy.work.handle,
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      path: "/working"
    },
    {
      image: mePhoto3,
      title: copy.vibe.title,
      subtitle: copy.vibe.subtitle,
      handle: copy.vibe.handle,
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      path: "/vibecode"
    },
    {
      image: mePhoto,
      title: copy.gym.title,
      subtitle: copy.gym.subtitle,
      handle: copy.gym.handle,
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      path: "/gym"
    },
    {
      image: mePhoto2,
      title: copy.chill.title,
      subtitle: copy.chill.subtitle,
      handle: copy.chill.handle,
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      path: "/chill"
    },
  ];
};

export const chromaItems = getChromaItems();
