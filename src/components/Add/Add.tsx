import { IoCloseCircleOutline } from "react-icons/io5";
import { columnsProps } from "../../types";
import "./index.scss";

interface AddProps extends columnsProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Add: React.FC<AddProps>= ({slug,columns,setOpen}) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    setOpen(false);
  };
  return (
    <div className="add">
    <div className="add__modal">
      <span className="close" onClick={() =>setOpen(false)}>
      <IoCloseCircleOutline />
      </span>
      <h1>Add new {slug}</h1>
      <form onSubmit={handleSubmit}>
        {columns
          .filter((item) => item.field !== "id" && item.field !== "img")
          .map((column,index) => (
            <div className="add__modal-item" key={index}>
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.field} />
            </div>
          ))}
        <button>Send</button>
      </form>
    </div>
  </div>
  )
}

export default Add