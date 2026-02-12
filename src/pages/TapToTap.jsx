import { useState } from "react";
import { useNavigate } from "react-router-dom";

const moments = [
  {
    type: "text",
    content: "Hace un año y 5 meses que somos novios",
    description:
      "y desde entonces mi vida se ha llenado de felicidad. Cada momento a tu lado es especial...",
  },
  { type: "image", content: "src/assets/FotoIA.jpeg" },
  {
    type: "text",
    content: "¿Recuerdas nuestro primer San Valentín?",
    description:
      "fue el año pasado y también te hice una página web, y fuimos al GDL Luz, fue un día muy lindo...",
  },
  { type: "image", content: "src/assets/FotoIA6.png" },
  {
    type: "text",
    content: "El Día del Amor y la Amistad",
    description:
      "pero yo no quiero solo un día, quiero todo el año, toda la vida de amor, besos, momentos lindos y de abrazos...",
  },
  { type: "image", content: "src/assets/FotoIA4.png" },
  {
    type: "text",
    content: "Y la verdad es que no importa el lugar",
    description:
      "lo importante es estar juntos y querernos mucho, siempre, siempre y para toda la vida...",
  },

  { type: "image", content: "src/assets/FotoIA5.png" },
  { type: "text", content: "Te quiero mucho, amorcito", description: "" },

  { type: "image", content: "src/assets/FotoIA3.png" },
];

const TapToTap = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (index < moments.length - 1) {
      setIndex(index + 1);
    } else {
      navigate("/menu"); // siguiente reto
    }
  };

  const current = moments[index];

  return (
    <div className="w-full flex  justify-center">
      <div
        onClick={next}
        className=" max-w-md
        flex items-center justify-center
        bg-linear-to-br from-[#f5f1e8] via-[#e7dfcf] to-[#d6c7b2]
        cursor-pointer select-none w-full rounded-2xl   
      "
      >
        <div className=" px-6 text-center ">
          {current.type === "text" && (
            <div className="flex flex-col gap-3">
              <p className="text-2xl md:text-3xl font-medium text-[#5b4636] leading-relaxed animate-fade-in">
                {current.content}
              </p>
              <p className="text-sm text-[#6B7A5E] leading-relaxed text-center">
                {current.description}
              </p>
            </div>
          )}

          {current.type === "image" && (
            <img
              src={current.content}
              alt="momento"
              className="
              mx-auto max-h-[70vh] rounded-3xl
              shadow-lg animate-fade-in
            "
            />
          )}

          <p className="mt-8 text-sm text-[#7a6654] opacity-70">
            toca para continuar
          </p>
        </div>
      </div>
    </div>
  );
};

export default TapToTap;
