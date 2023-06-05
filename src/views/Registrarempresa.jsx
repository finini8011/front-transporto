import React, { useState } from "react";
import Select from 'react-select'
import axiosClient from "../axios-client";
import { useForm } from "react-hook-form";
import { useStateContext } from "../contexts/ContextProvider";

export default function Registrarempresa() {
    const { steps, setSteps } = useStateContext()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = payload => {
        if (!isValidNit) return false

        payload.actividadP = actividadPrincipal?.value;
        payload.actividadS = actividadSecundaria?.value;
        payload.departamento = selectedDepartament?.value;
        payload.ciudad = selectedCiudad?.value;

        axiosClient.post('/compania/create', payload)
            .then(({ data }) => {
                setSteps(data)
                location.href = 'inicio';
            });
    };

    const [ciiu, setCiiu] = useState(null)
    const [departamentos, setDepartamentos] = useState(null)
    const [ciudades, setCiudades] = useState(null)
    const [selectedCiudad, setSelectedCiudad] = useState({})
    const [selectedDepartament, setSelectedDepartament] = useState({})
    const [actividadPrincipal, setActividadPrincipal] = useState(null)
    const [actividadSecundaria, setActividadSecundaria] = useState(null)
    const [isValidNit, setIsValidNit] = useState(false)
    const [empresa, setEmpresa] = useState(null)

    const validarNit = async (e) => {
        const nit = e?.target?.value;
        if (nit.length > 3) {
            await axiosClient.get('/compania/validate/'+nit)
                .then(({ data }) => {
                    if(data) {
                        setIsValidNit(true)
                    } else {
                        setIsValidNit(false)
                    }
                })
        }
    }

    if (empresa == null) {
        axiosClient.get('/compania/show')
            .then(({ data }) => {
                if (data) location.href = 'inicio';
                setEmpresa(data);
            })
    }

    if (ciiu === null) {
        axiosClient.get('/ciiu')
            .then(({ data }) => {
                setCiiu(data)
            })
    }

    if (departamentos === null) {
        axiosClient.get('/departamentos')
            .then(({ data }) => {
                setDepartamentos(data)
            })
    }

    const refreshCiudades = (e) => {
        setSelectedDepartament(e)
        if (e) {
            const { value } = e;
            axiosClient.get('/ciudades/' + value)
                .then(({ data }) => {
                    setCiudades(data)
                })
        } else {
            setCiudades(null)
        }
        setSelectedCiudad(null)
    }

    return (
        <div>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Nueva Empresa</h1>
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
                                    <h3 className="card-title">Digite los datos de la empresa</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="nit">NIT</label>
                                                        <input onBlurCapture={(e) => validarNit(e)} type="text" className={'form-control ' + (errors.nit && 'is-invalid')} placeholder="Nit" {...register("nit", { required: true })} />
                                                        <small>{errors.nit && 'Este campo es requerido'}</small>
                                                        <small>{!isValidNit && 'Este campo debe ser unico'}</small>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="nombreEmpresa">Nombre y/o Razón Social</label>
                                                        <input type="text" className={'form-control ' + (errors.nombreEmpresa && 'is-invalid')} placeholder="Nombre y/o Razón Social" {...register("nombreEmpresa", { required: true })} />
                                                        <small>{errors.nombreEmpresa && 'Este campo es requerido'}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="nit">Representante Legal</label>
                                                        <input type="text" className="form-control" placeholder="Representante Legal" {...register("representante")} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <div className="col-sm-12">
                                                    {/* select */}
                                                    <div className="form-group">
                                                        <label>Actividad Principal (CIIU)</label>
                                                        <Select
                                                            className={errors.actividadP && 'is-invalid'}
                                                            placeholder={'Seleccione actividad principal'}
                                                            isClearable={true}
                                                            options={ciiu}
                                                            required={true}
                                                            isDisabled={ciiu === null}
                                                            isLoading={ciiu === null}
                                                            onChange={(e) => setActividadPrincipal(e ?? null)}
                                                        />
                                                        <small>{(actividadPrincipal === null) && 'Este campo es requerido'}</small>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label>Actividad Secundaria (CIIU)</label>
                                                        <Select
                                                            placeholder={'Seleccione actividad secundaria'}
                                                            isClearable={true}
                                                            options={ciiu}
                                                            isDisabled={ciiu === null}
                                                            isLoading={ciiu === null}
                                                            required={true}
                                                            onChange={(e) => setActividadSecundaria(e ?? null)}
                                                        />
                                                        <small>{(actividadSecundaria === null) && 'Este campo es requerido'}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-3 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="vehiculosPropios">Vehículos propios</label>
                                                    <input type="number" className={'form-control ' + (errors.vehiculosPropios && 'is-invalid')} placeholder="0" {...register("vehiculosPropios", { required: true })} />
                                                    <small>{errors.vehiculosPropios && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="vehiculosContratados">Veh. contratados o administrados</label>
                                                    <input type="number" className={'form-control ' + (errors.vehiculosContratados && 'is-invalid')} placeholder="0" {...register("vehiculosContratados", { required: true })} />
                                                    <small>{errors.vehiculosContratados && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="conductoresPropios">Conductores propios</label>
                                                    <input type="number" className={'form-control ' + (errors.conductoresPropios && 'is-invalid')} placeholder="0" {...register("conductoresPropios", { required: true })} />
                                                    <small>{errors.conductoresPropios && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="conductoresContratados">Conductores contratados</label>
                                                    <input type="number" className={'form-control ' + (errors.conductoresContratados && 'is-invalid')} placeholder="0" {...register("conductoresContratados", { required: true })} />
                                                    <small>{errors.conductoresContratados && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="direccion">Dirección</label>
                                                    <input type="text" className={'form-control ' + (errors.direccion && 'is-invalid')} placeholder="Dirección" {...register("direccion", { required: true })} />
                                                    <small>{errors.direccion && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="telefono1">Teléfono #1</label>
                                                    <input type="text" className={'form-control ' + (errors.telefono1 && 'is-invalid')} placeholder="Telefono principal" {...register("telefono1", { required: true })} />
                                                    <small>{errors.telefono1 && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="telefono2">Teléfono #2</label>
                                                    <input type="text" className="form-control" placeholder="Telefono secundario" {...register("telefono2")} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Departamento</label>
                                                    <Select
                                                        id={'departamento'}
                                                        placeholder={'Seleccione el departamento'}
                                                        isClearable={true}
                                                        options={departamentos}
                                                        isDisabled={departamentos === null}
                                                        isLoading={departamentos === null}
                                                        onChange={(e) => refreshCiudades(e)}
                                                        required={true}
                                                    />
                                                    <small>{(selectedDepartament === null) && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Ciudad</label>
                                                    <Select
                                                        id={'ciudad'}
                                                        placeholder={'Seleccione una ciudad'}
                                                        isClearable={true}
                                                        options={ciudades}
                                                        isDisabled={ciudades === null}
                                                        value={selectedCiudad}
                                                        onChange={(e) => setSelectedCiudad(e ?? null)}
                                                        required={true}
                                                    />
                                                    <small>{(selectedCiudad === null) && 'Este campo es requerido'}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary btn-sm">Registrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}