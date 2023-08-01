import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NewTask() {
  return (
    <>
    <div class = "HomeBox">
      <h1 class = "InBoxText">Welcome!</h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <Link to="/CreateTaskPage">
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#ab8f4f" }}
          >
            Create New Task
          </Button>
        </Link>
      </div>
      </div>
    </>
  );
}

export default NewTask;
