import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import guia from "/img/guia.png";

const Guide = () => {
  return (
    <div className="flex flex-col gap-5 px-8 py-5">
      <section className="text-[#0090FF] text-2xl font-medium tracking-tight	mb-3 flex">
        <span>
          <FontAwesomeIcon
            size="xs"
            icon={faGreaterThan}
            style={{ color: "#008ffe" }}
          />
        </span>

        <span className="ml-2 uppercase">Guía Rápida</span>
      </section>
      <div>
        <p>
          Tenemos el gusto de presentarle el aplicativo{" "}
          <span className="color-primary">Transporto</span>
        </p>{" "}
        <p>
          Es una plataforma interactiva para la gestión del Plan Estratégico de
          Seguridad Vial, que le permitirá ejecutar todos los niveles
          establecidos por la norma. Ademas servirá de apoyo para sus procesos
          de mejora y calidad.
        </p>
        <p>
          {" "}
          A mano izquierda encontrara el menú principal que le permitirá
          explorar los módulos del PESV (24), generar los informes, configurar
          los usuarios y explorar todos los documentos cargados en la plataforma
          ademas de otras funciones
        </p>
      </div>
      <div>
        <p>
          
            Bajo el <span className="color-fourth">{" Menu > Módulos PESV"}</span>, vera un listado de los 24 pasos del Plan estratégico de seguridad vial, la etapa a la que corresponde y su estado actual de realización.
          
        </p>
        <p>
          <span className="block color-nineth">Verde: Finalizado</span>
          <span className="block color-tenth">Azul: En proceso</span>
          <span className="block color-eigth">Rojo: Pendiente</span>
          <span className="block color-eleventh">Amarillo: Revisión continua</span>
        </p>
      </div>
      <img className="w-[30rem] " src={guia} alt="guia" />
      <p>Los pasos que incluyen documentos de realización externa como los son las actas, puede cargarlos dentro de los campos establecidos en cada sección. Se ofrece un documento modelo para la redacción de los mismo, que sirva de guía para su uso.</p>
      <p>A mano izquierda encontrara el menú de ayuda que servirá de apoyo donde podrá consultar el funcionamiento de la plataforma y la documentación sobre las normas vigentes.   </p>
    </div>
  );
};

export default Guide;
