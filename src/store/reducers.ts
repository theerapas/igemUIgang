import { ITask, GET_TASKS, GET_TASK, ADD_TASK, DELETE_TASK, TASKS_ERROR, SET_LOADING } from './type';

export interface TaskState {
    tasks: ITask[];
    loading: boolean;
    error: null | string;
}

const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null
};

const taskReducer = (state = initialState, action: any): TaskState => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
                error : null
            };
        case GET_TASKS:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            };
        case GET_TASK:
            return {
                ...state,
                loading: false,
                tasks: [action.payload]
            };
        case ADD_TASK:
            return {
                ...state,
                loading: false,
                tasks: [...state.tasks, action.payload]
            };
        case DELETE_TASK:
            return {
                ...state,
                loading: false,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case TASKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default taskReducer;
