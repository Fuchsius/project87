import { create } from "zustand";

interface PublicStore {
  gridLayout: boolean;
  isShowMap: boolean;
  isPricePerDay: boolean;
  sortBy: string;
  selectedLocations: string[];
  themes: {
    title: string;
    slug: string;
    status: boolean;
  }[];

  setIsShowMap: (value: boolean) => void;
  setGridLayout: (value: boolean) => void;
  setIsPricePerDay: (value: boolean) => void;
  setSortBy: (value: string) => void;
  setSelectedLocations: (locations: string[]) => void;
}

export const usePublicStore = create<PublicStore>((set) => ({
  gridLayout: true,
  isShowMap: false,
  isPricePerDay: false,
  sortBy: "",
  selectedLocations: [],
  themes: [
    {
      title: "Classic Holidays",
      slug: "classic-holidays",
      status: false,
    },
    {
      title: "Family Holidays",
      slug: "family-holidays",
      status: false,
    },
    {
      title: "Nature & Wildlife Holidays",
      slug: "nature-and-wildlife-holidays",
      status: false,
    },
    {
      title: "Slow Holidays",
      slug: "slow-holidays",
      status: false,
    },
    {
      title: "Off The Beaten Track Holidays",
      slug: "off-the-beaten-track-holidays",
      status: false,
    },
  ],

  setGridLayout: (value: boolean) => set({ gridLayout: value }),
  setIsShowMap: (value: boolean) => set({ isShowMap: value }),
  setIsPricePerDay: (value: boolean) => set({ isPricePerDay: value }),
  setSortBy: (value: string) => set({ sortBy: value }),
  setSelectedLocations: (locations: string[]) => set({ selectedLocations: locations }),
  setThemes: (value: any) => set({ themes: value }),
}));
