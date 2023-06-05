import { useEffect, useState, createRef } from "react";
import axiosClient from "../axios-client";

export default function Test() {
  const nombreRef = createRef();
  const apellidoRef = createRef();
  const [errors, setErrors] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
    };
    axiosClient
      .post("/test", payload)
      .then(({ data }) => {
        console.log(data);
        setErrors(data ? "Aceptado" : "Rechazado")
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            console.log(response.data.message);
            setErrors({
              email: [response.data.message],
            });
          }
        }
      });
  };
  return (
    <>
      <div className="card">
        <div className="card-body login-card-body">
          <form onSubmit={onSubmit}>
            <div className="row mb-2">
              <div className="col-sm-3">
                <input
                  ref={nombreRef}
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-3">
                <input
                  ref={apellidoRef}
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Guardar
                </button>
              </div>
            </div>
          </form>
          {errors &&
            <span>{errors}</span>
          }
        </div>
      </div>
    </>
  );
}
