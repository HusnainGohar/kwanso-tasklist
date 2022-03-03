import {
    TASKS_DELETED,
    TASK_ADDED,
    TASKS_FETCHED,
} from '../actions/actionTypes'

const initialState = {
    msg: '',
    tasks: [],
}
export default function tasksReducer (state = initialState, action) {
    const { type, payload } = action
    switch (type) {

        case TASKS_FETCHED:
            return {
                ...state,
                tasks: payload,
            }

        case TASKS_DELETED:
            return {
                ...state,
                tasks: state.tasks.filter(task => !payload.includes(task.id))
            }

        case TASK_ADDED:
            return {
                ...state,
                tasks: [...state.tasks, payload],
                msg: 'Task Added Successfully'
            }

        default:
            return {
                ...state
            }
    }
}
