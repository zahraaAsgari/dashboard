import { DataGrid, GridCellParams, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./index.scss";
import { columnsProps } from "../../types";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { LuView } from "react-icons/lu";




  

export const DataTable=({columns,slug,rows}:columnsProps)=>{

   const actionColumns:GridColDef ={
        field: "action",
        headerName: "Action",
        width: 140,
    renderCell:(params:GridCellParams) => {
      return (
<div className="user__action">
  <Link className="user__action-edit" to={`/${slug}/${params.row.id}`}>
  <LuView />
  </Link>
  <div className="user__action-delete">
  <MdDeleteOutline />
  </div>
</div>
      );
    },
  };


 
    return(
        <div className="table" style={{ height: 580, maxWidth: '99%' }}>
            <DataGrid
            className="table__grid"
        rows={rows}
        columns={[...columns,actionColumns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{ 
                 showQuickFilter:true,
                 quickFilterProps:{debounceMs:500},
                
                }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
        disableColumnFilter
      /></div>
    )
}
export default DataTable;