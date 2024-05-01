 import { AreaChartBox, BarChartBox, LineChartBox, PieChartBox, TopDeals } from "../../components"
import {  barChartRevenue, barChartVisit, productsLineChart, ratioLineChart, revenueLineChart, userLineChart } from "../../constants/data"
import "./index.scss"





const Home = () => {
  return (
    <div className="home__container">
    <div className="box box1">
      <TopDeals/>
    </div>
    <div className="box box2">
      <LineChartBox {...revenueLineChart}/>
      </div>
    <div className="box box3">
      <LineChartBox
     {...productsLineChart}/>
     </div>
    <div className="box box4"><PieChartBox/></div>
    <div className="box box5">
      <LineChartBox {...userLineChart}/>
      </div>
    <div className="box box6">
      <LineChartBox {...ratioLineChart}/>
      </div>
    <div className="box box7"><AreaChartBox name="name" books="books" electronic="electronic" clothes="clothes"/></div>
    <div className="box box8"><BarChartBox {...barChartVisit}/></div>
    <div className="box box9"><BarChartBox {...barChartRevenue}/></div>
    </div>
  )
}

export default Home