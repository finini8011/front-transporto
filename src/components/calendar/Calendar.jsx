import React, { useState, useEffect } from 'react'
import { toast } from "react-hot-toast";
import Modal from '@mui/material/Modal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { createEventId } from '../../utils/event-utils';
import {
  useLazyGetDataCalendarQuery,
  useSaveCalendarQuestionMutation
} from '../../api/services/calendar/calendarApiSlice';
import moment from 'moment';
import { ListTags } from '../../constants/ListTags';
import "./Calendar.css";


const Calendar = ({ calendarSmall }) => {

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

  //edit states
  const [isEdit, setIsEdit] = useState(false);
  const [showCurrentEditEvent, setShowCurrentEditEvent] = useState({});

  //get y post data
  const [getCalendar] = useLazyGetDataCalendarQuery();
  const [saveCalendar] = useSaveCalendarQuestionMutation();

  //modals funtions and states
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); setIsEdit(false) };

  // create
  const handleDateSelect = (selectInfo) => {
    setSelectInfoTemp(selectInfo)

    const endDateTime = moment(selectInfo.end);
    const endDateTemp = endDateTime.format('YYYY-MM-DD');
    const endHourTemp = endDateTime.format('HH:mm');


    const initDateTime = moment(selectInfo.start);
    const initDateTemp = initDateTime.format('YYYY-MM-DD');
    const initHourTemp = initDateTime.format('HH:mm');

    setInputHourEnd(endHourTemp);
    setInputHourInit(initHourTemp);
    setInputDateInit(initDateTemp);
    handleOpen();
  }
  // edit and view
  const handleEventClick = (info) => {
    handleOpen();
    setIsEdit(true);
    setShowCurrentEditEvent(info.event);
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
  const handleClickTagsDelet = (subStep) => {
    setTags((prevArray) => prevArray.filter((item) => item !== subStep));
  }

  // save event 
  const saveEvent = async () => {
    //prepara calendario
    let calendarApi = selectInfoTemp.view.calendar
    calendarApi.unselect() // clear date selection
    // composicion del objeto evento
    const newEvent = {
      id: createEventId(),
      title: inputTitle,
      description: inputDescription,
      tag: tags,
      start: `${inputDateInit}T${inputHourInit}`,
      end: `${inputDateInit}T${inputHourEnd}`,
      allDay: (inputHourInit && inputHourEnd) ? false : true,
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
    setTags("");

    // seteo en el calendario
    calendarApi.addEvent(newEvent);
  }

  //data get start
  useEffect(() => {
    const getDataCalendar = async () => {
      const { data, isLoading: loading } = await getCalendar();
      const allEventsNew = Object.values(data);
      const allEventsKeys = Object.keys(data);
      const allEventsNewArray = allEventsNew.map((arreglo, index) => {
        const newArray =
          arreglo.map((eventData) => {
            const eventDataTemp = { ...eventData, owner: allEventsKeys[index] };
            return eventDataTemp;
          })
        return newArray;
      })
      const allEvents = allEventsNewArray.flat().filter(elemento => elemento !== null);
      const allCurrentEventsTemp = allEvents.map((eventData, index) => {
        return {
          id: eventData.id || index,
          title: eventData.titulo,
          description: eventData.descripcion,
          tag: eventData.etiqueta,
          start: eventData.fecha_inicial || eventData.hora_inicial,
          end: eventData.fecha_final || eventData.hora_final,
          allDay: eventData.dia_entero || false,
          owner: eventData.owner
        }
      });
      setCurrentEvents(allCurrentEventsTemp);
    }
    if (currentEvents.length === 0) {
      getDataCalendar();
    }

  }, [])

  return (

    <div className={calendarSmall ? 'CalendarSmall' : 'w-full CalendarBig'}>
      <div className={calendarSmall ? 'CalendarSmall' : 'w-full CalendarBig'}>
        <FullCalendar
          locale={esLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: calendarSmall ? 'today' : 'dayGridMonth,timeGridWeek,timeGridDay',
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
      >
        {isEdit ?
          (
            <div className='bg-modal edit-event'>
              <p>Evento</p>
              <p className='redersTextList'>Usuario: {showCurrentEditEvent?.extendedProps.owner}</p>
              <p className='redersTextList'>Titulo: {showCurrentEditEvent?.title}</p>
              <p className='redersTextList'>Descripcion: {showCurrentEditEvent?.extendedProps.description}</p>
              <p className='redersTextList'> Fecha y Hora Inicial: {showCurrentEditEvent?._instance.range.start.toLocaleString()}</p>
              <p className='redersTextList'> Fecha y Hora Final: {showCurrentEditEvent?._instance.range.end.toLocaleString()}</p>
              <p className='redersTextList'>Etiquetas: {showCurrentEditEvent?.extendedProps.tag}</p>
              <button onClick={() => { handleClose() }} >Cerrar</button>
            </div>
          ) : (
            <div className='bg-modal create-event'>
              <p>Creando evento</p>
              <div className='modal-colum'>
                <div className='w-2/4'>
                  <p className='textModal'>Titulo</p>
                  <input
                    type='text'
                    name="titulo"
                    className='w-11/12 rounded-md border-zinc-800'
                    placeholder='title'
                    value={inputTitle}
                    onChange={(e) => { setInputTitle(e.target.value) }}
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
                <p className='textModal'>Descripcion</p>
                <textarea
                  placeholder='description'
                  className='w-full rounded-md border-zinc-800'
                  value={inputDescription}
                  maxlength="50"
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
                <button className='buttonfooter' onClick={() => { saveEvent(); handleClose() }} >Guardar</button>
                <button className='buttonfooter' onClick={() => { handleClose() }} >Cancelar</button>
              </div>
            </div>
          )}
      </Modal>
    </div>
  );
}

export default Calendar;