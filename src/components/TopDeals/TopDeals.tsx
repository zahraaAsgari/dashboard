import { topDealUsers } from "../../constants/data"
import  "./index.scss"
const TopDeals = () => {
  return (
    <aside className="top__container">
<h1>Top Deals</h1>
<div className="top__lists">
    {topDealUsers.map(({id,imgUrl,name,email,amount})=>(
        <div className="top__list" key={id}>
<div className="top__list-left">
        <img src={imgUrl} alt={name} />
        <div className="top__left-info">
            <span>{name}</span>
            <span>{email}</span>
        </div>
</div>
<div className="top__list-right">
    <span>${amount}</span>
</div>
        </div>
    ))}
</div>
    </aside>
  )
}

export default TopDeals