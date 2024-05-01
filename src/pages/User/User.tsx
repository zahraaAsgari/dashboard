import { Detail } from "../../components";
import { UserDetails } from "../../constants/data";
import "./index.scss";

const User = () => {
  return (
    <div>
        <Detail {...UserDetails}/>
    </div>
  )
}

export default User