import {createSlice} from "@reduxjs/toolkit"

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {calendar:null},
    
    reducers:{
        setStates: (state, action) => {
            state.calendar = action.payload
        },
    }
})

export const {setCalendar} = calendarSlice.actions

export default calendarSlice.reducer

export const selectCurrentState = (state) => state.calendar.calendarState.calendar