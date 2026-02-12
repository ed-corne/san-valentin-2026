import Dialog from "../components/Dialog";
import WordSearchPuzzle from "../components/WordSearchPuzzle";

const Game1 = () => {
  const soup = [
    ["P", "R", "E", "G", "U", "N", "T", "A", "L", "C", "H", "S"],
    ["B", "O", "O", "M", "A", "E", "T", "M", "A", "R", "O", "I"],
    ["C", "M", "R", "L", "S", "A", "N", "E", "T", "O", "V", "E"],
    ["A", "A", "E", "V", "F", "I", "D", "M", "A", "L", "E", "M"],
    ["M", "N", "I", "I", "R", "O", "M", "O", "R", "A", "N", "P"],
    ["O", "T", "D", "D", "A", "L", "A", "S", "I", "E", "M", "R"],
    ["R", "I", "A", "A", "D", "E", "T", "O", "R", "I", "A", "E"],
    ["A", "C", "S", "N", "I", "A", "L", "E", "N", "T", "E", "S"],
    ["R", "A", "M", "O", "V", "A", "M", "F", "E", "L", "I", "Z"],
    ["O", "S", "I", "E", "O", "W", "R", "I", "A", "M", "Q", "P"],
    ["M", "E", "V", "X", "Q", "M", "Z", "L", "V", "I", "I", "P"],
    ["A", "S", "A", "N", "V", "A", "L", "E", "N", "T", "I", "N"],
  ];

  const wordsToFind = [
    "PREGUNTA",
    "ROMANTICA",
    "VIDA",
    "FELIZ",
    "AMEMOS",
    "SIEMPRE",
    "SANVALENTIN",
    "AMOR",
    "TEAMO",
  ];

  return (
    <div className=" flex w-full flex-col items-center justify-center gap-4 mt-10">
      <Dialog
        title={"Encuentas las palabras"}
        text={
          "Estas palabras te ayudaran a desbloquear tu carta, Desliza tu dedo sobre las letras y preciona Validar cuando encuentres una."
        }
      />
      <WordSearchPuzzle words={wordsToFind} letters={soup} />
    </div>
  );
};

export default Game1;
