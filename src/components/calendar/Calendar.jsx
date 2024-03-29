import React, { useState, useEffect } from 'react'
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '@mui/material/Modal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { ListTags } from '../../constants/ListTags';
import {
  useDeleteCalendarQuestionMutation,
  useEditCalendarQuestionMutation,
  useLazyGetDataCalendarQuery,
  useSaveCalendarQuestionMutation
} from '../../api/services/calendar/calendarApiSlice';
import { selectCurrentUser } from '../../api/features/auth/authSlice';
import moment from 'moment';
import "./Calendar.css";



const Calendar = ({ calendarSmall }) => {

  const user = useSelector(selectCurrentUser);

  //date current day
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  //states the funtions origin fullcalendar
  const [currentEvents, setCurrentEvents] = useState([]);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [selectInfoTemp, setSelectInfoTemp] = useState(null);

  //states inputs
  const [inputTitle, setInputTitle] = useState();
  const [inputDescription, setInputDescription] = useState();
  const [tags, setTags] = useState([]);
  const [inputHourEnd, setInputHourEnd] = useState();
  const [inputDateInit, setInputDateInit] = useState();
  const [inputHourInit, setInputHourInit] = useState();
  const [inputIdEvent, setInputIdEvent] = useState();
  const [inputActive, setInputActive] = useState();

  //edit states
  const [isEdit, setIsEdit] = useState(false);
  const [isEditEvent, setIsEditEvent] = useState(false);
  const [showCurrentEditEvent, setShowCurrentEditEvent] = useState({});

  //delet event
  const [isDeletEvent, setIsDeletEvent] = useState(false);

  //services calendar
  const [getCalendar] = useLazyGetDataCalendarQuery();
  const [saveCalendar] = useSaveCalendarQuestionMutation();
  const [editCalendar] = useEditCalendarQuestionMutation();
  const [deleteEvent] = useDeleteCalendarQuestionMutation();

  //modals funtions and states
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); setIsEdit(false) };

  // create
  const handleDateSelect = (selectInfo) => {
    setSelectInfoTemp(selectInfo)
    const endDateTime = moment(selectInfo.end);
    const endHourTemp = endDateTime.format('HH:mm');

    const initDateTime = moment(selectInfo.start);
    const initDateTemp = initDateTime.format('YYYY-MM-DD');
    const initHourTemp = initDateTime.format('HH:mm');

    setInputHourEnd(endHourTemp);
    setInputHourInit(initHourTemp);
    setInputDateInit(initDateTemp);

    if (selectInfo.startStr >= formattedDate) {
      handleOpen();
    }
  }

  // view event
  const handleEventClick = (info) => {
    handleOpen();
    setIsEdit(true);
    setShowCurrentEditEvent(info.event);
    setInputIdEvent(info.event?.id);
    setInputActive(info.event?.extendedProps.active);
    setInputTitle(info.event?.title);
    setInputDescription(info.event?.extendedProps.description);
    setInputDateInit(info.event?._instance.range.start.toISOString().replace(/T.*$/, ''));
    setInputHourInit(info.event?._instance.range.start.toISOString().split("T")[1].replace(/.000Z*$/, ''));
    setInputHourEnd(info.event?._instance.range.end.toISOString().split("T")[1].replace(/.000Z*$/, ''));
    setTags(info.event?.extendedProps.tag);
  };

  // event change detector
  const handleEvents = (events) => {
    // se dispara siempre que cambian los eventos en el calendario
    // llamaado al api para get
  }

  // render event
  const renderEventContent = (eventInfo) => {
    return (
      <>
        <p className='redersText'>{eventInfo.event.title}</p>
      </>
    )
  }

  //funtion tags
  const handleClickTags = (subStep) => {
    setTags((prevArray) => [...prevArray, subStep]);
  }
  //funtion delet tag the list
  const handleClickTagsDelet = (subStep) => {
    setTags((prevArray) => prevArray.filter((item) => item !== subStep));
  }
  // save event 
  const saveEvent = async () => {
    //prepara calendario
    let calendarApi = selectInfoTemp?.view.calendar
    calendarApi?.unselect() // clear date selection
    // composicion del objeto evento
    const newEvent = {
      title: inputTitle,
      description: inputDescription,
      tag: tags,
      start: `${inputDateInit}T${inputHourInit}`,
      end: `${inputDateInit}T${inputHourEnd}`,
      allDay: (inputHourInit && inputHourEnd) ? false : true,
      active: inputActive,
    };
    // post del evento
    try {
      const payload = {
        titulo: newEvent.title,
        etiqueta: newEvent.tag,
        fecha_final: newEvent.end,
        descripcion: newEvent.description,
        fecha_inicial: newEvent.start,
        dia_entero: newEvent.allDay,
        activo: newEvent.active,
      };
      await saveCalendar({ payload })
      toast.success("Evento creado correctamente");
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
    // seteo del estado
    setCurrentEvents([...currentEvents, newEvent]);
    setInputDescription("");
    setInputTitle("");
    setInputHourEnd("");
    setInputDateInit("");
    setInputHourInit("");
    setTags([]);

    // seteo en el calendario
    calendarApi.addEvent(newEvent);
  }

  // edit event
  const editSaveEvent = async () => {
    //prepara calendario
    let calendarApi = selectInfoTemp?.view.calendar
    calendarApi?.unselect() // clear date selection
    // composicion del objeto evento
    const newEvent = {
      id: inputIdEvent,
      title: inputTitle,
      description: inputDescription,
      tag: tags,
      start: `${inputDateInit}T${inputHourInit}`,
      end: `${inputDateInit}T${inputHourEnd}`,
      allDay: (inputHourInit && inputHourEnd) ? false : true,
      active: inputActive,
    };
    // post del evento
    try {
      const payload = {
        id: inputIdEvent,
        titulo: newEvent.title,
        etiqueta: newEvent.tag,
        fecha_final: newEvent.end,
        descripcion: newEvent.description,
        fecha_inicial: newEvent.start,
        dia_entero: newEvent.allDay,
        activo: newEvent.active,
      };
      await editCalendar({ payload })
      toast.success("Evento editado correctamente");
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
    // seteo del estado
    setCurrentEvents([...currentEvents, newEvent]);
    setInputDescription("");
    setInputTitle("");
    setInputHourEnd("");
    setInputDateInit("");
    setInputHourInit("");
    setInputIdEvent();
    setTags([]);
    // seteo en el calendario
    calendarApi.addEvent(newEvent);
  }

  //delete event
  const deleteSaveEvent = async () => {
    //prepara calendario
    let calendarApi = selectInfoTemp?.view.calendar
    calendarApi?.unselect() // clear date selection
    // composicion del objeto evento
    const newEvent = {
      id: inputIdEvent,
    };
    // post del evento
    try {
      const payload = {
        id: inputIdEvent,
      };
      await deleteEvent({ payload })
      toast.success("Evento eliminado correctamente");
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
    // seteo del estado
    setCurrentEvents([...currentEvents, newEvent]);
    setInputDescription("");
    setInputTitle("");
    setInputHourEnd("");
    setInputDateInit("");
    setInputHourInit("");
    setInputIdEvent();
    setTags([]);
    // seteo en el calendario
    calendarApi.addEvent(newEvent);
  }

  //function clean States 
  const cleanStates = () => {
    setInputIdEvent();
    setInputTitle();
    setInputDescription();
    setInputDateInit();
    setInputHourInit();
    setInputHourEnd;
    setTags([]);
  }

  //data get start
  useEffect(() => {
    const getDataCalendar = async () => {
      const { data, isLoading: loading } = await getCalendar();
      const allEventsNew = Object.values(data);
      const allEventsKeys = Object.keys(data);
      const allEventsNewArray = allEventsNew.map((arreglo, index) => {
        if (Array.isArray(arreglo)) {
          const newArray = arreglo.map((eventData) => {
            const eventDataTemp = { ...eventData, owner: allEventsKeys[index] };
            return eventDataTemp;
          });
          return newArray;
        } else {
          return [];
        }
      });
      const allEvents = allEventsNewArray.flat().filter(elemento => elemento !== null).filter(elemento => elemento.activo !== false);
      const allCurrentEventsTemp = allEvents.map((eventData, index) => {
        return {
          id: eventData.id,
          title: eventData.titulo || "Sin Titulo",
          description: eventData.descripcion,
          tag: eventData.etiqueta,
          start: eventData.fecha_inicial || eventData.hora_inicial,
          end: eventData.fecha_final || eventData.hora_final,
          allDay: eventData.dia_entero || false,
          active: eventData.activo || true,
          owner: eventData.owner
        }
      });
      setCurrentEvents(allCurrentEventsTemp);
    }
    getDataCalendar();
    /* 
         if (currentEvents.length === 0) {
          getDataCalendar();
        }  */

  }, [])



  return (

    <div className={calendarSmall ? 'CalendarSmall' : 'CalendarBig'}>
      <div className={calendarSmall ? 'CalendarSmall' : 'CalendarBig'}>
        <FullCalendar
          locale={esLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: calendarSmall ? '' : 'prev,next,today',
            center: 'title',
            right: calendarSmall ? '' : 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          events={currentEvents}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          onClick: () => { } // Función vacía para bloquear el clic fuera del modal
        }}
      >
        <div className='bg-modal'>
          {isDeletEvent ? (
            <div className='delete-container'>
              <p className='text-xl text-blue-500 mb-2'>¿Esta Seguro que desea eliminar el evento?</p>
              <div className='buttonfooter-container'>
                <button className='buttonfooter' onClick={() => {
                  deleteSaveEvent();
                  setIsDeletEvent(false);
                  setTimeout(() => {
                    handleClose();
                  }, 500);
                }} >Si</button>
                <button className='buttonfooter'
                  onClick={() => {
                    setIsDeletEvent(false);
                  }}>
                  No
                </button>
              </div>
            </div>
          ) : (
            <>
              {isEdit ?
                (
                  isEditEvent ? (
                    <>
                      <p className='text-xl text-blue-500 mb-2'>Editando evento</p>
                      <div className='modal-colum'>
                        <div className='w-2/4'>
                          <p className='textModal'>Titulo</p>
                          <input
                            type='text'
                            name="titulo"
                            className='w-11/12 rounded-md border-zinc-800'
                            placeholder='titulo'
                            value={inputTitle}
                            onChange={(e) => { setInputTitle(e.target.value) }}
                            required
                          />
                        </div>
                        <div className='w-2/4'>
                          <div>
                            <p className='textModal'>Fecha</p>
                            <input
                              type='date'
                              className='w-11/12 rounded-md border-zinc-800'
                              placeholder='fecha'
                              value={inputDateInit}
                              onChange={(e) => { setInputDateInit(e.target.value) }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='modal-colum'>
                        <div className='w-2/4'>
                          <p className='textModal'>Hora inicial</p>
                          <input
                            type='time'
                            className='w-11/12 rounded-md border-zinc-800'
                            placeholder='hora Inicial'
                            value={inputHourInit}
                            onChange={(e) => { setInputHourInit(e.target.value) }}
                          />
                        </div>
                        <div className='w-2/4'>
                          <p className='textModal'>Hora final</p>
                          <input
                            type='time'
                            className='w-11/12 rounded-md border-zinc-800'
                            placeholder='hora final'
                            value={inputHourEnd}
                            onChange={(e) => { setInputHourEnd(e.target.value) }}
                          />
                        </div>
                      </div>
                      <div className='w-full'>
                        <p className='textModal'>Descripción</p>
                        <textarea
                          placeholder='descripción'
                          className='w-full rounded-md border-zinc-800'
                          value={inputDescription}
                          rows="2"
                          onChange={(e) => { setInputDescription(e.target.value) }}
                        />
                      </div>
                      <p className='textModal'>Etiquetas</p>
                      <div className='tags shadow-2xl'>
                        {ListTags.map((item, index) => (
                          item.SubStep.map((subStep, subIndex) => (
                            <button
                              className='buttonTags mb-2'
                              key={subIndex}
                              onClick={() => handleClickTags(subStep)}>{subStep}</button>
                          ))
                        ))}
                      </div>
                      <div className='mt-3'>
                        {tags.map((subStep, subIndex) => (
                          <button
                            className='buttonTags'
                            key={subIndex}
                            onClick={() => handleClickTagsDelet(subStep)}>{subStep} X</button>
                        ))}
                      </div>
                      <div className='buttonfooter-container'>
                        <button className='buttonfooter' onClick={() => {
                          editSaveEvent();
                          setIsEditEvent(false);
                          setTimeout(() => {
                            handleClose();
                          }, 500);
                        }} >Guardar</button>
                        <button className='buttonfooter'
                          onClick={() => {
                            setIsEditEvent(false);
                          }}>
                          Cancelar
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {showCurrentEditEvent?.extendedProps.owner === "Festivos" ? (
                        <>
                          <p className='redersTextListModal'>Dia Festivo</p>
                          <p className='redersTextListModal'>Titulo</p>
                          <span>{showCurrentEditEvent?.title}</span>
                          <p className='redersTextListModal'> Fecha</p>
                          <span>{showCurrentEditEvent?._instance.range.start.toISOString().replace(/T.*$/, '')}</span>
                          <p className='redersTextListModal'>Hora</p>
                          <span>Todo el dia</span>
                        </>
                      ) : (
                        <>

                          {!calendarSmall ?
                            (
                              showCurrentEditEvent?.extendedProps.owner === user.name &&
                              <>
                                <button
                                  className='float-right border-2 border-blue-300 rounded-lg w-6 h-6 '
                                  key={"edit"}
                                  onClick={() => setIsEditEvent(true)}>
                                  <FontAwesomeIcon icon={faPencil} className=" w-3 h-3 block  m-auto " />
                                </button>
                                <button
                                  className='float-right border-2 border-blue-300 rounded-lg w-6 h-6 '
                                  key={"deleted"}
                                  onClick={() => setIsDeletEvent(true)}>
                                  <FontAwesomeIcon icon={faTrash} className=" w-3 h-3 block  m-auto " />
                                </button>
                              </>
                            ) : ("")
                          }
                          <h1 className='text-xl text-blue-500 mb-1'>Evento Agendado</h1>
                          <p className='redersTextListModal'>Usuario:</p>
                          {showCurrentEditEvent?.extendedProps.owner ? (
                            <span>{showCurrentEditEvent?.extendedProps.owner}</span>
                          ) : (
                            <span>{user.name}</span>)}
                          <p className='redersTextListModal'>Titulo:</p>
                          <span>{showCurrentEditEvent?.title}</span>
                          <p className='redersTextListModal'>Descripcion:</p>
                          <span> {showCurrentEditEvent?.extendedProps.description}</span>
                          <p className='redersTextListModal'> Fecha y Hora Inicial:</p>
                          <span>{showCurrentEditEvent?._instance.range.start.toISOString().replace(/.000Z*$/, '').split("T").join('/')}</span>
                          <p className='redersTextListModal'> Fecha y Hora Final:</p>
                          <span>{showCurrentEditEvent?._instance.range.end.toISOString().replace(/.000Z*$/, '').split("T").join('/')}</span>
                          <p className='redersTextListModal'>Etiquetas:</p>
                          <span className='mr-3'>{showCurrentEditEvent?.extendedProps.tag}</span>

                        </>
                      )}
                      <div>
                        <button className='buttonfooter mt-5'
                          onClick={() => {
                            handleClose();
                            cleanStates();
                          }} >Cerrar</button>
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <p className='text-xl text-blue-500 mb-2'>Creando evento</p>
                    <div className='modal-colum'>
                      <div className='w-2/4'>
                        <p className='textModal'>Titulo</p>
                        <input
                          type='text'
                          name="titulo"
                          className='w-11/12 rounded-md border-zinc-800'
                          placeholder='titulo'
                          value={inputTitle}
                          onChange={(e) => { setInputTitle(e.target.value) }}
                          required
                        />
                      </div>
                      <div className='w-2/4'>
                        <div>
                          <p className='textModal'>Fecha</p>
                          <input
                            type='date'
                            className='w-11/12 rounded-md border-zinc-800'
                            placeholder='fecha'
                            value={inputDateInit}
                            onChange={(e) => { setInputDateInit(e.target.value) }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='modal-colum'>
                      <div className='w-2/4'>
                        <p className='textModal'>Hora inicial</p>
                        <input
                          type='time'
                          className='w-11/12 rounded-md border-zinc-800'
                          placeholder='hora Inicial'
                          value={inputHourInit}
                          onChange={(e) => { setInputHourInit(e.target.value) }}
                        />
                      </div>
                      <div className='w-2/4'>
                        <p className='textModal'>Hora final</p>
                        <input
                          type='time'
                          className='w-11/12 rounded-md border-zinc-800'
                          placeholder='hora final'
                          value={inputHourEnd}
                          onChange={(e) => { setInputHourEnd(e.target.value) }}
                        />
                      </div>
                    </div>
                    <div className='w-full'>
                      <p className='textModal'>Descripción</p>
                      <textarea
                        placeholder='descripción'
                        className='w-full rounded-md border-zinc-800'
                        value={inputDescription}
                        rows="2"
                        onChange={(e) => { setInputDescription(e.target.value) }}
                      />
                    </div>
                    <p className='textModal'>Etiquetas</p>
                    <div className='tags shadow-2xl'>
                      {ListTags.map((item, index) => (
                        item.SubStep.map((subStep, subIndex) => (
                          <button
                            className='buttonTags mb-2'
                            key={subIndex}
                            onClick={() => handleClickTags(subStep)}>{subStep}</button>
                        ))
                      ))}
                    </div>
                    <div className='mt-3'>
                      {tags?.map((subStep, subIndex) => (
                        <button
                          className='buttonTags'
                          key={subIndex}
                          onClick={() => handleClickTagsDelet(subStep)}>{subStep} X</button>
                      ))}
                    </div>
                    <div className='buttonfooter-container'>
                      <button className='buttonfooter' onClick={() => {
                        saveEvent();
                        setIsEditEvent(false);
                        setTimeout(() => {
                          handleClose();
                        }, 500);
                      }} >Guardar</button>
                      <button className='buttonfooter'
                        onClick={() => {
                          handleClose();
                          cleanStates();
                          setIsEditEvent(false);
                        }}>
                        Cancelar
                      </button>
                    </div>
                  </>
                )}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Calendar;