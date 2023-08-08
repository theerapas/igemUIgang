import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  //const { task } = location.state;

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <div className="Result">
      <h1>Result is here!</h1>
      <div className="ResultDetail">
        <h1>Task ID</h1>
        {/* <h1>{task.id}</h1> */}
        <h1>Task Title</h1>
        {/* <h1>{task.title}</h1> */}
        <h1>Task HLA</h1>
        {/* <h1>{task.HLA}</h1> */}
      </div>
      <Button style={{ color: "#362d24", backgroundColor: "white" }}>
        Download Predicted Result
      </Button>
      <Button onClick={handleHome}>Home</Button>
    </div>
  );
}

export default ResultPage;
