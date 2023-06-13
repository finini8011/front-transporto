import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  const { text, icon, type, onClick } = props;
  return (
    <div>
      <button
        type={type}
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} />
        <br />
        {text}
      </button>
    </div>
  );
};

export default Button;
