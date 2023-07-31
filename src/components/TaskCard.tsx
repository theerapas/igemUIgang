import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

let items = [
  { name: "user1", uploadtime: "29/7/23-20:00", status: "DONE!" },
  { name: "user2", uploadtime: "30/7/23-20:00", status: "Processing" },
];

export default function TaskCard() {
  return items.map((item) => (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.uploadtime}
        </Typography>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography sx={{ mb: 0 }} color="text.secondary">
          Status : {item.status}
        </Typography>
      </CardContent>
      <CardActions
        style={{ display: item.status == "DONE!" ? "block" : "none" }}
      >
        <Button size="small" variant="contained">
          Result
        </Button>
      </CardActions>
    </Card>
  ));
}
