import React, { useState, useEffect } from 'react'
import { Toaster, toast } from "react-hot-toast";
import { formatDate } from '@fullcalendar/core'
import Modal from '@mui/material/Modal';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import moment from 'moment';
import esLocale from '@fullcalendar/core/locales/es'
import { INITIAL_EVENTS, createEventId } from '../../../utils/event-utils'
import { useLazyGetDataCalendarQuery, useSaveCalendarQuestionMutation } from '../../../api/services/calendar/calendarApiSlice';
import "./CalendarList.css";


const CalendarList = () => {

  const [currentEvents, setCurrentEvents] = useState([]);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [getCalendar] = useLazyGetDataCalendarQuery();



  // creacion
  const handleDateSelect = (selectInfo) => {
    /* setSelectInfoTemp(selectInfo) */
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


  useEffect(() => {
    const getDataCalendar = async () => {
      const { data, isLoading: loading } = await getCalendar();
      const allEvents = Object.values(data).flat().filter(elemento => elemento !== null);
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
      setCurrentEvents(allCurrentEventsTemp);
    }
    if (currentEvents.length === 0) {
      getDataCalendar();
    }

  }, [])

  return (
    <div className='CalendarList'>
      <div className='CalendarList'>
      <FullCalendar
        locale={esLocale}
        plugins={[listPlugin, interactionPlugin]}
        headerToolbar={{
          left: '',
          center: '',
          right: ''
        }}
        initialView='listDay'
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
    </div>
  );
}

export default CalendarList;