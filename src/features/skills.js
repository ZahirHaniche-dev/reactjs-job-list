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
                // Si l'élément existe déjà, augmenter la quantité
                state.skills[skillIndex].quantity++;
            } else {
                // Si l'élément n'existe pas encore
                if (state.skills.length > 6) {
                    // Si le tableau contient déjà 6 éléments, vous pouvez choisir une stratégie pour gérer ce cas
                    // Par exemple, vous pouvez supprimer le premier élément (FIFO)
                    state.skills.shift();
                }
                // Ajouter le nouvel élément
                state.skills.push({ name: action.payload, quantity: 1 });
            }
        },
        removeOne: (state, action) => {
            state.skills = state.skills.filter(skill => skill.name !== action.payload);
        },
        clearOne: (state) => {
            state.skills = []; 
        }
    }
});



export const { addOne, removeOne, clearOne} = skills.actions;
export default skills.reducer;