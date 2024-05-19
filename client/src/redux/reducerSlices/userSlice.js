import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    token:'',

}


const userSlice = createSlice ({
    name: 'user',
    initialState: initialState,
    reducers:{
        setLoggedIn(state,payload){
            state.isLoggedIn = true
            return isLoggedIn
        },

        addToken(state,payload){
            state.token = 'asdasdas'
            return state
        }
    }
})

export const  {setLoggedIn,addToken} = userSlice.actions 
export default userSlice.reducer