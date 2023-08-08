import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { task } = location.state;

  return (
    <div class="Result">
      <h1>Result is here!</h1>
      <div class="ResultDetail">
      <h1>{task.id}</h1>
      <h1>{task.title}</h1>
      <h1>{task.HLA}</h1>
      </div>
      <Button style={{ color: "#362d24", backgroundColor: "white" }}>Download Predicted Result</Button>
    </div>
  );
}

export default ResultPage;
