import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    toUpdate: null,
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.data = action.payload
        },
        setToUpdate: state => {
            state.toUpdate = Math.random();
        }
    },
})

export const { setTasks, setToUpdate } = tasksSlice.actions

export default tasksSlice.reducer