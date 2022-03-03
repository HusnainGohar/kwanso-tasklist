import {
    TASKS_DELETED, TASKS_FETCHED,
} from './actionTypes'

export const fetchTasks = () => {
    return dispatch => dispatch({
        type: TASKS_FETCHED,
        payload: getTasksFromLocalStorage()
    })
}

export const deleteTasks = (tasksToDelete) => {
    deleteTasksFromLocalStorage(tasksToDelete)
    return dispatch => dispatch({
        type: TASKS_DELETED,
        payload: tasksToDelete
    })
}

export const deleteTasksFromLocalStorage = (tasksToDelete) => {
    let tasksSavedInStorage = getTasksFromLocalStorage();
    let updatedTasks = tasksSavedInStorage.filter(task => !tasksToDelete.includes(task.id))
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

export const saveTaskInLocalStorage = (taskToAdd) => {
    let tasksSavedInStorage = getTasksFromLocalStorage();
    let updatedTasks = [...tasksSavedInStorage, taskToAdd];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

export const getTasksFromLocalStorage = () => {
    let tasksSavedInStorage = JSON.parse(localStorage.getItem('tasks'));
    return tasksSavedInStorage && tasksSavedInStorage.length > 0 ? tasksSavedInStorage : [];
}
