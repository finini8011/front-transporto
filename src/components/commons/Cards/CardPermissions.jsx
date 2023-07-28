import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../api/features/auth/authSlice";



const CardPermissions = ({ nivel, permmisionsUser  }) => {

  const user = useSelector(selectCurrentUser);

  return (
    <div className="bg-[#EEF2F6] p-4 text-[#0090FF] rounded-2xl font-medium text-center text-xl mt-16 w-2/5 m-auto">
      {nivel &&
        <p>
          A su empresa le corresponde realizar un PESV en nivel BÁSICO por lo tanto este paso no aplica.
        </p>
      }
      {permmisionsUser &&
        <p>
          No tiene permisos para realizar este paso.
        </p>
      }
    </div>
  );
};

export default CardPermissions;
