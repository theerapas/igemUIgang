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
import axios from "axios";

type Props = {
  saveTask: (task: ITask | any) => void;
};

export const AddTask: React.FC<Props> = ({ saveTask }) => {
  const initialTaskState: ITask = {
    id: 0,
    name: "",
    germ_line_forward_dna: "",
    germ_line_reverse_dna: "",
    somatic_line_forward_dna: "",
    somatic_line_reverse_dna: "",
    hla_type: "",
  };

  const [task, setTask] = React.useState<ITask>(initialTaskState);

  const [filename1, setFilename1] = React.useState("");
  const [filename2, setFilename2] = React.useState("");
  const [filename3, setFilename3] = React.useState("");
  const [filename4, setFilename4] = React.useState("");
  const [filename5, setFilename5] = React.useState("");
  const [filename6, setFilename6] = React.useState("");

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
    task.hla_type = event.target.value;
  };

  const handleCancle = () => {
    let text = "Are you sure?";
    if (confirm(text) == true) {
      navigate("/home");
    }
  };

  const [loading1, setLoading1] = useState("");
  const [loading2, setLoading2] = useState("");

  const handleFile1Upload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setLoading1("loading");
      axios
        .post("http://localhost:3000/sequence", formData)
        .then((response) => {
          console.log(response.data);
          setLoading1("done");
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setLoading1("error");
        });
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      task.germ_line_forward_dna = selectedFile.name;
      setFilename1(selectedFile.name);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleFile2Upload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setLoading2("loading");
      axios
        .post("http://localhost:3000/sequence", formData)
        .then((response) => {
          console.log(response.data);
          setLoading2("done");
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setLoading2("error");
        });
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      task.germ_line_reverse_dna = selectedFile.name;
      setFilename2(selectedFile.name);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleFile3Upload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      //console.log(file);
      task.somatic_line_forward_dna = file.name;
      setFilename3(file.name);
    };
    reader.readAsDataURL(file);
  };
  const handleFile4Upload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      //console.log(file);
      task.somatic_line_reverse_dna = file.name;
      setFilename4(file.name);
    };
    reader.readAsDataURL(file);
  };
  const handleFile5Upload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      //console.log(file);
      task.hla_type = file.name;
      setFilename5(file.name);
    };
    reader.readAsDataURL(file);
  };
  const handleFile6Upload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      //console.log(file);
      task.result = file.name;
      setFilename6(file.name);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={addNewTask} className="Add-task">
      <TextField
        id="name"
        label="Title"
        variant="outlined"
        //value={task.name}
        onChange={handleTaskData}
      />
      <br />
      <br />
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
      <div className="textButton">
        <h2>upload1</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 1
          <input hidden accept="*" type="file" onChange={handleFile1Upload} />
        </Button>
        <p>{loading1}</p>
        <p>{filename1}</p>
      </div>
      <div className="textButton">
        <h2>upload2</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 2
          <input hidden accept="*" type="file" onChange={handleFile2Upload} />
        </Button>
        <p>{loading2}</p>
        <p>{filename2}</p>
      </div>
      <div className="textButton">
        <h2>upload3</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 3
          <input hidden accept="*" type="file" onChange={handleFile3Upload} />
        </Button>
        <p>{filename3}</p>
      </div>
      <div className="textButton">
        <h2>upload4</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 4
          <input hidden accept="*" type="file" onChange={handleFile4Upload} />
        </Button>
        <p>{filename4}</p>
      </div>
      <div className="textButton">
        <h2>upload5</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 5
          <input hidden accept="*" type="file" onChange={handleFile5Upload} />
        </Button>
        <p>{filename5}</p>
      </div>
      <div className="textButton">
        <h2>upload6</h2>
        <Button
          variant="contained"
          component="label"
          style={{ color: "#362d24", backgroundColor: "white" }}
        >
          Upload 6
          <input hidden accept="*" type="file" onChange={handleFile6Upload} />
        </Button>
        <p>{filename6}</p>
      </div>
      <br />
      <br />
      <Button onClick={handleCancle} style={{ color: "#362d24" }}>
        Cancel
      </Button>
      <Button
        type="submit"
        variant="contained"
        //disabled={task.title === "" || task.file1 === ""}
        style={{ color: "white", backgroundColor: "#362d24" }}
      >
        Create new task
      </Button>
    </form>
  );
};
