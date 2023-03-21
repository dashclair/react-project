import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuid} from "uuid"

const initialState = {
    todos:[]
}

const checkListSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTask: (state, {payload:taskData}) => {
        const newTask = {
            id:uuid(),
            text:taskData.taskText,
            isEditable: false,
            isCompleted: false,
        }

        state.todos.unshift(newTask)
    },
    deleteTask: (state, {payload:taskId}) => {
      const findTask = state.todos.findIndex(({id}) => id === taskId)

      state.todos.splice(findTask,1)
    },
    comleteTask:(state, {payload:taskId})=>{
      const findTask = state.todos.find(({id}) => id === taskId);

      findTask.isCompleted = true
    },
    editTask:(state, {payload:taskId})=>{
      const findTask = state.todos.find(({id}) => id === taskId);

      findTask.isEditable = true
    },
    cancelTask: (state, {payload:taskId}) => {
      const findTask = state.todos.find(({id}) => id === taskId);

      findTask.isEditable = false
    },
    saveTask: (state, {payload: taskData}) => {
      const {id:taskId, newText} = taskData;

      const findTask = state.todos.find(({id}) => id === taskId);

      findTask.text = newText;
      findTask.isEditable = false;

    }
  }
})


export const {createTask, deleteTask, comleteTask, editTask, cancelTask, saveTask} = checkListSlice.actions

export default checkListSlice.reducer