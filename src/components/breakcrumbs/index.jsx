import { Link, useLocation, useNavigate } from "react-router-dom";

const BreakCrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumbs) => crumbs !== "")
    .map((crumb, index) => {
      currentLink = +`/${crumb}`;
      return (
        <div className="flex gap-2" key={crumb}>
          {index > 0 && <p>{">"}</p>}
          <Link to={currentLink}>{crumb} </Link>
        </div>
      );
    });
  return (
    <div className="color-fourth flex mb-6 border border-fourth py-2 px-4 bg-white justify-between">
      <div className="flex gap-2">-{crumbs}</div>
      <div className="flex gap-2">
        {" "}
        <p className="cursor-pointer" onClick={()=>navigate(-1)}>
          Antes
        </p>{" "}
        <p>|</p>{" "}
        <p className="cursor-pointer" onClick={()=>navigate(+1)}>
          Despues
        </p>
      </div>
    </div>
  );
};

export default BreakCrumbs;
