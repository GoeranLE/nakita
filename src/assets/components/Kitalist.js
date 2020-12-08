import React from 'react';
// 
//import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
//import TableFooter from '@material-ui/core/TableFooter';
//import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, name, address, plz, district) {
  return { id, name, address, plz, district };
}




export default function Kitalist({kitas, userInput }) {

  const classes = useStyles();



  return (
    <TableContainer pageSize={5} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Kita </TableCell>
            <TableCell align="right">ID </TableCell>
            <TableCell align="right">Adress</TableCell>
            <TableCell align="right">PLZ</TableCell>
            <TableCell align="right">District</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kitas.map((kitas) => (
            <TableRow key={kitas.name}>
              <TableCell component="th" scope="row">
                {kitas.name}
              </TableCell>
              <TableCell align="left">{kitas.id}</TableCell>
              <TableCell align="left">{kitas.address}</TableCell>
              <TableCell align="left">{kitas.plz}</TableCell>
              <TableCell align="left">{kitas.district}</TableCell>
            </TableRow>
          ))}
        </TableBody>
     {/*    <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={kitas.length}
              kitassPerPage={kitasPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}





