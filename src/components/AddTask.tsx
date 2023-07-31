import { Button, TextField } from "@mui/material";
import * as React from "react";

type Props = {
  saveTask: (task: ITask | any) => void;
};

export const AddTask: React.FC<Props> = ({ saveTask }) => {
  const initialTaskState: ITask = {
    id: 0,
    title: "",
    body: "",
  };

  const [task, setTask] = React.useState<ITask>(initialTaskState);

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    saveTask(task);
    setTask(initialTaskState); // Reset the form fields to their initial state
  };

  return (
    <form onSubmit={addNewTask} className="Add-task">
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        value={task.title}
        onChange={handleTaskData}
      />
      <br />
      <br />
      <TextField
        id="body"
        label="Description"
        variant="outlined"
        value={task.body}
        onChange={handleTaskData}
      />
      <br />
      <br />
      <button
        disabled={task.title === "" || task.body === ""}
        style={{ backgroundColor: "white", border: "none" }}
      >
        <Button
          type="submit"
          variant="contained"
          disabled={task.title === "" || task.body === ""}
          style={{ color: "white", backgroundColor: "#ab8f4f" }}
        >
          Create new task
        </Button>
      </button>
    </form>
  );
};
