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
          title: action.task.title,
          HLA: action.task.HLA,
          filePath: action.task.filePath
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
    }
    return state
  }
  
  export default reducer