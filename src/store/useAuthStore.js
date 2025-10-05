import { create } from "zustand";
import { supabase } from "../lib/supabaseClient";

export const useAuthStore = create((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));
