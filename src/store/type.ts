export interface ITask {
    id: string
    name: string
    created_at: string
    status: string
    germ_line_forward_dna: string
    germ_line_reverse_dna: string
    somatic_line_forward_dna: string
    somatic_line_reverse_dna: string
    hla_type: string
    result: {}
  }

  export interface PredictionTaskInput {
    name: string
    germ_line_forward_dna: string
    germ_line_reverse_dna: string
    somatic_line_forward_dna: string
    somatic_line_reverse_dna: string
    hla_type: string
  }

export const GET_TASKS = 'GET_TASKS';
export const GET_TASK = 'GET_TASK';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TASKS_ERROR = 'TASKS_ERROR';
export const SET_LOADING = 'SET_LOADING';
