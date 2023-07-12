import React, { useState, useEffect } from 'react'
import { Toaster, toast } from "react-hot-toast";
import { formatDate } from '@fullcalendar/core'
import Modal from '@mui/material/Modal';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment';
import { INITIAL_EVENTS, createEventId } from '../../utils/event-utils'
import { useLazyGetDataCalendarQuery, useSaveCalendarQuestionMutation } from '../../api/services/calendar/calendarApiSlice';


const Calendar = () => {

  const [currentEvents, setCurrentEvents] = useState([]);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectInfoTemp, setSelectInfoTemp] = useState(null);
  const [inputTitle, setInputTitle] = useState();
  const [inputDescription, setInputDescription] = useState();
  const [tags, setTags] = useState();
  const [inputHourEnd, setInputHourEnd] = useState();
  const [inputDateEnd, setInputDateEnd] = useState();

  const [inputDateInit, setInputDateInit] = useState();
  const [inputHourInit, setInputHourInit] = useState();


  const [getCalendar] = useLazyGetDataCalendarQuery();
  const [saveCalendar] = useSaveCalendarQuestionMutation();



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // creacion
  const handleDateSelect = (selectInfo) => {
    setSelectInfoTemp(selectInfo)

    const endDateTime = moment(selectInfo.end);
    const endDateTemp = endDateTime.format('YYYY-MM-DD');
    const endHourTemp = endDateTime.format('HH:mm');


    const initDateTime = moment(selectInfo.start);
    const initDateTemp = initDateTime.format('YYYY-MM-DD');
    const initHourTemp = initDateTime.format('HH:mm');

    setInputHourEnd(endHourTemp);
    setInputDateEnd(endDateTemp);
    setInputHourInit(initHourTemp);
    setInputDateInit(initDateTemp);
    handleOpen();
  }
  // edicion
  const handleEventClick = (info) => {
/*     //edicion
    const minutes = prompt('nueva duracion en minutos');
    // modificacion de la fecha
    const newEnd = moment(info.event.end).add(minutes, 'minutes');

    // seteo en el calendario
    info.event.setEnd(newEnd.toISOString());

    // seteo en el estado
    const currentEventsTemp = currentEvents.map((event) => {
      if (info.event.id == event.id) {
        event.end = newEnd.toISOString();
      }
      return event;
    })
    setCurrentEvents(currentEventsTemp); */
  };

  // detector de cambios de eventos
  const handleEvents = (events) => {
    // se dispara siempre que cambian los eventos en el calendario
    console.log(currentEvents, "handleevents");
    // llamaado al api para get
    // ir al get y stear de nuevo currentEvents
  }

  // render de la celda del evento
  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  const saveEvent = async () => {
    //prepara calendario
    let calendarApi = selectInfoTemp.view.calendar
    calendarApi.unselect() // clear date selection
    // composicion del objeto evento
    const newEvent = {
      id: createEventId(),
      title: inputTitle,
      description: inputDescription,
      tag: ["1.1", "1.2", "1,3"],
      start: `${inputDateInit}T${inputHourInit}`,
      end: `${inputDateEnd}T${inputHourEnd}`,
      allDay: selectInfoTemp.allDay
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
      };
      await saveCalendar({ payload })
      toast.success("Evento creado correctamente");
      console.log("exito entro")
    } catch (e) {
      console.log("error")
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
    // seteo en el calendario
    calendarApi.addEvent(newEvent);
    // seteo del estado
    setCurrentEvents([...currentEvents, newEvent]);
    setInputDescription("");
    setInputTitle("");
    setInputDateEnd("");
    setInputHourEnd("");
    setInputDateInit("");
    setInputHourInit("");
  }

  useEffect(() => {
    console.log(currentEvents.length === 0)
    const getDataCalendar = async () => {
      console.log('iffff')
      const { data, isLoading: loading } = await getCalendar();
      const allEvents = Object.values(data).flat().filter(elemento => elemento !== null);
      console.log(allEvents, "datos")
      const allCurrentEventsTemp = allEvents.map((eventData, index) => {
        return {
          id: eventData.id || index,
          title: eventData.titulo,
          description: eventData.descripcion,
          tag: eventData.etiqueta,
          start: eventData.fecha_inicial || eventData.hora_inicial,
          end: eventData.fecha_final || eventData.hora_final,
          allDay: eventData.dia_entero || false
        }
      });
      console.log(allCurrentEventsTemp, "actualizado")

      setCurrentEvents(allCurrentEventsTemp);

    }
    if (currentEvents.length === 0) {
      getDataCalendar();
    }

  }, [])

  return (
    <div className='demo-app'>
      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
          }}
          initialView='timeGridWeek'
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
      >
        <div className='bg-modal'>
          <h1>aaaaa</h1>
          <p>fecha</p>
          <input
            type='text'
            placeholder='title'
            value={inputTitle}
            onChange={(e) => { setInputTitle(e.target.value) }}
          />
          <input
            type='text'
            placeholder='description'
            value={inputDescription}
            onChange={(e) => { setInputDescription(e.target.value) }}
          />
          <p>fecha</p>
          <input
            type='date'
            placeholder='fecha'
            value={inputDateInit}
            onChange={(e) => { setInputDateInit(e.target.value); setInputDateEnd(e.target.value) }}
          />
          <p>hora inicial</p>
          <input
            type='time'
            placeholder='hora Inicial'
            value={inputHourInit}
            onChange={(e) => { setInputHourInit(e.target.value) }}
          />
          <p>hora final</p>
          <input
            type='time'
            placeholder='hora final'
            value={inputHourEnd}
            onChange={(e) => { setInputHourEnd(e.target.value) }}
          />
          <button onClick={() => { saveEvent(); handleClose() }} >guardar</button>
        </div>
      </Modal>
    </div>
  );
}

export default Calendar;