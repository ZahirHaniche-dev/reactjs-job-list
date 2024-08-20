import { configureStore } from "@reduxjs/toolkit"
import jobs from "./features/jobs"

export const store = configureStore({
    reducer: {
        jobs
    }
})