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
          file1: action.task.file1,
          file2: action.task.file2,
          file3: action.task.file3,
          file4: action.task.file4,
          file5: action.task.file5,
          file6: action.task.file6,
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