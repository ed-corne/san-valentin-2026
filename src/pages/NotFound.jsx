import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-100 px-6 text-center">
      {/* Número 404 */}
      <h1 className="text-7xl font-extrabold text-[#6B7A5E] mb-4">404</h1>

      {/* Mensaje */}
      <p className="text-lg text-stone-700 mb-6 font-mono">
        Ups… parece que te perdiste
      </p>

      {/* Botón */}
      <Link
        to="/"
        className="
          px-6 py-3
          rounded-full
          bg-[#6B7A5E]
          text-white
          font-semibold
          shadow-md
        "
      >
        Volver al inicio
      </Link>

      {/* Texto pequeño */}
      <span className="mt-6 text-sm text-stone-400 font-mono">
        Nada que ver aquí… pero gracias por pasar
      </span>
    </div>
  );
}
