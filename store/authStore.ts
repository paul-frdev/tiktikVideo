import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const authStore = (set: any) => ({
  userProfile: null,

  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
});

export const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);
