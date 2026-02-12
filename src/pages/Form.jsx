import React from "react";
import Dialog from "../components/Dialog";
const Form = () => {
  const sendToWhatsApp = (answer) => {
    const phone = "5213322805464"; // Numero con código país
    const message = `Mi respuesta es: ${answer} `;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className=" flex flex-col gap-6 items-center justify-center w-full">
      <Dialog
        title={"¿Te gustaria ser mi San Valentin?"}
        text={
          "Selecciona tu respuesta, piensalo muy bien mi amor, ya no se vale cambiar de opinion heee jajaja..."
        }
      />
      <div className="flex gap-6">
        <button
          onClick={() =>
            sendToWhatsApp("Sipi, me gustaria ser tu San Valentin")
          }
          className="px-15 py-3 w-full rounded-2xl bg-[#5b4636] text-white font-semibold
                     shadow-md "
        >
          Sipi
        </button>

        <button
          onClick={() => sendToWhatsApp("No, ya tengo alguien mas")}
          className="px-6 py-3 rounded-2xl bg-[#e8e2d8] text-stone-700 font-semibold
                     shadow-md "
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Form;
