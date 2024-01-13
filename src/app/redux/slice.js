const { createSlice, nanoid } = require( "@reduxjs/toolkit" );

const initialState = {
    user : []
}


const userSlice = createSlice({
    name :"user",
    initialState,
    reducers:{
        addUser : (state,action)=>{
            const data ={
                id : nanoid(),
                name:action.name
            }
            state.user.push(data)
        }
    }
})


export const {addUser} = userSlice.actions

export default userSlice.reducer