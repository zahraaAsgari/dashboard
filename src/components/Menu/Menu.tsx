import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../constants/data";

const Menu = () => {
  return (
    <div className="menu__container">
{
  menu.map((item)=>(
    <div key={item.id} className="menu__item-wrapper">
<span className="menu__title">{item.title}</span>
<div className="menu__list">
{item.listItems.map(({id,title,url,icon})=>(
    <div className="menu__list-item" key={id}>
                <img src={icon} alt={title} className="menu__icon" />
<Link to={url}>
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

export default Menu;
