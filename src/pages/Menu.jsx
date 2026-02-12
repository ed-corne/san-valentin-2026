import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "../components/Dialog";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { BsEnvelopeOpenHeartFill } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

const Menu = () => {
  const [unlocked, setUnlocked] = useState(0);

  // Cargar progreso
  useEffect(() => {
    const saved = localStorage.getItem("menu-progress");
    if (saved) setUnlocked(Number(saved));
  }, []);

  // Guardar progreso
  const unlockNext = (index) => {
    if (index === unlocked) {
      const next = index + 1;
      setUnlocked(next);
      localStorage.setItem("menu-progress", next);
    }
  };

  const buttons = [
    {
      text: " Juego",
      path: "/word-search",
      icon: <IoExtensionPuzzleSharp size={20} />,
    },
    {
      text: " Carta",
      path: "/letter",
      icon: <BsEnvelopeOpenHeartFill size={20} />,
    },
    {
      text: " Momentos",
      path: "/tap-to-tap",
      icon: <FaCameraRetro size={20} />,
    },
    { text: " Final", path: "/form", icon: <FaQuestion size={20} /> },
  ];

  return (
    <div className="flex  w-full flex-col items-center justify-center gap-8">
      <Dialog
        title="Hola Amorcito..."
        text="Tengo unos mini juegos para ti, completa uno para desbloquear el siguiente."
      />
      <div className="w-full max-w-md bg-[#fdfaf5] rounded-3xl p-8 shadow-lg flex flex-col gap-6">
        <div className="flex flex-col gap-4 mt-4">
          {buttons.map((btn, index) => {
            const isEnabled = index <= unlocked;

            return (
              <Link
                key={btn.text}
                to={isEnabled ? btn.path : "#"}
                onClick={() => unlockNext(index)}
                className={`
                  w-full py-4 rounded-2xl text-center text-lg font-medium
                  transition-all duration-300
                  ${
                    isEnabled
                      ? "bg-linear-to-r from-[#7c8b6f] to-[#9cab88] text-[#fdfaf5] shadow-md hover:shadow-xl hover:-translate-y-1"
                      : "bg-[#e4dccf] text-[#a89b8a] cursor-not-allowed pointer-events-none"
                  }
                `}
              >
                <div className="flex items-center gap-2 justify-center">
                  {btn.icon}
                  {btn.text}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progreso */}
        <div className="mt-6 flex justify-center gap-2">
          {buttons.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-8 rounded-full transition-all ${
                i < unlocked ? "bg-[#7c8b6f]" : "bg-[#d6c7b2]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
