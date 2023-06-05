import { createRef, useState} from "react"
import { Link } from "react-router-dom"
import axiosClient from '../axios-client.js';
import { useStateContext } from "../contexts/ContextProvider.jsx";


export default function Signup() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();
    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        axiosClient.post('/signup', payload)
        .then(({data}) => {
            if(!data) {
                setErrors([["Email no autorizado para registrarse"]]);
            } else {
                setUser(data.user);
                setToken(data.token)
            }
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status == 422) {
                setErrors(response.data.errors);
            }
        })
    }

    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <img src="adminlte/dist/img/Grupo_1@2x.png" alt="Transporto" />
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Regístrese</p>
                        <form onSubmit={onSubmit}>
                            {errors && 
                                <div className="alert">
                                    {Object.keys(errors).map(key => (
                                        <p key={key}>{errors[key][0]}</p>
                                    ))}
                                </div>
                            }
                            <div className="input-group mb-3">
                                <input ref={nameRef} type="text" className="form-control" placeholder="Nombre completo" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input ref={emailRef} type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input ref={passwordRef} type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input ref={passwordConfirmationRef} type="password" className="form-control" placeholder="Confirme password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                            </div>
                            {/* /.col */}
                        </form>
                        <br />
                        <Link to="/login">Ya tengo credenciales de acceso</Link>
                    </div>
                    {/* /.form-box */}
                </div>
                {/* /.card */}
            </div>
        </div>
    )
}