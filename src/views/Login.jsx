import {Link} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {createRef, useState} from "react";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [errors, setErrors] = useState(null);

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token)
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          if(response.data.errors) {
            setErrors(response.data.errors)
          } else {
            console.log(response.data.message)
            setErrors({
              email: [response.data.message]
            })
          }
        }
      })
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
        <img src="adminlte/dist/img/logo.jpg" width={360} alt="Transporto" />
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingrese sus datos para entrar</p>
            {errors && 
              <div className="alert">
                {Object.keys(errors).map(key => (
                    <p className="alertMesagge" key={key}>{errors[key][0]}</p>
                ))}
              </div>
            }
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input ref={emailRef} type="email" className="form-control" placeholder="Email" required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input ref={passwordRef} type="password" className="form-control" placeholder="Password" required/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Recordar mis datos
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mb-1">
              <a href="#">Olvidé mi contraseña</a>
            </p>
            <p className="mb-0">
              <Link to="/signup">Registrarme</Link>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
      {/* /.login-box */}
    </div>
  )
}