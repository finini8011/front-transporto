import { useEffect, useState } from "react";
import Select from 'react-select'

export default function Preparacion() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Información de la Empresa</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">Inicio</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Modifique los datos de la empresa</h3>
                </div>
                <form>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="nit">NIT</label>
                            <input
                              
                              type="text"
                              className=
                                "form-control "
                              
                              placeholder="Nit"
                              
                            />
                            
                          </div>
                        </div>

                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="nombreEmpresa">
                              Nombre y/o Razón Social
                            </label>
                            <input
                              type="text"
                              className=
                                "form-control " 
                              placeholder="Nombre y/o Razón Social"
                              
                            />
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="nit">Representante Legal</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Representante Legal"
                              
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="col-sm-12">
                          {/* select */}
                          <div className="form-group">
                            <label>Actividad Principal (CIIU)</label>
                            <Select
                              className={"is-invalid"}
                              placeholder={"Seleccione actividad principal"}
                              isClearable={true}
                              options={""}
                              required={true}
                              isDisabled={null}
                              isLoading={null}
                              
                            />
                            
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Actividad Secundaria (CIIU)</label>
                            <Select
                              placeholder={"Seleccione actividad secundaria"}
                              isClearable={true}
                              options={""}
                              isDisabled={null}
                              isLoading={null}
                              required={true}
                              
                            />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="vehiculosPropios">
                            Vehículos propios
                          </label>
                          <input
                            type="number"
                            className=
                              "form-control " 
                            
                            placeholder="0"
                            
                          />
                          
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="vehiculosContratados">
                            Veh. contratados o administrados
                          </label>
                          <input
                            type="number"
                            className=
                              "form-control " 
                            placeholder="0"
                            
                          />
                          
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="conductoresPropios">
                            Conductores propios
                          </label>
                          <input
                            type="number"
                            className=
                              "form-control " 
                            placeholder="0"
                            
                          />
                          
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="conductoresContratados">
                            Conductores contratados
                          </label>
                          <input
                            type="number"
                            className=
                              "form-control " 
                            placeholder="0"
                            
                          />
                          
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="direccion">Dirección</label>
                          <input
                            type="text"
                            className=
                              "form-control " 
                            placeholder="Dirección"
                            
                          />
                          
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="telefono1">Teléfono #1</label>
                          <input
                            type="text"
                            className=
                              "form-control " 
                            placeholder="Telefono principal"
                            
                          />
                          
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="telefono2">Teléfono #2</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Telefono secundario"
                            
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Departamento</label>
                          <Select
                            id={"departamento"}
                            placeholder={"Seleccione el departamento"}
                            isClearable={true}
                            options={""}
                            isDisabled={null}
                            isLoading={null}
                            
                            required={true}
                          />
                          
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Ciudad</label>
                          <Select
                            id={"ciudad"}
                            placeholder={"Seleccione una ciudad"}
                            isClearable={true}
                            options={""}
                            isDisabled={null}
                            value={""}
                            
                            required={true}
                          />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
