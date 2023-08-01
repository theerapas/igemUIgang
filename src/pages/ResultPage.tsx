import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { task } = location.state;

  return (
    <div>
      <h1>Result is here!</h1>
      <h1>{task.id}</h1>
      <h1>{task.title}</h1>
      <h1>{task.HLA}</h1>
      <Button>Download</Button>
    </div>
  );
}

export default ResultPage;
