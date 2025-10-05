import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center bg-[#4448E6] text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Transformamos tu negocio con tecnología
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl mb-8 text-gray-100">
        Innovación, eficiencia y soluciones digitales a tu medida.
      </p>

      {/* Botón con navegación */}
      <Button text="Comenzar proyecto" onClick={() => navigate("/services")} />
    </section>
  );
}
