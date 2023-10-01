import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Box from "@mui/material/Box";
import TableFooter from "@mui/material/TableFooter";
import { useTheme } from "@mui/material/styles";
import { ITask } from "../store/type";
import { TaskState } from "../store/reducers";
import { getTasks } from "../store/action";
import { TablePaginationActions } from "./tableaction";

export default function BasicTable() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const rows = useSelector((state: TaskState) => state.tasks);
  console.log(rows);
  const loading = useSelector((state: TaskState) => state.loading);
  const error = useSelector((state: TaskState) => state.error);

  // const handleDelete = (id: string) => {
  //   deleteTask(id);
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error</div>;
  // }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Created Date</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">HLA Type</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {new Date(row.created_at).toLocaleString()}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.hla_type}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => {
                      let text = "Are you sure?";
                      if (confirm(text) == true) {
                        //handleDelete(row.id);
                      }
                    }}
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Link to="/ResultPage" state={{ task: row }}>
                    <div className="TaskButton">
                      <Button size="small" variant="contained">
                        Result
                      </Button>
                    </div>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
