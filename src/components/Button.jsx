import PropTypes from "prop-types";

/**
 * Botón reutilizable con degradado
 * @param {string} text - Texto del botón
 * @param {function} onClick - Acción al hacer clic
 * @param {string} className - Clases adicionales opcionales
 */
export default function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`
    bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]
    text-[#ffffff] font-semibold px-6 py-3 rounded-full
    shadow-md hover:opacity-90 cursor-pointer transition-all duration-200 w-auto
    ${className} 
  `}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
