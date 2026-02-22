import { create } from "zustand";

interface ScreenScrolledStore {
  isScrolled: boolean;
  visible: boolean;

  setIsScrolled: (value: boolean) => void;
  setVisible: (value: boolean) => void;
}

export const useScreenScrolledStore = create<ScreenScrolledStore>((set) => ({
  isScrolled: false,
  visible: false,

  setIsScrolled: (value: boolean) => set({ isScrolled: value }),
  setVisible: (value: boolean) => set({ visible: value }),
}));
