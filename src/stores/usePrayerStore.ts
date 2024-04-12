import { Position } from "@/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PrayerStore {
  position: Position;
  setPosition: (position: Position) => void;
}

const defaultPosition = {
  latitude: -7.546839,
  longitude: 112.226479,
};

export const usePrayerStore = create<PrayerStore>()(
  persist(
    (set) => ({
      position: defaultPosition as Position,
      setPosition: (position) => {
        localStorage.setItem("position", JSON.stringify(position));
        set({ position });
      },
    }),
    {
      name: "prayer-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
