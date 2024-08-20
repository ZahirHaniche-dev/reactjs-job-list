import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: undefined,
  error: false
};

export const jobs = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.loading = false; // Arrêtez le chargement une fois les données récupérées
    },
    addLoader: (state) => {
      state.loading = true;
    },
    addError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export function getData() {
    return function(dispatch) {
        dispatch(addLoader());
        fetch("/data.json")
            .then(response => {
                if (!response.ok) {
                    console.error('Response not OK', response.status, response.statusText);
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(data => {
                dispatch(addData(data));
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                dispatch(addError());
            });
    };
}


export const { addData, addLoader, addError } = jobs.actions;
export default jobs.reducer;
