import { useLocation } from "react-router-dom";

const BreakCrumbs = ({ handleNavigate }) => {
  const location = useLocation();
  const pieceCrumbs = location.pathname.split("/");
  let currentLink = "";

  const transformCrub = (crumb) => {
    if (crumb === "home") {
      return "Inicio";
    } else if (crumb === "step") {
      if (
        pieceCrumbs[2] === "1" ||
        pieceCrumbs[2] === "2" ||
        pieceCrumbs[2] === "3" ||
        pieceCrumbs[2] === "4" ||
        pieceCrumbs[2] === "5" ||
        pieceCrumbs[2] === "6" ||
        pieceCrumbs[2] === "7" ||
        pieceCrumbs[2] === "8"
      ) {
        return "planificación";
      } else if (
        pieceCrumbs[2] === "9" ||
        pieceCrumbs[2] === "10" ||
        pieceCrumbs[2] === "11" ||
        pieceCrumbs[2] === "12" ||
        pieceCrumbs[2] === "13" ||
        pieceCrumbs[2] === "14" ||
        pieceCrumbs[2] === "15" ||
        pieceCrumbs[2] === "16" ||
        pieceCrumbs[2] === "17" ||
        pieceCrumbs[2] === "18" ||
        pieceCrumbs[2] === "19"
      ) {
        return "implementación";
      } else if (
        pieceCrumbs[2] === "20" ||
        pieceCrumbs[2] === "21" ||
        pieceCrumbs[2] === "22"
      ) {
        return "seguimiento";
      } else return "mejora";
    } else if (
      pieceCrumbs[1] === "step" &&
      Number.isInteger(parseInt(pieceCrumbs[2]))
    ) {
      return `paso ${crumb}`;
    } else if (crumb === "guide") {
      return "guia rápida";
    } else if (crumb === "users") {
      return "usuarios";
    } else if (crumb === "list-verification") {
      return "lista de chequeo";
    } else if (crumb === "calendar") {
      return "calendario";
    }
    else if (crumb === "planificacion") {
      return "planificación";
    }
    else if (crumb === "implementacion") {
      return "implementación";
    }
    else if (crumb === "update-company") {
      return "actualizar empresa";
    } 
    else if (crumb === "register-company") {
      return "registrar empresa";
    } else {
      return crumb;
    }
  };

  //no borrar lo comentado

  // const transformLink= (link) => {
  //   if(link === "/step"){
  //     if (
  //       pieceCrumbs[2] === "1" ||
  //       pieceCrumbs[2] === "2" ||
  //       pieceCrumbs[2] === "3" ||
  //       pieceCrumbs[2] === "4" ||
  //       pieceCrumbs[2] === "5" ||
  //       pieceCrumbs[2] === "6" ||
  //       pieceCrumbs[2] === "7" ||
  //       pieceCrumbs[2] === "8"
  //     ) {
  //       return "/planificacion";
  //     } else if (
  //       pieceCrumbs[2] === "9" ||
  //       pieceCrumbs[2] === "10" ||
  //       pieceCrumbs[2] === "11" ||
  //       pieceCrumbs[2] === "12" ||
  //       pieceCrumbs[2] === "13" ||
  //       pieceCrumbs[2] === "14" ||
  //       pieceCrumbs[2] === "15" ||
  //       pieceCrumbs[2] === "16" ||
  //       pieceCrumbs[2] === "17" ||
  //       pieceCrumbs[2] === "18" ||
  //       pieceCrumbs[2] === "19"
  //     ) {
  //       return "/implementacion";
  //     } else if (
  //       pieceCrumbs[2] === "20" ||
  //       pieceCrumbs[2] === "21" ||
  //       pieceCrumbs[2] === "22"
  //     ) {
  //       return "/seguimiento";
  //     } else return "/mejora";
  //   } else {
  //     return link
  //   }
  // }

  const ComponentButtons = () => {
    const path = location.pathname;
    let prevButton = "";
    let nextButton = "";
    let prevLink = "";
    let nextLink = "";
    if (path === "/home") {
      prevLink = "/guide";
      nextLink = "/step/1";
      prevButton = "Guía rápida";
      nextButton = "Paso 1";
    } else if (
      path === "/planificacion" ||
      path === "/implementacion" ||
      path === "/seguimiento" ||
      path === "/mejora"
    ) {
      prevLink = "/home";
      nextLink = "/step/1";
      prevButton = "Inicio";
      nextButton = "Paso 1";
    } else if (path === "/update-company") {
      prevLink = "/home";
      nextLink = "/guide";
      prevButton = "Inicio";
      nextButton = "Guía rápida";
    } else if (path === "/list-verification") {
      prevLink = "/home";
      nextLink = "/guide";
      prevButton = "Inicio";
      nextButton = "Guía rápida";
    } else if (path === "/step/1") {
      prevLink = "/home";
      nextLink = "/step/2";
      prevButton = "Inicio";
      nextButton = "paso 2";
    } else if (
      pieceCrumbs[1] === "step" &&
      pieceCrumbs[2] !== "1" &&
      pieceCrumbs[2] !== "24"
    ) {
      prevLink = `/step/${parseInt(pieceCrumbs[2]) - 1}`;
      nextLink = `/step/${parseInt(pieceCrumbs[2]) + 1}`;
      prevButton = `paso ${parseInt(pieceCrumbs[2]) - 1}`;
      nextButton = `paso ${parseInt(pieceCrumbs[2]) + 1} `;
    } else if (path === "/step/24") {
      prevLink = `/step/${parseInt(pieceCrumbs[2]) - 1}`;
      nextLink = "/list-verification";
      prevButton = `paso ${parseInt(pieceCrumbs[2]) - 1}`;
      nextButton = "lista de chequeo";
    } else if (path === "/calendar" || path === "/users" || path === "/informes") {
      prevLink = `/home`;
      nextLink = "/guide";
      prevButton = "Inicio";
      nextButton = "Guía rápida";
    }

    return (
      <div className="flex gap-2 uppercase text-sm items-center">
        <span className="color-fourth">◂</span> ir a
        <p
          className="cursor-pointer color-fourth hover:underline"
          onClick={() => handleNavigate(prevLink)}
        >
          {prevButton}
        </p>{" "}
        <p>|</p> ir a
        <p
          className="cursor-pointer color-fourth hover:underline"
          onClick={() => handleNavigate(nextLink)}
        >
          {nextButton}
        </p>
        <span className="color-fourth">▸ </span>
      </div>
    );
  };

  const crumbs = location.pathname
    .split("/")
    .filter((crumbs) => crumbs !== "")
    .map((crumb, index) => {
      currentLink = currentLink + `/${crumb}`;
      // const link = transformLink(currentLink)
      return (
        <div className={`flex gap-2 uppercase  `} key={crumb}>
          {index > 0 && <p>{">"}</p>}
          <p
            // className={`
            // hover:underline cursor-pointer hover:color-fourth
            // ${
            //   pieceCrumbs[pieceCrumbs.length - 1] == crumb && "color-fourth"
            // }`}
            className={`
            ${pieceCrumbs[pieceCrumbs.length - 1] == crumb && "color-fourth"}`}
            // onClick={() => handleNavigate(link)}
          >
            {transformCrub(crumb)}
          </p>
        </div>
      );
    });

  return (
    <div className=" flex mb-6 border border-fourth  px-4 bg-white justify-between">
      <div className="flex gap-2">
        -
        {location.pathname !== "/home" && (
          <div className="flex gap-2 uppercase">
            <p
            // className="hover:underline hover:color-fourth cursor-pointer"
            // onClick={() => handleNavigate("/home")}
            >
              Inicio
            </p>
            {">"}
          </div>
        )}
        {(pieceCrumbs[1] === "step" ||
          pieceCrumbs[1] === "planificacion" ||
          pieceCrumbs[1] === "implementacion" ||
          pieceCrumbs[1] === "seguimiento" ||
          pieceCrumbs[1] === "mejora") && (
          <div className="flex gap-2 uppercase">
            FASES PESV
            <p>{">"}</p>
          </div>
        )}
        {crumbs}
      </div>
      <ComponentButtons />
    </div>
  );
};

export default BreakCrumbs;
