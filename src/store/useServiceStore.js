import { create } from "zustand";
import { getServices } from "../lib/servicesApi";

export const useServiceStore = create((set) => ({
  services: [],
  loading: false,

  fetchServices: async () => {
    set({ loading: true });
    try {
      const data = await getServices();
      set({ services: data });
    } catch (error) {
      console.error("Error al cargar servicios:", error.message);
    } finally {
      set({ loading: false });
    }
  },
}));
