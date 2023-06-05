import React, { useState, useEffect } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

export default function Usuarios() {

  const { steps, setSteps } = useStateContext();
  /* var ejemplo = [];
  if (steps[3]) {
    ejemplo = steps[3].map(
      (row) => row.id);
    console.log(ejemplo.indexOf(5))
    if (ejemplo.indexOf(5) === -1) {
      return <Navigate to="/inicio" />;
    }
  } */
  const asignarRoles = () => {
    axiosClient.get('/asignar_roles')
            .then(({ data }) => {
                console.log(data)
            }).catch(function (error) {
                console.log(error)
            });
  }
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Administración de Usuarios</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/inicio">Inicio</a>
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <table
                  id="usuarios"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre Completo</th>
                      <th scope="col">Identificación</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Fecha de Nacimiento</th>
                      <th scope="col">Género</th>
                      <th scope="col">Edad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre Completo</th>
                      <th scope="col">Identificación</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Fecha de Nacimiento</th>
                      <th scope="col">Género</th>
                      <th scope="col">Edad</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <button className="btn btn-primary" onClick={asignarRoles}>De Clic Aquí</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
