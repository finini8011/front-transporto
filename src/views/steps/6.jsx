import React, { useState, useRef } from 'react'
import Base61  from './6.1_base';
import Editable62 from './6.2_editable';
import Editable63 from './6.3_editable';
import Swal from 'sweetalert2'
import { useStateContext } from '../../contexts/ContextProvider';

export default function Step6({ time_line }) {
    const { steps } = useStateContext()
    const [internalIsLoading, setInternalIsLoading] = useState(true);
    const [baseExportable, setBaseExportable] = useState({});
    const newRow = {
        id: 1,
        causa: '',
        evento: '',
        impacto: '',
        conductor: false,
        bici: false,
        moto: false,
        peaton: false,
        pasajero: false,
        probabilidad: '',
        nivel_impacto: '',
        valoracion: '-',
        nivel_riesgo: '-',
        estrategia: '-',
        accion: '',
        responsable: '-',
        evidencia: '',
    }

    const [eventosData, setEventosData] = useState([
        newRow
    ])

    const sendPayload = () => {
        console.log('test submit')
    }

    // const intEvt = setInterval(function () {
        // console.log(e)
        // Swal.fire({
        //   icon: 'success',
        //   toast: true,
        //   position: 'top-end',
        //   title: 'Informacion salvada!',
        //   showConfirmButton: false,
        //   timer: 2000,
        // })
    // }, 5000);

    return (
        <div>
            {/* <div className="loader-container" hidden={!internalIsLoading}>
                <div className="spinner"></div>
            </div> */}
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">{time_line?.step?.fase} - Paso #6</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">Inicio</li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <div className="card card-primary card-tabs">
                                    <div className="card-header p-0 pt-1">
                                        <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="custom-tabs-one-1-tab" data-toggle="pill" href="#custom-tabs-one-1" role="tab" aria-controls="custom-tabs-one-1" aria-selected="true">Paso #6.1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="custom-tabs-one-2-tab" data-toggle="pill" href="#custom-tabs-one-2" role="tab" aria-controls="custom-tabs-one-2" aria-selected="false">Paso #6.2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="custom-tabs-one-3-tab" data-toggle="pill" href="#custom-tabs-one-3" role="tab" aria-controls="custom-tabs-one-3" aria-selected="false">Paso #6.3</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content" id="custom-tabs-one-tabContent">
                                            <div className="tab-pane fade active show" id="custom-tabs-one-1" role="tabpanel" aria-labelledby="custom-tabs-one-1-tab" style={{ minHeight: "500px" }}>
                                                <Base61 steps={steps} baseExportable={baseExportable} setBaseExportable={setBaseExportable} />
                                            </div>
                                            <div className="tab-pane fade" id="custom-tabs-one-2" role="tabpanel" aria-labelledby="custom-tabs-one-2-tab" style={{ minHeight: "500px" }}>
                                                <Editable62 newRow={newRow} eventosData={eventosData} setEventosData={setEventosData} />
                                            </div>
                                            <div className="tab-pane fade" id="custom-tabs-one-3" role="tabpanel" aria-labelledby="custom-tabs-one-3-tab" style={{ minHeight: "500px" }}>
                                                <Editable63 sendPayload={sendPayload} eventosData={eventosData} setEventosData={setEventosData} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}