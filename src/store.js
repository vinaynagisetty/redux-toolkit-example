import { configureStore, createSlice } from "@reduxjs/toolkit";

const state = {
    fullName: "",
    amount: 0,
    mobileNumber: null
}

let userSlice = createSlice({
    name: "user",
    initialState: state,
    reducers: {
        updateName: (state, action) => {
            state.fullName = action.payload
        },
        updateMobileNumber: (state, action) => {
            state.mobileNumber = action.payload
        },
        deposit: (state, action) => {
            state.amount += +action.payload
        },
        withdraw: (state, action) => {
            state.amount -= +action.payload
        },
        reset: (state) => {
            state.amount=0,
            state.fullName="",
            state.mobileNumber=null
        }
    }
})

const store = configureStore(
    {
        reducer: {
            user: userSlice.reducer
        }
    }
)
export const {updateMobileNumber,updateName,deposit,withdraw} =userSlice.actions;
export default store;