import { supabase } from "./supabaseClient";

// Obtener todos los servicios
export const getServices = async () => {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

// Crear un nuevo servicio
export const createService = async (service) => {
  const { data, error } = await supabase.from("services").insert([service]);
  if (error) throw error;
  return data;
};

// Actualizar un servicio
export const updateService = async (id, updatedService) => {
  const { data, error } = await supabase
    .from("services")
    .update(updatedService)
    .eq("id", id);
  if (error) throw error;
  return data;
};

// Eliminar un servicio
export const deleteService = async (id) => {
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw error;
};
