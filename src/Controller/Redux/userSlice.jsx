import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'user',
    initialState: [{

    }],
    reducers: {
        getUser: (state) => {
            state.push({name: "Obinna"})
            state.push({name: "Adeleke"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;