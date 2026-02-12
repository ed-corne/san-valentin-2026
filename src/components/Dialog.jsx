import conejito from "../assets/tl.webp";

const Dialog = ({ title, text }) => {
  return (
    <div className="relative flex justify-center mt-16 ">
      {/* Conejito */}
      <img
        src={conejito}
        alt="Cozy rabbit"
        className="
          absolute
          -top-24
          w-16
          drop-shadow-md
          select-none
          pointer-events-none
        "
      />

      {/* Burbuja de diálogo */}
      <div
        className="
          relative
          bg-[#F4F1EC]
          border-2 border-[#B7C7A3]
          rounded-2xl
          px-6 py-5
          max-w-md
          w-full
          shadow-lg
          font-sans
        "
      >
        {/* Pico del diálogo */}
        <div
          className="
            absolute
            -top-3 left-1/2
            -translate-x-1/2
            w-6 h-6
            bg-[#F4F1EC]
            border-l-2 border-t-2 border-[#B7C7A3]
            rotate-45
          "
        />

        <h3 className="text-center text-2xl font-semibold text-[#5b4636]">
          {title}
        </h3>

        <p className="text-sm text-[#6B7A5E] leading-relaxed text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Dialog;
