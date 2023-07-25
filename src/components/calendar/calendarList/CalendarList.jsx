import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es'
import { useLazyGetDataCalendarQuery} from '../../../api/services/calendar/calendarApiSlice';
import "./CalendarList.css";


const CalendarList = () => {

  const navigate = useNavigate();
  const [currentEvents, setCurrentEvents] = useState([]);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [getCalendar] = useLazyGetDataCalendarQuery();



  // creacion
  const handleDateSelect = (selectInfo) => {
    /* setSelectInfoTemp(selectInfo) */
  }
  // edicion
  const handleEventClick = (info) => {
    navigate("/calendar");
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
        <p className='redersTextList'>{eventInfo.timeText}</p>
        <p className='redersTextList'>{eventInfo.event.extendedProps.owner}</p>
        <p className='redersTextList'>{eventInfo.event.title}</p>
      </>

    )
  }


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
          id: eventData.id || index,
          title: eventData.titulo,
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
/*     if (currentEvents.length === 0) {
      getDataCalendar();
    } */

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