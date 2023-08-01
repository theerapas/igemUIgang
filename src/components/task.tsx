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
    <React.Fragment>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div">
            {task.title}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {task.HLA}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {task.filePath}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/ResultPage" state={{ task: task }}>
            <Button size="small" variant="outlined">
              Result
            </Button>
          </Link>
          <Button
            size="small"
            variant="outlined"
            onClick={() => deleteTask(task)}
            color="error"
          >
            Delete
          </Button>
        </CardActions>
      </CardActionArea>
    </React.Fragment>
  );

  return (
    <div className="Task">
      <Box sx={{ minWidth: 275, marginTop: 1 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
};
