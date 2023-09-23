import axios from 'axios';
import { Dispatch } from 'redux';
import { ITask, GET_TASKS, GET_TASK, ADD_TASK, DELETE_TASK, TASKS_ERROR, SET_LOADING } from './type';
import { PredictionTaskInput } from './type';

export const API_URL = 'http://localhost:8000';

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

export const getTasks = () => async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
        const response = await axios.get<ITask[]>(API_URL + "/prediction");
        let temp = response
        dispatch({
            type: GET_TASKS,
            payload: temp
        });
    } catch (error) {
        dispatch({
            type: TASKS_ERROR,
            payload: error
        });
    }
};

export const getTask = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
        const response = await axios.get<ITask>(`${API_URL}/prediction/${id}`);
        let temp = response
        dispatch({
            type: GET_TASK,
            payload: temp
        });
    } catch (error) {
        dispatch({
            type: TASKS_ERROR,
            payload: error
        });
    }
};

export const addTask = (task: PredictionTaskInput) => async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
        const response = await axios.post<ITask>(API_URL, task);
        let temp = response
        dispatch({
            type: ADD_TASK,
            payload: temp
        });
    } catch (error) {
        dispatch({
            type: TASKS_ERROR,
            payload: error
        });
    }
};

export const deleteTask = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: TASKS_ERROR,
            payload: error
        });
    }
};
