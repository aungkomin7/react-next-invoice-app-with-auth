import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAccountStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (newtoken) => set({ token: newtoken }),
      logout: () => set({ token: null }),
    }),
    {
      name: "account-storage", // key in localStorage
    }
  )
);
