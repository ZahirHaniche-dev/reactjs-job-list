import { configureStore } from "@reduxjs/toolkit"
import jobs from "./features/jobs"
import skills from "./features/skills"

export const store = configureStore({
    reducer: {
        jobs,
        skills
    }
})