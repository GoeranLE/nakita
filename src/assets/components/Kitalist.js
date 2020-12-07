import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default function Kitalist() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 6,
  // });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        // {...data}
      />
    </div>
  );
}
