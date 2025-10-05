export default function Footer() {
  return (
    <footer className="bg-[#193B6C] text-white text-center py-6">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Service-Technologies</span>. Todos los
          derechos reservados.
        </p>
        <p className="mt-2 text-gray-200 text-sm">
          Innovación, eficiencia y soluciones digitales a tu medida.
        </p>
      </div>
    </footer>
  );
}
