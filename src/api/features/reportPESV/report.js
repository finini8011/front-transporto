import {createSlice} from "@reduxjs/toolkit"

const reportPESVSlice = createSlice({
    name: 'reportPESV',
    initialState: {report:null},
    
    reducers:{
        setReport: (state, action) => {
            // const {accesstoken} = action.payload
            state.report= action.payload
        },
    }
})

export const {setReport} = reportPESVSlice.actions

export default reportPESVSlice.reducer

export const selectCurrentReport = (state) => state.reportPESV.reportPESVState.report