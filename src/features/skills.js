import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: []
};

export const skills = createSlice({
    name: "skills",
    initialState,
    reducers: {
        addOne: (state, action) => {
            const skillIndex = state.skills.findIndex(obj => obj.name === action.payload); 
            if (skillIndex !== -1) {
                state.skills[skillIndex].quantity++;
            } else {
                state.skills.push({ name: action.payload, quantity: 1 }); 
            }
        },
        removeOne: (state, action) => {
            state.skills = state.skills.filter(skill => skill.name !== action.payload);
        }
        
    }
});



export const { addOne, removeOne } = skills.actions;
export default skills.reducer;