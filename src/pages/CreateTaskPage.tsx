import * as React from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../components/AddTask";
import { addTask } from "../store/actionCreators";
import { Dispatch } from "redux";

function CreateTaskPage() {
  const dispatch: Dispatch<any> = useDispatch();

  const saveTask = React.useCallback(
    (task: ITask) => {
      dispatch(addTask(task));
      console.log(task);
    },
    [dispatch]
  );

  return (
    <div className="NewTaskBox">
      <h1 className="MainText">Create New Task</h1>
      <AddTask saveTask={saveTask} />
    </div>
  );
}

export default CreateTaskPage;
