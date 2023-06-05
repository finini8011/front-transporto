export default function Planificacion() {
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Planificación</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/inicio">Inicio</a>
                </li>
                <li className="breadcrumb-item active">Fases PESV</li>
                <li className="breadcrumb-item active">Planificación</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Módulos Plan Estratégico de Seguridad Vial
              </h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
              <div id="accordion">
                <div className="card card-light">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        Paso #1 - Líder de diseño e Implementación PESV
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea cargar otra acta para el líder de diseño e
                      implementación PESV haga clic en el botón.
                    </div>
                    <div className="card-footer">
                      <a
                        href="/actalideres2"
                        className="btn btn-primary btn-sm"
                      >
                        Reasignar Líder
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-light">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        Paso #2 - Comité de Seguridad Vial
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea cargar otra acta para el comité de seguridad vial
                      haga clic en el botón.
                    </div>
                    <div className="card-footer">
                      <a href="/actalideres" className="btn btn-primary btn-sm">
                        Reasignar Comité
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-light">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        Paso #3 - Política de Seguridad Vial de la Organización
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea cargar otra acta para la política de seguridad
                      vial haga clic en el botón.
                    </div>
                    <div className="card-footer">
                      <a href="/actalideres" className="btn btn-primary btn-sm">
                        Reasignar Política
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-light">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        Paso #4 - Liderazgo, compromiso y correspondencia del
                        nivel directivo
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea xxxxxxxx haga clic en el botón.
                    </div>
                    <div className="card-footer">
                      <a href="/actalideres" className="btn btn-primary btn-sm">
                        XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-light">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        Paso #5 - Diagnóstico
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea ver los datos cargados haga clic en el botón
                      correspondiente.
                    </div>
                    <div className="card-footer">
                      <a
                        href="/colaboradores"
                        className="btn btn-primary btn-sm"
                      >
                        Colaboradores
                      </a>
                      &nbsp;
                      <a href="/inicio" className="btn btn-primary btn-sm">
                        Contratistas
                      </a>
                      &nbsp;
                      <a href="/inicio" className="btn btn-primary btn-sm">
                        Rutas
                      </a>
                      &nbsp;
                      <a href="/inicio" className="btn btn-primary btn-sm">
                        Sedes
                      </a>
                      &nbsp;
                      <a href="/inicio" className="btn btn-primary btn-sm">
                        Vehículos
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-light">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseSix"
                      >
                        Paso #6 - Caracterización, evaluación y control de
                        riesgos
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea xxxxxxxxx haga clic en el botón.
                    </div>
                    <div className="card-footer">
                      <a href="/actalideres" className="btn btn-primary btn-sm">
                        XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-light">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        Paso #7 - Objetivos y metas del PESV
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea xxxxxxxxxxxx haga clic en el botón.
                    </div>
                    <div className="card-footer">
                      <a href="/actalideres" className="btn btn-primary btn-sm">
                        XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-light">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseEight"
                      >
                        Paso #8 - Programas de gestión de riesgos críticos y
                        factores de desempeño
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseEight"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea xxxxxxxx haga clic en el botón.
                    </div>
                    <div className="card-footer">
                      <a href="/actalideres" className="btn btn-primary btn-sm">
                        XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}
