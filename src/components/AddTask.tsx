import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  saveTask: (task: ITask | any) => void;
};

export const AddTask: React.FC<Props> = ({ saveTask }) => {
  const initialTaskState: ITask = {
    id: 0,
    time: "",
    title: "",
    HLA: "",
    filePath: "",
  };

  const [task, setTask] = React.useState<ITask>(initialTaskState);

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const navigate = useNavigate();

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    saveTask(task);
    setTask(initialTaskState); // Reset the form fields to their initial state
    console.log("NEW TASK ADD!");
    navigate("/home");
  };

  const [textInput, setTextInput] = useState("");

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
    task.HLA = event.target.value;
  };

  const handleCancle = () => {
    navigate("/home");
  };

  const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      //console.log(file);
      setImageUrl(reader.result);
      task.fileName = file.name;
    };

    reader.readAsDataURL(file);
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
      {/* <TextField
        id="body"
        label="Description"
        variant="outlined"
        value={task.body}
        onChange={handleTaskData}
      /> */}
      <TextField
        id="HLA"
        select
        label="Select"
        helperText="Please select your HLA Type"
        // onChange={(newValue: React.ChangeEvent<HTMLInputElement>) => {
        //   task.body = newValue.target.value;
        // }}
        value={textInput}
        onChange={handleTextInputChange}
      >
        <MenuItem key={"A"} value={"A"}>
          A
        </MenuItem>
        <MenuItem key={"B"} value={"B"}>
          B
        </MenuItem>
        <MenuItem key={"C"} value={"C"}>
          C
        </MenuItem>
      </TextField>
      <br />
      <br />
      <div class="textButton">
        <h2>upload1</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 1
          <input hidden accept="*" type="file" onChange={handleFileUpload} />
        </Button>
      </div>
      <div class="textButton">
        <h2>upload2</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 2
          <input hidden accept="*" type="file" onChange={handleFileUpload} />
        </Button>
      </div>
      <div class="textButton">
        <h2>upload3</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 3
          <input hidden accept="*" type="file" onChange={handleFileUpload} />
        </Button>
      </div>
      <div class="textButton">
        <h2>upload4</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 4
          <input hidden accept="*" type="file" onChange={handleFileUpload} />
        </Button>
      </div>
      <div class="textButton">
        <h2>upload5</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 5
          <input hidden accept="*" type="file" onChange={handleFileUpload} />
        </Button>
      </div>
      <div class="textButton">
        <h2>upload6</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 6
          <input hidden accept="*" type="file" onChange={handleFileUpload} />
        </Button>
      </div>
      <br />
      <br />
      <Button onClick={handleCancle} style={{ color: "#362d24" }}>
        Cancel
      </Button>
      <Button
        type="submit"
        variant="contained"
        disabled={task.title === "" || task.fileName === ""}
        style={{ color: "white", backgroundColor: "#362d24" }}
      >
        Create new task
      </Button>
    </form>
  );
};
