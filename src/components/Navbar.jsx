import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuthStore();

  const isActive = (path) => location.pathname === path;

  // 🔹 Cerrar sesión y redirigir
  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#4448E6] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Service-Technologies
          </Link>

          {/* Menú desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-[#FFCC02]"
                  : "text-white hover:text-[#FFCC02]"
              }`}
            >
              Inicio
            </Link>

            <Link
              to="/services"
              className={`font-medium transition-colors duration-200 ${
                isActive("/services")
                  ? "text-[#FFCC02]"
                  : "text-white hover:text-[#FFCC02]"
              }`}
            >
              Servicios
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-[#FFCC02]"
                  : "text-white hover:text-[#FFCC02]"
              }`}
            >
              Contacto
            </Link>

            {/* Si está logueado */}
            {user ? (
              <>
                <Link
                  to="/admin/services"
                  className={`font-medium transition-colors duration-200 ${
                    isActive("/admin/services")
                      ? "text-[#FFCC02]"
                      : "text-white hover:text-[#FFCC02]"
                  }`}
                >
                  Panel
                </Link>

                {/* Mostrar nombre o correo */}
                <span className="text-white text-sm">
                  {user.user_metadata?.nombre || user.email}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-white text-[#4448E6] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-white text-[#4448E6] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200"
              >
                Iniciar sesión
              </Link>
            )}
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-white hover:text-[#FFCC02]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-[#4448E6] border-t border-indigo-300 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-[#FFCC02]"
                  : "text-white hover:text-[#FFCC02]"
              }`}
            >
              Inicio
            </Link>

            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className={`font-medium transition-colors duration-200 ${
                isActive("/services")
                  ? "text-[#FFCC02]"
                  : "text-white hover:text-[#FFCC02]"
              }`}
            >
              Servicios
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`font-medium transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-[#FFCC02]"
                  : "text-white hover:text-[#FFCC02]"
              }`}
            >
              Contacto
            </Link>

            {user ? (
              <>
                <Link
                  to="/admin/services"
                  onClick={() => setOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActive("/admin/services")
                      ? "text-[#FFCC02]"
                      : "text-white hover:text-[#FFCC02]"
                  }`}
                >
                  Panel
                </Link>

                <span className="text-white text-sm">
                  {user.user_metadata?.nombre || user.email}
                </span>

                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="bg-white text-[#4448E6] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="bg-white text-[#4448E6] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200"
              >
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
