import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase.from("services").select("*");
      if (!error) setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-[#4448E6] mb-10 mt-10">
        Nuestros Servicios
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={service.image_url}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#4448E6]">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {service.short_description}
              </p>

              <Link
                to={`/services/${service.id}`}
                className="mt-4 inline-block bg-[#4448E6] text-white px-4 py-2 rounded-lg hover:bg-[#373ACD] transition-all"
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
