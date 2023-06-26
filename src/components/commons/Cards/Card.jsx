import { useNavigate } from "react-router-dom";

import CardItem from "../Cards/CardItem";

const Card = ({ data, numberCard, onClick }) => {
  const fases = [
    "Planificación",
    "Implementación y ejecución",
    "Seguimiento",
    "Mejora continua",
  ];
  const colorVariants = {
    Cumple: "text-[#7A975C]",
    "Cumple parcialmente": "text-[#153FD7]",
    "No cumple": "text-[#9C2F2F]",
    Pendiente: "text-[#F9B959]",
    "No aplica": "text-[#BDBFC0]",
  };

  const bgVariants = {
    Cumple: "bg-[#69984C]",
    "Cumple parcialmente": "bg-[#003FE0]",
    "No cumple": "bg-[#863D37]",
    Pendiente: "bg-[#F9B959]",
    "No aplica": "bg-[#BDBFC0]",
  };
  const colors = {
    Cumple: "verde",
    "Cumple parcialmente": "azul",
    "No cumple": "vino",
    Pendiente: "naranja",
    "No aplica": "gris",
  };

  const navigate = useNavigate();
  const handleCardClick = () => {
    onClick(data.step, data.state);
  };

  return (
    <div
      className={`border border-[#EAEAEA] rounded-lg  bg-[#FFFF] p-4 ${
        data.state === "No aplica" ? "opacity-50 cursor-not-allowed" : "hover:border-[#1F3FCF] hover:drop-shadow-lg"
      }`}
      onClick={() => handleCardClick(data.step, data.state)}
    >
      <div className="flex items-center flex-row py-2">
        <div>
          <div
            className={`flex justify-center ${
              bgVariants[data.state]
            } bg-opacity-10 rounded-full w-16 h-16`}
          >
            <img
              src={`/img/fase${data.stage}_${colors[data.state]}.svg`}
              width={25}
            />
          </div>
        </div>

        <div
          className={`px-2 flex flex-col  uppercase text-xs ${
            colorVariants[data.state]
          }`}
        >
          <span>Fase {data.stage}</span>
          <span>{fases[data.stage - 1]}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <span className="font-medium text-sm">Paso {data.step}</span>
        <span className="min-h-[4rem] font-medium text-sm opacity-50">
          {data.content}
        </span>
        <span
          className={`font-medium text-lg uppercase mt-2 ${
            colorVariants[data.state]
          }`}
        >
          {data.state}
        </span>
      </div>
      {/*   <div className="min-h-[5rem] px-5 flex items-center flex-col justify-center gap-1">
        <CardItem text={numberCard + 1} stepNumber={data.step} />
      </div> */}
    </div>
  );
};

export default Card;
