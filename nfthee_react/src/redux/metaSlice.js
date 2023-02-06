import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    meta: ''
}

export const metaSlice = createSlice({
    name: "meta",
    initialState,
    reducers: {
        setMeta: (state, action) => {
            state.meta = action.payload
        }
    }
})

export const {setMeta} = metaSlice.actions;
export default metaSlice.reducer;
