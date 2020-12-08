import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Kitalist({kitas, userInput }) {


  const formatData = ({id, name, address, plz, district}) => {
    return { id, name, address, plz, district };
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Kita Name', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'district', headerName: 'District', width: 130 },
    {
      field: 'plz',
      headerName: 'PLZ',
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

  const rows = kitas && kitas.map(kita => {
    console.log(kita)
    return formatData(kita)
  })
  
  const classes = useStyles();

  return (
    <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
    </>
  );
}





