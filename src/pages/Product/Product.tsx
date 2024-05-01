import { Detail } from "../../components";
import { productDetail } from "../../constants/data";
import "./index.scss";

const Product = () => {
  return (
    <div>
      <Detail {...productDetail}/>
    </div>
  )
}

export default Product