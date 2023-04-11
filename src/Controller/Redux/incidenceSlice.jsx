import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "incidence",
    initialState: [],
    reducers: {
        getIncidences: (state) => {

        },
        createIncidences:(state, action) => {

        },
        updateIncidences: (state, action) => {

        },
        markComplete: (state, action) => {
            
        }
    }
})

console.log("Slice: ", slice)

export default slice.reducer;

export const {getIncidences, createIncidences, updateIncidences, markComplete} = slice.actions