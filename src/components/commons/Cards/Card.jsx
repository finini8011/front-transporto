import CardItem from "../Cards/CardItem";

const Card = ({ value, numberCard }) => {

  const elementos = Array.from({ length: value }, (_, index) => (
    <CardItem text={`${numberCard + 1}.${index+1}`} key={index} />
  ));

  return (
    <div className="border border-[#5b9bd5] rounded-xl  bg-[#f8f9fa]">
      <div className="flex items-center flex-col py-2 uppercase text-xs font-semibold">
        <p className="text-blue-950 ">tarea #{numberCard + 1} </p>
      </div>
      <div className="min-h-[11rem] px-5 flex items-center flex-col justify-center gap-1">
        {value === 1 && <CardItem text={numberCard + 1} />}
        {value > 1 && elementos}
      </div>
    </div>
  );
};

export default Card;

