interface ITask {
    id: number
    title: string
    body: string
  }
  
  type TaskState = {
    tasks: ITask[]
  }
  
  type TaskAction = {
    type: string
    task: ITask
  }
  
  type DispatchType = (args: TaskAction) => TaskAction