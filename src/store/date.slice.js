import {createSlice} from "@reduxjs/toolkit";
import {format} from "date-fns";


const DateSlice = createSlice({
    name: 'dateSlice',
    initialState: {
        selectedDate: format(new Date(), 'yyyy-MM-dd')
    },
    reducers: {
        changeDate: (state, action) => {
            state.selectedDate = action.payload
        }
    }
})

export const { changeDate } = DateSlice.actions

export default DateSlice.reducer

