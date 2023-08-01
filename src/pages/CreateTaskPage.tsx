import * as React from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../components/AddTask";
import { addTask } from "../store/actionCreators";
import { Dispatch } from "redux";

function CreateTaskPage() {
  const dispatch: Dispatch<any> = useDispatch();

  const saveTask = React.useCallback(
    (task: ITask) => dispatch(addTask(task)),
    [dispatch]
  );

  return (
    <div>
      <h1>Create New Task</h1>
      <AddTask saveTask={saveTask} />
    </div>
  );
}

export default CreateTaskPage;
