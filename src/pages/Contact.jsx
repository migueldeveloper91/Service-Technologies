import { useState } from "react";
import Button from "../components/Button";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4448E6]  from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-[#4448E6] mb-6">
          Formulario de Contacto
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tucorreo@empresa.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej: +57 300 1234567"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            />
          </div>

          <div>
            <label
              htmlFor="asunto"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              placeholder="Motivo de contacto"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            />
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje aquí..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            ></textarea>
          </div>
          <Button text="Enviar mensaje" className="w-full" />

          {enviado && (
            <p className="text-center text-green-600 mt-4 font-medium">
              ✅ ¡Mensaje enviado correctamente!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
