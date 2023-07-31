import { Button } from "@mui/material";

function NewTask() {
  return (
    <>
      <h1>Welcome!</h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <a href="/CreateTaskPage">
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#ab8f4f" }}
          >
            Create New Task
          </Button>
        </a>
      </div>
    </>
  );
}

export default NewTask;
