import { useState } from "react";
import "./index.scss";
import { GridColDef } from "@mui/x-data-grid";
import { Add, DataTable } from "../../components";
import { productsRows } from "../../constants/data";



const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 90,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 140,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 90,
    type: "boolean",
  },
];


const Products = () => {

  const [open,setOpen]=useState(false);
  
  return (
    <section className="products">
    <div className="products__info">
    <h1>Products</h1>
    <button onClick={()=>setOpen(true)}>Add New Products</button>
    </div>

<DataTable columns={columns} rows={productsRows}  slug="products" />
{open && <Add columns={columns} slug="products" setOpen={setOpen} />}
  </section>
  )
}

export default Products;