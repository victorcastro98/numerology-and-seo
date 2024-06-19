import React from "react";
import Modal from "./components/modal";

const numerologyMap: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8,
};

const App: React.FC = () => {
  const [name, setName] = React.useState("");
  const [numerologyNumber, setNumerologyNumber] = React.useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const calculateNumerology = (name: string) => {
    const uppercaseName = name.toUpperCase();
    const sum = uppercaseName
      .split("")
      .filter((char) => numerologyMap[char])
      .reduce((acc, char) => acc + numerologyMap[char], 0);
    return reduceToSingleDigit(sum);
  };

  const reduceToSingleDigit = (num: number): number => {
    while (num > 9) {
      num = num
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);
    }
    return num;
  };
  const handleSubmit = () => {
    if (name !== "") {
      const number = calculateNumerology(name);
      setNumerologyNumber(number);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Descubra a numerologia da sua empresa
      </h1>
      <div className="flex flex-row w-full h-[50px] justify-center gap-2 my-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-2 border w-[600px] border-gray-300 rounded"
          placeholder="Digite o nome da empresa"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 h-full rounded hover:bg-blue-700"
        >
          Descobrir
        </button>
      </div>
      {numerologyNumber !== null && (
        <>
          <div className="mt-4 text-2xl">
            O número da sua empresa é: {numerologyNumber}
          </div>
          <div
           className="mt-4 text-2xl text-blue-500 cursor-pointer hover:text-blue-200"
           onClick={() => {setIsModalOpen(true)}}
           >
            O que isso quer dizer?
            </div>
        </>
      )}
      {isModalOpen ? <Modal setIsOpen={setIsModalOpen} chosedNumber={numerologyNumber as number}/> : "" }
    </div>
  );
};

export default App;
