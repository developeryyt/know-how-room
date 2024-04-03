import {createSlice} from "@reduxjs/toolkit";

export const knowHowSlice = createSlice({
    name: 'knowHow',
    initialState: {
        title: '',
        contents: '',
    },
    reducers: {
        writeTitle: (state, action) => {
            state.title = action.payload;
        }
    }
})

export const { writeTitle } = knowHowSlice.actions;

export default knowHowSlice.reducer


