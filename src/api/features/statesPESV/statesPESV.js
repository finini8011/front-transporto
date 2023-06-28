import {createSlice} from "@reduxjs/toolkit"

const statesPESVSlice = createSlice({
    name: 'statesPESV',
    initialState: {report:null},
    
    reducers:{
        setStates: (state, action) => {
            state.states= action.payload
        },
    }
})

export const {setStates} = statesPESVSlice.actions

export default statesPESVSlice.reducer

export const selectCurrentState = (state) => state.statesPESV.statesPESVState.states