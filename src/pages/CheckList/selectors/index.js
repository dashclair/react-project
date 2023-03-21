import { createSelector} from "@reduxjs/toolkit";

const checkListSelector = (store) => store.checkList.todos

export const sortedTasksSelector = createSelector (
    checkListSelector,
    (todos) => {
        const copy = structuredClone(todos)

        return copy.sort((current, next) => current.isCompleted - next.isCompleted)
    }
)
