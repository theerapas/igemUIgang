import * as React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Task } from "../components/task";
import { removeTask } from "../store/actionCreators";

function TaskList() {
  const tasks: readonly ITask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  );

  return (
    <>
      <div class = "HomeBox">
        <h1 class = "InBoxText">Task List</h1>
        {tasks.map((task: ITask) => (
          <Task key={task.id} task={task} removeTask={removeTask} />
        ))}
      </div>
    </>
  );
}

export default TaskList;
