import { menuItems } from "../../constants/data"
import "./index.scss"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="menu__container">
{
  menuItems.map((item)=>(
    <div key={item.id} className="menu__item-wrapper">
<span className="menu__title">{item.title}</span>
<div className="menu__list">
{item.listItems.map(({id,title,path,icon})=>(
  <div className="menu__list-item" key={id}>

{icon}
<Link to={path}>
<span>{title}</span>
</Link>
  </div>

))}
</div>
    </div>
  ))
}
    </div>
  )
}

export default Menu