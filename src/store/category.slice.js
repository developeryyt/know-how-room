import { createSlice } from "@reduxjs/toolkit";


export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        title: '',
        lists: []
    },
    reducers: {
        makeList: (state, action) => {
        }
    }
})