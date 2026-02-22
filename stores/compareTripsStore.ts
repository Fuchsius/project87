import { create } from "zustand";

interface Trip {
  image: string | undefined;
  title: string | undefined;
  id: string;
}

interface CompareTripsStore {
  compareTrips: any[];
  addTrip: (trip: Trip) => void;
  removeTrip: (id: string) => void;
  clearTrips: () => void;
  hasTrip: (id: string) => boolean;
}

const localStorageKey = "compareTrips";

export const useCompareTripsStore = create<CompareTripsStore>((set, get) => ({
  compareTrips: [], // Default to an empty array initially

  addTrip: (trip) => {
    const { compareTrips } = get();

    const alreadyExists = compareTrips.some((t) => t.id === trip.id);
    if (!alreadyExists && compareTrips.length < 4) {
      const updatedTrips = [...compareTrips, trip];
      set({ compareTrips: updatedTrips });

      // Save to localStorage only on the client side
      if (typeof window !== "undefined") {
        localStorage.setItem(localStorageKey, JSON.stringify(updatedTrips));
      }
    }
  },

  removeTrip: (id) => {
    const { compareTrips } = get();
    const updatedTrips = compareTrips.filter((t) => t.id !== id);
    set({ compareTrips: updatedTrips });

    // Save to localStorage only on the client side
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKey, JSON.stringify(updatedTrips));
    }
  },

  hasTrip: (id: string) => {
    const { compareTrips } = get();
    return compareTrips.some((t) => t.id === id);
  },

  clearTrips: () => {
    set({ compareTrips: [] });

    // Clear localStorage only on the client side
    if (typeof window !== "undefined") {
      localStorage.removeItem(localStorageKey);
    }
  },
}));

// Sync localStorage on the client side
if (typeof window !== "undefined") {
  const savedTrips = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  useCompareTripsStore.setState({ compareTrips: savedTrips });
}
