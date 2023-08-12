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
        <h1>{new Date(task.id).toLocaleString()}</h1>
        <h1>{task.title}</h1>
        <h1>{task.HLA}</h1>
        <h1>{task.file1}</h1>
        <h1>{task.file2}</h1>
        <h1>{task.file3}</h1>
        <h1>{task.file4}</h1>
        <h1>{task.file5}</h1>
        <h1>{task.file6}</h1>
      </div>
      <Button style={{ color: "#362d24", backgroundColor: "white" }}>
        Download Predicted Result
      </Button>
      <Button onClick={handleHome}>Home</Button>
    </div>
  );
}

export default ResultPage;
