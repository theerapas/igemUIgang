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
          id: Math.random(),
          title: action.task.title,
          body: action.task.body,
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