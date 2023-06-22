import {createSlice} from "@reduxjs/toolkit"

const stepsPESVSlice = createSlice({
    name: 'stepsPESV',
    initialState: {report:null},
    
    reducers:{
        setSteps: (state, action) => {
            state.step= action.payload
        },
    }
})

export const {setStep} = stepsPESVSlice.actions

export default stepsPESVSlice.reducer

export const selectCurrentStep = (state) => state.stepsPESV.stepsPESVState.step