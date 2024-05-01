
import { GridColDef } from "@mui/x-data-grid";
import { Add, DataTable } from "../../components";
import "./index.scss";
import { userRows } from "../../constants/data";
import { useState } from "react";




const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 120,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 130,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 70,
    type: "boolean",
  },
 

];
  
const Users= () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="users">
      <div className="users__info">
      <h1>Users</h1>
      <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>

<DataTable columns={columns} rows={userRows}  slug="users" />
{open && <Add columns={columns} slug="users" setOpen={setOpen} />}
    </section>
  )
}

export default Users;