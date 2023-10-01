import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NewTask() {
  return (
    <>
      <div className="CreateButton">
        <Link to="/CreateTaskPage">
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#362d24" }}
          >
            Create New Task
          </Button>
        </Link>
      </div>
    </>
  );
}

export default NewTask;
