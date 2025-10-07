import {
  Award,
  Eye,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react"; // Íconos
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  const valores = [
    {
      titulo: "Compromiso",
      desc: "Cumplimos lo que prometemos con responsabilidad y calidad.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      titulo: "Innovación",
      desc: "Buscamos nuevas formas de optimizar y proteger los entornos digitales.",
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      titulo: "Confianza",
      desc: "Actuamos con transparencia y respeto hacia nuestros clientes.",
      icon: <Handshake className="w-10 h-10 text-green-600" />,
      color: "from-green-400 to-green-600",
    },
    {
      titulo: "Eficiencia",
      desc: "Ofrecemos soluciones ágiles que ahorran tiempo y recursos.",
      icon: <Zap className="w-10 h-10 text-indigo-500" />,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      titulo: "Soporte Humano",
      desc: "Detrás de cada servicio hay personas dispuestas a ayudar.",
      icon: <Users className="w-10 h-10 text-pink-500" />,
      color: "from-pink-400 to-pink-600",
    },
    {
      titulo: "Excelencia",
      desc: "Buscamos la mejora continua en cada uno de nuestros procesos.",
      icon: <Award className="w-10 h-10 text-purple-600" />,
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Sección principal (Hero) */}
      <section className="relative flex flex-col items-center justify-center text-center py-12 mt-12 px-6 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        {/* Círculos decorativos animados */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-500 rounded-full mix-blend-overlay blur-3xl opacity-30 animate-ping"></div>

        {/* Contenido principal */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
            <span className="text-white">Service-Technologies</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Innovamos para mantener tu tecnología en marcha, brindando
            soluciones{" "}
            <strong className="text-white">seguras, ágiles y confiables</strong>{" "}
            que impulsan el crecimiento de tu empresa.
          </p>

          {/* Botón de acción */}

          <Button
            text="Explorar Servicios"
            onClick={() => navigate("/services")}
          />
        </div>

        {/* Ondas decorativas al fondo */}
        <svg
          className="absolute bottom-0 left-0 w-full text-blue-50 opacity-10"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,96L60,101.3C120,107,240,117,360,133.3C480,149,600,171,720,170.7C840,171,960,149,1080,122.7C1200,96,1320,64,1380,48L1440,32V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          ></path>
        </svg>
      </section>

      {/* Quiénes Somos */}
      <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10 -z-10"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imagen ilustrativa */}
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
            <img
              src="https://mikeelectronica.com/cdn/shop/articles/B-MK_02_2121x.progressive.jpg?v=1607535378?auto=format&fit=crop&w=900&q=80"
              alt="Equipo de trabajo tecnológico"
              className="rounded-3xl shadow-lg transform group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Texto descriptivo */}
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-3">
              ¿Quiénes Somos?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En{" "}
              <span className="font-semibold text-blue-700">
                Service-Technologies
              </span>
              , somos una empresa especializada en ofrecer{" "}
              <strong>soluciones tecnológicas innovadoras</strong> que impulsan
              la productividad y seguridad digital de nuestros clientes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro equipo está conformado por profesionales apasionados por
              la tecnología, enfocados en brindar{" "}
              <strong>
                servicios confiables, personalizados y de alta calidad
              </strong>
              . Creemos en el poder de la innovación y el trabajo en equipo para
              generar valor y confianza en cada proyecto.
            </p>

            {/* Iconos destacados */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3 group">
                <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition">
                  <ShieldCheck className="w-6 h-6 text-blue-700 group-hover:text-white transition" />
                </div>
                <span className="font-medium text-gray-800">
                  Calidad y Seguridad
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition">
                  <Lightbulb className="w-6 h-6 text-blue-700 group-hover:text-white transition" />
                </div>
                <span className="font-medium text-gray-800">
                  Innovación Constante
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition">
                  <Users className="w-6 h-6 text-blue-700 group-hover:text-white transition" />
                </div>
                <span className="font-medium text-gray-800">Equipo Humano</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition">
                  <Zap className="w-6 h-6 text-blue-700 group-hover:text-white transition" />
                </div>
                <span className="font-medium text-gray-800">
                  Soluciones Ágiles
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
          {/* Misión */}
          <div className="group bg-white p-8 rounded-3xl shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-3 group-hover:bg-blue-600 transition">
                <Target className="w-7 h-7 text-blue-700 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Brindar{" "}
              <strong>
                servicios tecnológicos eficientes, seguros y sostenibles
              </strong>{" "}
              que fortalezcan la infraestructura digital de empresas y personas,
              garantizando soporte continuo, alto rendimiento y confianza en
              cada solución implementada.
            </p>
          </div>

          {/* Visión */}
          <div className="group bg-white p-8 rounded-3xl shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-3 group-hover:bg-blue-600 transition">
                <Eye className="w-7 h-7 text-blue-700 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Ser reconocidos para el <strong>2030</strong> como una empresa
              líder en soluciones informáticas integrales en Colombia y
              Latinoamérica, destacándonos por la excelencia técnica, la
              innovación constante y el acompañamiento humano que brindamos en
              cada servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-12 tracking-tight">
          Nuestros Valores
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {valores.map((valor, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${valor.color} rounded-3xl p-[1px] shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center h-full transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-gray-100">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {valor.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  {valor.titulo}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {valor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
