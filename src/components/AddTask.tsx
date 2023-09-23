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
import { PredictionTaskInput } from "../store/type";
import { addTask } from "../store/action";
import { API_URL } from "../store/action";
import { useDispatch } from "react-redux";

export const AddTask: React.FC<any> = () => {
  const dispatch = useDispatch();
  const initialTaskState: PredictionTaskInput = {
    name: "",
    germ_line_forward_dna: "",
    germ_line_reverse_dna: "",
    somatic_line_forward_dna: "",
    somatic_line_reverse_dna: "",
    hla_type: "",
  };

  const [task, setTask] = React.useState<PredictionTaskInput>(initialTaskState);

  const [filename1, setFilename1] = React.useState("");
  const [filename2, setFilename2] = React.useState("");
  const [filename3, setFilename3] = React.useState("");
  const [filename4, setFilename4] = React.useState("");
  const [filename5, setFilename5] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask(initialTaskState); // Reset the form fields to their initial state
    console.log("NEW TASK ADD!");
    navigate("/home");
  };

  const handleNameInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      name: e.currentTarget.value,
    });
  };

  const handleHLAInput = (event) => {
    setTask({
      ...task,
      hla_type: event.target.value,
    });
  };

  const handleCancle = () => {
    let text = "Are you sure?";
    if (confirm(text) == true) {
      navigate("/home");
    }
  };

  const [loading1, setLoading1] = useState("");
  const [loading2, setLoading2] = useState("");
  const [loading3, setLoading3] = useState("");
  const [loading4, setLoading4] = useState("");
  const [loading5, setLoading5] = useState("");

  const handleFile1Upload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setLoading1("loading");
      axios
        .post(API_URL + "/sequence", formData)
        .then((response) => {
          console.log(response);
          setTask({
            ...task,
            germ_line_forward_dna: selectedFile.filepath,
          });
          setLoading1("done");
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setLoading1("error");
        });
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilename1(selectedFile.filepath);
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
        .post(API_URL + "/sequence", formData)
        .then((response) => {
          console.log(response);
          setTask({
            ...task,
            germ_line_reverse_dna: selectedFile.filepath,
          });
          setLoading2("done");
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setLoading2("error");
        });
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilename2(selectedFile.filepath);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleFile3Upload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setLoading3("loading");
      axios
        .post(API_URL + "/sequence", formData)
        .then((response) => {
          console.log(response);
          setTask({
            ...task,
            somatic_line_forward_dna: selectedFile.filepath,
          });
          setLoading3("done");
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setLoading3("error");
        });
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilename3(selectedFile.filepath);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleFile4Upload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setLoading4("loading");
      axios
        .post(API_URL + "/sequence", formData)
        .then((response) => {
          console.log(response);
          setTask({
            ...task,
            somatic_line_reverse_dna: selectedFile.filepath,
          });
          setLoading4("done");
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setLoading4("error");
        });
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilename4(selectedFile.filepath);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleFile5Upload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setLoading5("loading");
      axios
        .post(API_URL + "/sequence", formData)
        .then((response) => {
          console.log(response);
          setTask({
            ...task,
            hla_type: selectedFile.filepath,
          });
          setLoading5("done");
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setLoading5("error");
        });
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilename1(selectedFile.filepath);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit} className="Add-task">
      <TextField
        id="name"
        label="Title"
        variant="outlined"
        //value={task.name}
        onChange={handleNameInput}
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
        // value={textInput}
        onChange={handleHLAInput}
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
        <p>{loading3}</p>
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
        <p>{loading4}</p>
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
        <p>{loading5}</p>
        <p>{filename5}</p>
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
