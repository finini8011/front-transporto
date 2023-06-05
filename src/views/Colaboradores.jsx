import React, { useState, useEffect } from "react";
import axiosClient from "../axios-client";

export default function Colaboradores() {
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      $("#colaboradores").DataTable().destroy();
    }, 100);
    refreshCollaborators();
  }, []);
  useEffect(() => {
    $("#colaboradores").DataTable();
  }, [collaborators]);

  function refreshCollaborators() {
    axiosClient
      .get("/collaborators") // StepsController::class, 'getCollaborators'
      .then((res) => {
        setCollaborators(res.data.colaboradores);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">PLANIFICACIÓN - Paso #5 - Colaboradores</h1>
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
                  id="colaboradores"
                  className="table table-bordered table-hover"
                >
                  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
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
                    {collaborators &&
                      collaborators.map((project, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{project[2]}</td>
                          <td>{project[3]}</td>
                          <td>{project[4]}</td>
                          <td>{project[5]}</td>
                          <td>{project[6]}</td>
                          <td>{project[7]}</td>
                        </tr>
                      ))}
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
        </div>
      </div>
    </div>
  );
}
