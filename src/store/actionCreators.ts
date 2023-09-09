import axios from "axios"
import * as actionTypes from "./actionTypes"

axios.defaults.baseURL = 'http://localhost:8000';

const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

export function addTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.ADD_TASK,
    task,
  }

  return simulateHttpRequest(action)
}

export function removeTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.REMOVE_TASK,
    task,
  }
  return simulateHttpRequest(action)
}

export function error(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.REMOVE_TASK,
    task,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: TaskAction) {
  return (dispatch: DispatchType) => {
    axios.get('/prediction').then(  
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err }));
  }
}

export function getPredictionList(action: TaskAction) {
  return (dispatch: DispatchType) => {
    axios.get('/prediction').then(  
      PredictionTaskResponse => dispatch({ type: actionTypes.UPDATE_TASK_LIST, PredictionTaskResponse }),
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err }));
  }
}