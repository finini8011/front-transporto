import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../api/features/auth/authSlice";
import { componentsListStep } from "../../constants/stepsList";
import CardPermissions from "../../components/commons/Cards/CardPermissions";

const StepsList = () => {
  const user = useSelector(selectCurrentUser);

  //Usamoes useparams de react-router para obtener el id
  const { id } = useParams();

  // Filtrar los componentes según el nivel de la compañía del usuario
  if (user.compania?.nivel === "Básico") {
    const filteredKeys = ["2", "11", "13", "18", "19", "21"];
    filteredKeys.forEach((key) => {
      componentsListStep[key - 1].component = (props) => (
        <CardPermissions nivel {...props} />
      );
    });
  }

  // Filtrar los componentes según el nivel de la compañía del usuario
  if (user.compania?.nivel === "Intermedio") {
    const filteredKeys = ["11", "21"];
    filteredKeys.forEach((key) => {
      componentsListStep[key - 1].component = (props) => (
        <CardPermissions nivel {...props} />
      );
    });
  }

  // Filtrar los componentes según los permisos del usuario
  if (user?.permissions?.length > 0) {
    componentsListStep.forEach((componentsListStep, index) => {
      const key = index + 1;
      if (!user.permissions.includes(key)) {
        componentsListStep.component = (props) => (
          <CardPermissions permmisionsUser {...props} />
        );
      }
    });
  }

  const StepSelected = componentsListStep[id - 1]?.component;

  if (!StepSelected) {
    return <Navigate to="/not-found" />;
  }

  return <StepSelected stepSelected={id} />;
};

export default StepsList;