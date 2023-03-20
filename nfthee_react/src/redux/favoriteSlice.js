import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favorite: []
}

export const favoriteSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setFavorite: (state, action) => {
            state.favorite.push(action.payload)
        },

        deleteFavorite: ((state, action) => {
            const idx = state.favorite.findIndex((el) => el._id === action.payload._id)
            state.favourite = state.favourite.filter((item, i) => {
                return idx === i ? false : true
            })
        })
    }
})

export const {setFavorite, deleteFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
