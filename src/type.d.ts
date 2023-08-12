interface ITask {
    id: date
    title: string
    HLA: string
    file1: string
    file2: string
    file3: string
    file4: string
    file5: string
    file6: string
  }
  
  type TaskState = {
    tasks: ITask[]
  }
  
  type TaskAction = {
    type: string
    task: ITask
  }
  
  type DispatchType = (args: TaskAction) => TaskAction