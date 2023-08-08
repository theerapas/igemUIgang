import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";


type Props = {
  task: ITask;
  removeTask: (task: ITask) => void;
};
export const Task: React.FC<Props> = ({ task, removeTask }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteTask = React.useCallback(
    (task: ITask) => dispatch(removeTask(task)),
    [dispatch, removeTask]
  );

  const card = (
    <div class="Task">
    <React.Fragment>
      <CardActionArea>
      <div class="TaskContent">
        <CardContent>
          <Typography variant="h5" component="div">
            {task.title}
          </Typography>
          <br />
          <div class="TaskContentDe">
          <Typography sx={{ mb: 1.5 }}>
            {task.HLA}
          </Typography>
          </div>
          <br />
          <div class="TaskContentDe">
          <Typography sx={{ mb: 1.5 }}>
            {task.filePath}
          </Typography>
          </div>
        </CardContent>
        </div>
        <CardActions>
          <Link to="/ResultPage" state={{ task: task }}>
          <div class="TaskButton">
            <Button size="small" variant="contained">
              Result
            </Button>
          </div>
          </Link>
          <div class="TaskButton">
          <Button
            size="small"
            variant="contained"
            onClick={() => deleteTask(task)}
            color="error"
          >
            Delete
          </Button>
          </div>
        </CardActions>
      </CardActionArea>
    </React.Fragment>
    </div>
  );

  return (
    <div>
      <Box sx={{ minWidth: 275, marginTop: 1 }}>
        <Card color="#362d24">{card}</Card>
      </Box>
    </div>
  );
};
