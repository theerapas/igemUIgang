import * as React from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "./components/AddTask";
import { addTask, removeTask } from "./store/actionCreators";
import { Dispatch } from "redux";
import Header from "./components/header";
import NewTask from "./components/NewTask";
import "./App.css";
import TaskList from "./components/tasklist";

function App() {
  const dispatch: Dispatch<any> = useDispatch();

  const saveTask = React.useCallback(
    (task: ITask) => dispatch(addTask(task)),
    [dispatch]
  );

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h1>Create New Task</h1>
          <AddTask saveTask={saveTask} />
        </div>
        <div style={{ width: "50%" }}>
          <TaskList />
        </div>
      </div>
      <NewTask />
    </>
  );
}

export default App;
