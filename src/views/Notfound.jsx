import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function DefaultLayout() {
    const { user, token, setUser, setToken, steps, setSteps, baseUrl, isLoading, setIsLoading, refreshSteps } = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    const pathname = window.location.pathname

    const onLogout = async (ev) => {
        ev.preventDefault()

        await axiosClient.post('/logout')
        setUser({})
        setToken(null)
        location.href = '/login'
    }

    useEffect(() => {
        refreshSteps()

        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            }).catch(function (error) {
                onLogout()
            });


        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [])

    return (
        <div id="defaultLayout">
            <div className="loader-container" hidden={!isLoading}>
                <div className="spinner"></div>
            </div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="https://transporto.com.co/" className="brand-link">
                    <img src={baseUrl + `/adminlte/dist/img/miniLogo.png`} alt="Transporto Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Transporto</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={baseUrl + `/adminlte/dist/img/avatar5.png`} className="img-circle elevation-2" alt="" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">{user.name}</a>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                            <li className="nav-item">
                                <a href="/inicio" className={`nav-link ${pathname == '/inicio' ? "active" : ""}`}>
                                    <i className="nav-icon fa fa-map-marker" />
                                    <p>
                                        Inicio
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item menu-is-opening menu-open">
                                <a className="nav-link">
                                    <i className="nav-icon fa fa-th-large" />
                                    <p>
                                        Fases PESV
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/preparacion" className={`nav-link ${pathname == '/preparacion' ? "active" : ""}`}>
                                            <i className="nav-icon fas fa-building fa-xs" />
                                            <p className="small">Preparación</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/planificacion" className={`nav-link ${pathname == '/planificacion' ? "active" : ""}`}>
                                            <i className="nav-icon fa fa-vote-yea" />
                                            <p className="small">Planificación</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/implementacion" className={`nav-link ${pathname == '/implementacion' ? "active" : ""}`}>
                                            <i className="nav-icon fa fa-cogs" />
                                            <p className="small">Implementación</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/seguimiento" className={`nav-link ${pathname == '/seguimiento' ? "active" : ""}`}>
                                            <i className="nav-icon fa fa-eye" />
                                            <p className="small">Seguimiento</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/mejora" className={`nav-link ${pathname == '/mejora' ? "active" : ""}`}>
                                            <i className="nav-icon fa fa-check-square" />
                                            <p className="small">Mejora</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="/informes" className={`nav-link ${pathname == '/informes' ? "active" : ""}`}>
                                    <i className="nav-icon fa fa-file" />
                                    <p>
                                        Informes
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/calendario" className={`nav-link ${pathname == '/calendario' ? "active" : ""}`}>
                                    <i className="nav-icon fa fa-calendar" />
                                    <p>
                                        Calendario
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" onClick={onLogout} className="nav-link">Cerrar Sesión</a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}
                    <li className="nav-item">
                        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i className="fas fa-search" />
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-pencil-alt" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">Accesos directos frecuentes</span>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-bullseye mr-2" /> Inventarios
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-bullseye mr-2" /> Evaluación de Riesgo
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-bullseye mr-2" /> Accidentalidad
                            </a>
                            <div className="dropdown-divider" />
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                            <i className="fas fa-th-large" />
                        </a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <img src="404.gif" />
            </div>
            <footer className="main-footer">
                <strong>Copyright © 2023 <a href="https://transporto.com.co">Transporto</a>.</strong>
                Todos los derechos reservados.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 1.0
                </div>
            </footer>
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
                <div className="p-3">
                    <a href="./" className=""><i className="fas fa-truck" /> Capacitación</a>
                    <br /><br />
                    <a href="./" className=""><i className="fas fa-truck" /> Manual</a>
                    <br /><br />
                    <a href="./" className=""><i className="fas fa-truck" /> Documentación</a>
                </div>
            </aside>
            {/* /.control-sidebar */}
        </div>
    )
}