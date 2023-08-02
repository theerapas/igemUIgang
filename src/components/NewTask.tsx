import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NewTask() {
  return (
    <>
      <div class="HomeBox">
        <h1 class="InBoxText">Let's Create New Task!</h1>
        <p>adusfvbhdnjmknijfdbhugfsfjd</p>
        <p>adusfvbhdnjmknijfdbhugfsfjd</p>
        <p>adusfvbhdnjmknijfdbhugfsfjd</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <Link to="/CreateTaskPage">
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#362d24" }}
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
