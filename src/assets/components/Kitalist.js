import React from "react";
import { DataGrid } from "@material-ui/data-grid";

// GRID

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",
    border: 0,
  },
}));

export default function Kitalist({ kitas, userInput }) {
  const formatData = ({ id, name, address, plz, district }) => {
    return { id, name, address, plz, district };
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Kita Name", width: 300 },
    { field: "address", headerName: "Address", width: 200 },
    { field: "district", headerName: "District", width: 200 },
    {
      field: "plz",
      headerName: "PLZ",
      width: 100,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue('firstName') || ''} ${
    //       params.getValue('lastName') || ''
    //     }`,
    // },
  ];

  const rows =
    kitas &&
    kitas.map((kita) => {
      console.log(kita);
      return formatData(kita);
    });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}></Paper>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5, 10, 20]}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
