import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setService(data);
    };

    fetchService();
  }, [id]);

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Cargando servicio...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={service.image_url}
          alt={service.name}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#4448E6] mb-4">
            {service.name}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {service.long_description}
          </p>

          <p className="text-2xl font-semibold text-[#FFCC02] mb-8">
            ${service.price}
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-[#4448E6] text-white px-6 py-3 rounded-xl hover:bg-[#373ACD] transition-all">
              Comprar servicio
            </button>
            <Link
              to="/services"
              className="text-[#4448E6] hover:underline font-medium"
            >
              ← Volver a servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
