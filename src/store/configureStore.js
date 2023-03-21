import { configureStore } from '@reduxjs/toolkit'
import checkListReducer from "../pages/CheckList/reducers"

export const store = configureStore({
  reducer: {
    checkList: checkListReducer
  }
})