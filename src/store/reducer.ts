import { act } from "react-dom/test-utils"
import * as actionTypes from "./actionTypes"

const initialState: TaskState = {
 tasks: [],
}

const reducer = (
    state: TaskState = initialState,
    action: TaskAction
  ): TaskState => {
    switch (action.type) {
      case actionTypes.ADD_TASK:
        const newTask: ITask = {
          id: Date.now(),
          name: action.task.name,
          created_at: action.task.created_at,
          status: act,
          hla_type: action.task.hla_type,
          germ_line_forward_dna: action.task.germ_line_forward_dna,
          germ_line_reverse_dna: action.task.germ_line_reverse_dna,
          somatic_line_forward_dna: action.task.somatic_line_forward_dna,
          somatic_line_reverse_dna: action.task.somatic_line_reverse_dna,
        }
        return {
          ...state,
          tasks: state.tasks.concat(newTask),
        }
      case actionTypes.REMOVE_TASK:
        const updatedArticles: ITask[] = state.tasks.filter(
          task => task.id !== action.task.id
        )
        return {
          ...state,
          tasks: updatedArticles,
        }
      case actionTypes.UPDATE_TASK_LIST:
          const updateTaskList: ITask = {
            id: str,
            name: str,
            created_at: str,
            status: str,
            germ_line_forward_dna: str,
            germ_line_reverse_dna: str,
            somatic_line_forward_dna: str,
            somatic_line_reverse_dna: str,
            hla_type: str,
            result: dict,
          }
          return {
            ...state,
            tasks: state.tasks.concat(updateTaskList),
          }
    }
    return state
  }
  
  export default reducer