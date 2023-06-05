import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function DefaultLayout() {
  const {
    user,
    token,
    setUser,
    setToken,
    steps,
    setSteps,
    baseUrl,
    isLoading,
    setIsLoading,
    refreshSteps,
  } = useStateContext();
  var ejemplo = [];
  if (steps[3]) {
    ejemplo = steps[3].map(
      (row) => row.id);
    }
    
    console.log(ejemplo.indexOf(6));
  useEffect(() => {
    refreshSteps();

    axiosClient
      .get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(function (error) {
        onLogout();
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    if (!Highcharts.theme) {
      Highcharts.setOptions({
        chart: {
          backgroundColor: "black",
        },
        colors: ["#F62366", "#9DFF02", "#0CCDD6"],
        title: {
          style: {
            color: "silver",
          },
        },
        tooltip: {
          style: {
            color: "silver",
          },
        },
      });
    }
    //

    /**
     * In the chart render event, add icons on top of the circular shapes
     */
    function renderIcons() {
      // Move icon
      if (!this.series[0].icon) {
        this.series[0].icon = this.renderer
          .path(["M", -8, 0, "L", 8, 0, "M", 0, -8, "L", 8, 0, 0, 8])
          .attr({
            stroke: "#303030",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": 2,
            zIndex: 10,
          })
          .add(this.series[2].group);
      }
      this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 -
          this.series[0].points[0].shapeArgs.innerR -
          (this.series[0].points[0].shapeArgs.r -
            this.series[0].points[0].shapeArgs.innerR) /
            2
      );

      // Exercise icon
      if (!this.series[1].icon) {
        this.series[1].icon = this.renderer
          .path([
            "M",
            -8,
            0,
            "L",
            8,
            0,
            "M",
            0,
            -8,
            "L",
            8,
            0,
            0,
            8,
            "M",
            8,
            -8,
            "L",
            16,
            0,
            8,
            8,
          ])
          .attr({
            stroke: "#ffffff",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": 2,
            zIndex: 10,
          })
          .add(this.series[2].group);
      }
      this.series[1].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 -
          this.series[1].points[0].shapeArgs.innerR -
          (this.series[1].points[0].shapeArgs.r -
            this.series[1].points[0].shapeArgs.innerR) /
            2
      );

      // Stand icon
      if (!this.series[2].icon) {
        this.series[2].icon = this.renderer
          .path(["M", 0, 8, "L", 0, -8, "M", -8, 0, "L", 0, -8, 8, 0])
          .attr({
            stroke: "#303030",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": 2,
            zIndex: 10,
          })
          .add(this.series[2].group);
      }

      this.series[2].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 -
          this.series[2].points[0].shapeArgs.innerR -
          (this.series[2].points[0].shapeArgs.r -
            this.series[2].points[0].shapeArgs.innerR) /
            2
      );
    }

    Highcharts.chart("container", {
      chart: {
        type: "solidgauge",
        height: "100%",
        events: {
          render: renderIcons,
        },
      },

      title: {
        text: "Cumplimiento",
        style: {
          fontSize: "24px",
        },
      },

      tooltip: {
        borderWidth: 0,
        backgroundColor: "none",
        shadow: false,
        style: {
          fontSize: "16px",
        },
        valueSuffix: "%",
        pointFormat:
          '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
          return {
            x: (this.chart.chartWidth - labelWidth) / 2,
            y: this.chart.plotHeight / 2 + 15,
          };
        },
      },

      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
          {
            // Track for Move
            outerRadius: "112%",
            innerRadius: "88%",
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
              .setOpacity(0.3)
              .get(),
            borderWidth: 0,
          },
          {
            // Track for Exercise
            outerRadius: "87%",
            innerRadius: "63%",
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
              .setOpacity(0.3)
              .get(),
            borderWidth: 0,
          },
          {
            // Track for Stand
            outerRadius: "62%",
            innerRadius: "38%",
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
              .setOpacity(0.3)
              .get(),
            borderWidth: 0,
          },
        ],
      },

      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: [],
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: false,
          },
          linecap: "round",
          stickyTracking: false,
          rounded: true,
        },
      },
      credits: {
        enabled: false,
      },

      series: [
        {
          name: "Paso",
          data: [
            {
              color: Highcharts.getOptions().colors[0],
              radius: "112%",
              innerRadius: "88%",
              y: 80,
            },
          ],
        },
        {
          name: "Fase",
          data: [
            {
              color: Highcharts.getOptions().colors[1],
              radius: "87%",
              innerRadius: "63%",
              y: 65,
            },
          ],
        },
        {
          name: "PESV",
          data: [
            {
              color: Highcharts.getOptions().colors[2],
              radius: "62%",
              innerRadius: "38%",
              y: 50,
            },
          ],
        },
      ],
    });
  }, [isLoading]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const pathname = window.location.pathname;

  const onLogout = async (ev) => {
    ev.preventDefault();

    await axiosClient.post("/logout");
    setUser({});
    setToken(null);
    //location.href = "/login";
  };

  return (
    <div id="defaultLayout">
      <div className="loader-container" hidden={!isLoading}>
        <div id="arrowAnim">
          <div className="arrowSliding">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay1">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay2">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay3">
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="https://transporto.com.co/" className="brand-link">
          <img
            src={baseUrl + `/adminlte/dist/img/miniLogo.png`}
            alt="Transporto Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Transporto</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={baseUrl + `/adminlte/dist/img/avatar5.png`}
                className="img-circle elevation-2"
                alt=""
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {user.name}
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column nav-child-indent"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a
                  href="/inicio"
                  className={`nav-link ${
                    pathname == "/inicio" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon fa fa-map-marker" />
                  <p>Inicio</p>
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
                    <a
                      href="/preparacion"
                      className={`nav-link ${
                        pathname == "/preparacion" ? "active" : ""
                      }`}
                    >
                      <i className="nav-icon fas fa-building fa-xs" />
                      <p className="small">Preparación</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/planificacion"
                      className={`nav-link ${
                        pathname == "/planificacion" ? "active" : ""
                      }`}
                    >
                      <i className="nav-icon fa fa-vote-yea" />
                      <p className="small">Planificación</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/implementacion"
                      className={`nav-link ${
                        pathname == "/implementacion" ? "active" : ""
                      }`}
                    >
                      <i className="nav-icon fa fa-cogs" />
                      <p className="small">Implementación</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/seguimiento"
                      className={`nav-link ${
                        pathname == "/seguimiento" ? "active" : ""
                      }`}
                    >
                      <i className="nav-icon fa fa-eye" />
                      <p className="small">Seguimiento</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/mejora"
                      className={`nav-link ${
                        pathname == "/mejora" ? "active" : ""
                      }`}
                    >
                      <i className="nav-icon fa fa-check-square" />
                      <p className="small">Mejora</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href="/informes"
                  className={`nav-link ${
                    pathname == "/informes" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon fa fa-file" />
                  <p>Informes</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/calendario"
                  className={`nav-link ${
                    pathname == "/calendario" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon fa fa-calendar" />
                  <p>Calendario</p>
                </a>
              </li>
              { ejemplo.indexOf(5) !== -1  &&
                <li className="nav-item">
                  <a
                    href="/usuarios"
                    className={`nav-link ${
                      pathname == "/usuarios" ? "active" : ""
                    }`}
                  >
                    <i className="nav-icon fa fa-users" />
                    <p>Usuarios</p>
                  </a>
                </li>
              }
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
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" onClick={onLogout} className="nav-link">
              Cerrar Sesión
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a className="nav-link" href="/listaverificacion" role="button">
              <i className="fa fa-pencil-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
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
              <span className="dropdown-item dropdown-header">
                Accesos directos frecuentes
              </span>
              <div className="dropdown-divider" />
              <a className="dropdown-item">
                <i className="fa fa-bullseye mr-2" /> Inventarios
              </a>

              <div>
                <a href="/colaboradores" className="dropdown-item">
                  Colaboradores
                </a>
              </div>
              <div>
                <a href="#" className="dropdown-item">
                  Contratistas
                </a>
              </div>
              <div>
                <a href="#" className="dropdown-item">
                  Rutas
                </a>
              </div>
              <div>
                <a href="#" className="dropdown-item">
                  Sedes
                </a>
              </div>
              <div>
                <a href="#" className="dropdown-item">
                  Vehículos
                </a>
              </div>

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
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-controlsidebar-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        <Outlet />
      </div>
      <footer className="main-footer">
        <strong>
          Copyright © 2023 <a href="https://transporto.com.co">Transporto</a>.
        </strong>
        Todos los derechos reservados.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0
        </div>
      </footer>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}

        <div id="container" />

        <div className="p-3">
          <a href="./" className="">
            <i className="fas fa-truck" /> Capacitación
          </a>
          <br />
          <br />
          <a href="./" className="">
            <i className="fas fa-truck" /> Manual
          </a>
          <br />
          <br />
          <a href="./" className="">
            <i className="fas fa-truck" /> Documentación
          </a>
        </div>
      </aside>
      {/* /.control-sidebar */}
    </div>
  );
}
