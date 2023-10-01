import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { task } = location.state;

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  {
    console.log(task);
  }
  return (
    <div className="Result">
      <h1>Result is here!</h1>
      <div className="ResultDetail">
        <h1>{new Date(task.created_at).toLocaleString()}</h1>
        <h1>{task.name}</h1>
        <h1>{task.hla_type}</h1>
        <h1>{task.germ_line_forward_dna}</h1>
        <h1>{task.germ_line_reverse_dna}</h1>
        <h1>{task.somatic_line_forward_dna}</h1>
        <h1>{task.somatic_line_reverse_dna}</h1>
      </div>
      <Button style={{ color: "#362d24", backgroundColor: "white" }}>
        Download Predicted Result
      </Button>
      <Button onClick={handleHome}>Home</Button>
    </div>
  );
}

export default ResultPage;
