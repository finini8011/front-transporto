import { createContext, useContext, useState } from 'react';
import axiosClient from '../axios-client';

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => { },
    setToken: () => { },
})

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [steps, setSteps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const baseUrl = window.location.origin.toString();
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    const refreshSteps = () => {
        axiosClient.get('/steps/get')
            .then(({ data }) => {
                setSteps(data)
            })
    }

    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            steps,
            setSteps,
            baseUrl,
            isLoading,
            setIsLoading,
            refreshSteps
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)