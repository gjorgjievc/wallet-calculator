import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//initial state
const initialState = {
    transactions:[],
    error: null,
    loading: true
}

// prvo go kreairas CONTEXT so stejtot sho ke bide "GLAVEN"
export const GlobalContext = createContext(initialState);

// vtoro pravis PROVIDER da mozes da gi WRAP-nes componentite vo nego za da imaat pristap do SE`
// megju 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions (that make calls to the REDUCER) 
    //you can DISPATCH an OBJECT to the reducer aaaaaaaaaand trough payload you send data that the REDUCER will work with
    // odnosno isprakjash (dispatch) type (sho sakas da bide napraveno POST GET DELETE) i vo slucajov ID stavas vo payload za reducerot
    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
        
    }
    
    async function deleteTransaction(id) {
        try {
        await axios.delete(`/api/v1/transactions/${id}`)    

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id,
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }        
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data,
                addTransaction
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
           
    }
 
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}