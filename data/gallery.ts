export type GalleryCategory = "all" | "exterior" | "interior" | "videos";

export interface GalleryItem {
  id: number;
  title: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  featured?: boolean;
}

export const galleryCategories: GalleryCategory[] = [
  "all",
  "exterior",
  "interior",
  "videos",
];

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "exterior",
    type: "image",
    src: "/assets/company/exterior-image.avif",
    alt: "Mallouka Motors exterior view",
    category: "exterior",
  },
  {
    id: 2,
    title: "interior",
    type: "image",
    src: "/assets/company/inside-image.avif",
    alt: "Mallouka Motors interior view",
    category: "interior",
  },
  {
    id: 3,
    title: "office",
    type: "image",
    src: "/assets/company/office-door.avif",
    alt: "Mallouka Motors office entrance",
    category: "interior",
  },
  {
    id: 4,
    title: "outdoor",
    type: "image",
    src: "/assets/company/outdoor.avif",
    alt: "Mallouka Motors outdoor area",
    category: "exterior",
  },
  {
    id: 5,
    title: "video",
    type: "video",
    src: "/assets/company/interior-video.mov",
    alt: "Mallouka Motors interior video tour",
    category: "videos",
  },
  {
    id: 6,
    title: "enginesExterior",
    type: "image",
    src: "/assets/company/exterior_engines_store.avif",
    alt: "Mallouka Motors engines store exterior",
    category: "exterior",
    featured: true,
  },
  {
    id: 7,
    title: "enginesBoard",
    type: "image",
    src: "/assets/company/exterior_engines_store_board.avif",
    alt: "Mallouka Motors engines store signage board",
    category: "exterior",
  },
  {
    id: 8,
    title: "enginesCloseup",
    type: "image",
    src: "/assets/company/exterior_engines_store_closeup.avif",
    alt: "Mallouka Motors engines store close-up view",
    category: "exterior",
  },
  {
    id: 9,
    title: "enginesDoor",
    type: "image",
    src: "/assets/company/exterior_engines_store_door.avif",
    alt: "Mallouka Motors engines store entrance door",
    category: "exterior",
  },
  {
    id: 10,
    title: "enginesTitle",
    type: "image",
    src: "/assets/company/exterior_engines_store_title.avif",
    alt: "Mallouka Motors engines store title signage",
    category: "exterior",
  },
  {
    id: 11,
    title: "enginesWide",
    type: "image",
    src: "/assets/company/exterior_engines_store_wide.avif",
    alt: "Mallouka Motors engines store wide exterior view",
    category: "exterior",
  },
  {
    id: 12,
    title: "enginesInterior",
    type: "image",
    src: "/assets/company/interior_engines_store.avif",
    alt: "Mallouka Motors engines store interior",
    category: "interior",
    featured: true,
  },
  {
    id: 13,
    title: "electricCards",
    type: "image",
    src: "/assets/company/electric_cards_engines_store.avif",
    alt: "Mallouka Motors electrical cards display",
    category: "interior",
  },
  {
    id: 14,
    title: "video1",
    type: "video",
    src: "/assets/company/video1_engines_store.mp4",
    poster: "/assets/company/posters/video1_engines_store.poster.avif",
    alt: "Mallouka Motors engines store tour video 1",
    category: "videos",
  },
  {
    id: 15,
    title: "video2",
    type: "video",
    src: "/assets/company/video2_engines_store.mp4",
    poster: "/assets/company/posters/video2_engines_store.poster.avif",
    alt: "Mallouka Motors engines store tour video 2",
    category: "videos",
  },
  {
    id: 16,
    title: "video3",
    type: "video",
    src: "/assets/company/video3_engines_store.mp4",
    poster: "/assets/company/posters/video3_engines_store.poster.avif",
    alt: "Mallouka Motors engines store tour video 3",
    category: "videos",
  },
  {
    id: 17,
    title: "video4",
    type: "video",
    src: "/assets/company/video4_engines_store.mp4",
    poster: "/assets/company/posters/video4_engines_store.poster.avif",
    alt: "Mallouka Motors engines store tour video 4",
    category: "videos",
  },
];
