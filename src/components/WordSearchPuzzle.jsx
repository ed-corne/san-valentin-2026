import React from "react";
import { useState, useEffect } from "react";

const WordSearchPuzzle = ({ words, letters }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [foundCells, setFoundCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);

  const startDrag = (row, col) => {
    setIsDragging(true);
    setSelectedCells([{ row, col }]);
  };

  const endDrag = () => setIsDragging(false);

  const isFound = (row, col) =>
    foundCells.some((c) => c.row === row && c.col === col);

  const isSelected = (row, col) =>
    selectedCells.some((c) => c.row === row && c.col === col);

  const getDirection = (cells) => {
    if (cells.length < 2) return null;
    const [a, b] = cells;
    return { rowStep: b.row - a.row, colStep: b.col - a.col };
  };

  const isValidNextCell = (row, col) => {
    if (selectedCells.length < 2) return true;
    const dir = getDirection(selectedCells);
    const last = selectedCells[selectedCells.length - 1];
    return row === last.row + dir.rowStep && col === last.col + dir.colStep;
  };

  const enterCell = (row, col) => {
    if (!isDragging) return;
    if (selectedCells.some((c) => c.row === row && c.col === col)) return;
    if (!isValidNextCell(row, col)) return;
    setSelectedCells((prev) => [...prev, { row, col }]);
  };

  const getSelectedWord = () =>
    selectedCells.map((c) => letters[c.row][c.col]).join("");

  const confirmSelection = () => {
    const word = getSelectedWord();
    if (words.includes(word) && !foundWords.includes(word)) {
      setFoundWords((prev) => [...prev, word]);
      setFoundCells((prev) => [...prev, ...selectedCells]);
    }
    setSelectedCells([]);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (!element) return;

    const row = element.getAttribute("data-row");
    const col = element.getAttribute("data-col");

    if (row !== null && col !== null) {
      enterCell(Number(row), Number(col));
    }
  };
  useEffect(() => {
    localStorage.setItem("found-words", JSON.stringify(foundWords));
  }, [foundWords]);
  return (
    <div className="w-full max-w-3xl bg-[#fdfaf5] rounded-3xl p-6 md:p-8 shadow-lg">
      {/* Palabras */}
      <div className="mb-6">
        <div className="flex flex-wrap justify-center gap-3">
          {words.map((word) => (
            <span
              key={word}
              className={`px-3 py-1 rounded-full text-sm font-semibold
                  ${
                    foundWords.includes(word)
                      ? "bg-[#7c8b6f] text-[#fdfaf5]"
                      : "bg-[#e7dfcf] text-[#5b4636]"
                  }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-12 rounded-2xl overflow-hidden border border-[#d6c7b2]">
          {letters.map((row, r) =>
            row.map((letter, c) => (
              <div
                key={`${r}-${c}`}
                data-row={r}
                data-col={c}
                onMouseDown={() => startDrag(r, c)}
                onMouseEnter={() => enterCell(r, c)}
                onMouseUp={endDrag}
                onTouchStart={() => startDrag(r, c)}
                onTouchMove={handleTouchMove}
                onTouchEnd={endDrag}
                className={`
                    w-8 h-8 md:w-12 md:h-12
                    flex items-center justify-center
                    font-bold text-lg select-none touch-none
                    transition-all
                    ${
                      isFound(r, c)
                        ? "bg-[#7c8b6f] text-[#fdfaf5]"
                        : isSelected(r, c)
                          ? "bg-[#9cab88] text-[#fdfaf5]"
                          : "bg-[#fdfaf5] text-[#5b4636] hover:bg-[#e7dfcf]"
                    }
                  `}
              >
                {letter}
              </div>
            )),
          )}
        </div>
      </div>

      {/* Botones */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={confirmSelection}
          className="px-6 py-2 rounded-xl font-medium
              bg-[#7c8b6f] text-[#fdfaf5]
              hover:bg-[#6b7a60] transition shadow"
        >
          Validar
        </button>

        <button
          onClick={() => setSelectedCells([])}
          className="px-6 py-2 rounded-xl font-medium
              bg-[#e7dfcf] text-[#5b4636]
              hover:bg-[#d6c7b2] transition shadow"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default WordSearchPuzzle;
