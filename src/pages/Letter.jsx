import Card from "../components/Card";
import Dialog from "../components/Dialog";
const Letter = () => {
  return (
    <div className=" flex flex-col gap-6 items-center justify-center w-full">
      <div className="mt-15">
        <Dialog
          title={"Felicidades Amorcito"}
          text={
            "Encontraste todas las palabras ocultas y asi lograste completar tu carta"
          }
        />
      </div>
      <Card title="Querida Mariana,">
        <p>
          Yo sé que me he tardado en hacer esta{" "}
          <span className="text-[#6B7A5E] font-semibold">pregunta</span>, y no
          es que no me acordara o que no quisiera hacerla, es más bien que
          estaba preparando esto para ti, que por cierto espero que te guste,
          jejeje.
        </p>

        <p>
          Desde que te conocí has desbloqueado una parte de mí que no sabía que
          tenía: ser una persona{" "}
          <span className="text-[#6B7A5E] font-semibold">romántica</span>, ser
          lindo contigo, aprender a escucharte y estar ahí en cada momento y
          cada etapa de tu{" "}
          <span className="text-[#6B7A5E] font-semibold">vida</span>, y la
          verdad es que me encanta ser así, y aún más recibir eso mismo de ti.
          Sentirme amado, escuchado y apoyado es lo mejor de la vida.
        </p>

        <p>
          Me siento muy{" "}
          <span className="text-[#6B7A5E] font-semibold">feliz</span> de que
          podamos compartir nuestras vidas, de que nos{" "}
          <span className="text-[#6B7A5E] font-semibold">amemos</span> y nos
          cuidemos <span className="text-[#6B7A5E] font-semibold">siempre</span>
          .
        </p>

        <p>
          Y bueno, se acerca{" "}
          <span className="text-[#6B7A5E] font-semibold">San Valentín</span>, el
          Día del Amor y la Amistad, y me puse a pensar que aunque todo el año
          nos amemos, es importante que ese día nos tomemos un pequeño momento
          para ser conscientes y pensar en lo hermoso que es el{" "}
          <span className="text-[#6B7A5E] font-semibold">amor</span>, en lo
          bello que es amar y ser amado, y que jamás, jamás dejemos de
          expresarlo. Por eso es que el día de hoy te digo: amorcito,{" "}
          <span className="text-[#6B7A5E] font-semibold">TE AMO</span>.
        </p>

        <p>Ya casi llegas a la pregunta, jejeje.</p>
      </Card>
    </div>
  );
};

export default Letter;
