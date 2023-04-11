import { createSlice } from "@reduxjs/toolkit";

let lastIndex = 0;

const slice = createSlice({
    name: "project",
    initialState: [],
    reducers: {
        projectAdded: (state, action) => {
            state.push({
                id: ++lastIndex,
                name: action.payload.name
            })

        }
    }
})

console.log("Project Slice:", slice)

export default slice.reducer;

export const {projectAdded} = slice.actions;