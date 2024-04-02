import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.data = action.payload
        }
    },
})

export const { setTasks } = tasksSlice.actions

export default tasksSlice.reducer