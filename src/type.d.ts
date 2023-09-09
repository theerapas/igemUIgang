interface ITask {
    id: string
    name: string
    created_at: string
    status: string
    germ_line_forward_dna: string
    germ_line_reverse_dna: string
    somatic_line_forward_dna: string
    somatic_line_reverse_dna: string
    hla_type: string
    result: dict
  }
  
  type TaskState = {
    tasks: ITask[]
  }
  
  type TaskAction = {
    type: string
    task: ITask
  }
  
  type DispatchType = (args: TaskAction) => TaskAction