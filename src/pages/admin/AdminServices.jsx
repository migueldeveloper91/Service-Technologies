import { useEffect, useRef, useState } from "react";
import {
  createService,
  deleteService,
  getServices,
  updateService,
} from "../../lib/servicesApi";

export default function AdminServices() {
  const formRef = useRef(null);

  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    short_description: "",
    long_description: "",
    price: "",
    image_url: "",
  });
  const [editingService, setEditingService] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadServices = async () => {
    setLoading(true);
    try {
      const data = await getServices();
      setServices(data);
    } catch (error) {
      alert("Error al cargar servicios", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingService) {
        await updateService(editingService.id, formData);
      } else {
        await createService(formData);
      }
      await loadServices();
      setFormData({
        name: "",
        short_description: "",
        long_description: "",
        price: "",
        image_url: "",
      });
      setEditingService(null);
    } catch (error) {
      alert("Error al guardar el servicio", error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (service) => {
    // Desplazar suavemente hacia el formulario
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setEditingService(service);
    setFormData(service);
  };

  const handleDelete = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este servicio?")) {
      try {
        await deleteService(id);
        await loadServices();
      } catch (error) {
        alert("Error al eliminar servicio", error);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-40">
      <h1 className="text-3xl font-bold text-center text-[#4448E6] mb-8">
        Gestión de Servicios
      </h1>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 mb-10"
        ref={formRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Título"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          <input
            type="number"
            placeholder="Precio"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Descripción corta"
          value={formData.short_description}
          onChange={(e) =>
            setFormData({ ...formData, short_description: e.target.value })
          }
          required
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />

        <textarea
          placeholder="Descripción larga"
          value={formData.long_description}
          onChange={(e) =>
            setFormData({ ...formData, long_description: e.target.value })
          }
          required
          className="border border-gray-300 rounded-md px-3 py-2 w-full h-28"
        />

        <input
          type="text"
          placeholder="URL de la imagen"
          value={formData.image_url}
          onChange={(e) =>
            setFormData({ ...formData, image_url: e.target.value })
          }
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#4448E6] text-white px-6 py-2 rounded-md hover:bg-[#3538c7]"
        >
          {editingService ? "Actualizar servicio" : "Agregar servicio"}
        </button>
      </form>

      {/* Lista */}
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg shadow-sm p-4"
            >
              <img
                src={
                  service.image_url ||
                  "https://zeipfbopxparfrmpcnvy.supabase.co/storage/v1/object/sign/services/services_default.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOGVjZTAyZS1kNGY5LTRjNjItOWY2Yy1mNWJlNTlkMjI1NzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzZXJ2aWNlcy9zZXJ2aWNlc19kZWZhdWx0LnBuZyIsImlhdCI6MTc1OTY5NDQ5MiwiZXhwIjoxNzkxMjMwNDkyfQ.aWScU6yP5ihV1KJV5679aPilwahgWlP7eRuAmLLisVc"
                }
                alt={service.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {service.short_description}
              </p>
              <p className="text-gray-800 font-bold mb-2">
                ${Number(service.price).toFixed(2)}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(service)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
