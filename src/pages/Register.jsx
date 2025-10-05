import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { supabase } from "../lib/supabaseClient";
import { useAuthStore } from "../store/useAuthStore";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Crear cuenta en Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    const user = data.user;

    // Insertar datos del usuario en la tabla 'users'
    if (user) {
      const { error: insertError } = await supabase.from("users").insert([
        {
          id: user.id,
          name,
          email,
          role: "admin", // Se asigna automáticamente como admin
        },
      ]);

      if (insertError) {
        console.error("Error al guardar el usuario:", insertError.message);
      }
    }

    if (!data.session) {
      setSuccess("Cuenta creada. Revisa tu correo para confirmar el registro.");
    } else {
      setUser(user);
      navigate("/admin/services");
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#4448E6] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#4448E6] mb-6">
          Crear cuenta
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Tu nombre"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ejemplo@correo.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            />
          </div>

          {/* Confirmar contraseña */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4448E6]"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <Button text="Registrarme" className="w-full cursor-pointer" />
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <a
            href="/login"
            className="text-[#4448E6] font-medium hover:underline"
          >
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
