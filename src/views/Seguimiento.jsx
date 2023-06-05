export default function Seguimiento() {
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Seguimiento</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/inicio">Inicio</a>
                </li>
                <li className="breadcrumb-item active">Fases PESV</li>
                <li className="breadcrumb-item active">Seguimiento</li>
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
                        Paso #20 - Definición de indicadores
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Si desea xxxxxxxx haga clic en el botón.
                    </div>
                    <div className="card-footer">
                      <a
                        href="/actalideres2"
                        className="btn btn-primary btn-sm"
                      >
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
                        href="#collapseTwo"
                      >
                        Paso #21 - Registro y análisis estadístico de accidentes de tránsito
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
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
                        href="#collapseThree"
                      >
                        Paso #22 - Auditoria Anual
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
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
