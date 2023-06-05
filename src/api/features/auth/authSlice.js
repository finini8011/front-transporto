import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {user:null, token: null},
    
    reducers:{
        setCredentials: (state, action) => {
            const {user, accesstoken} = action.payload
            state.user = user
            state.token = accesstoken
        },
        setToken: (state, action) => {
            const {accesstoken} = action.payload
            state.token = accesstoken
        },
        setUser: (state, action) => {
            // const {accesstoken} = action.payload
            state.user= action.payload
        },
        logOut : (state, action) => {
            console.log(state)
            state.user = null
            state.token = null
        }
    }
})

export const {setToken, logOut, setUser, setCredentials} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.authState.user 
export const selectCurrentToken = (state) => state.auth.authState.token 