interface ITask {
    id: number
    title: string
    HLA: string
    filePath: string
  }
  
  type TaskState = {
    tasks: ITask[]
  }
  
  type TaskAction = {
    type: string
    task: ITask
  }
  
  type DispatchType = (args: TaskAction) => TaskAction