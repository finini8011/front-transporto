import CardItem from "../Cards/CardItem";

const Card = ({ data, numberCard }) => {
  
  return (
    <div className="border border-[#5b9bd5] rounded-xl  bg-[#f8f9fa]">
      <div className="flex items-center flex-col py-2 uppercase text-xs font-semibold">
        <p className="text-blue-950 ">{data.title} </p>
      </div>
      <div className="min-h-[5rem] px-5 flex flex-col justify-center gap-1">
        <p>{data.content}</p>
      </div>
      <div className="min-h-[5rem] px-5 flex items-center flex-col justify-center gap-1">
        <CardItem text={numberCard + 1} stepNumber={data.step} />
      </div>
    </div>
  );
};

export default Card;

