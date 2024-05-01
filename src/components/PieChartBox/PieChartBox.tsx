import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./index.scss";
import { pieChartData } from "../../constants/data";


const PieChartBox = () => {
  return (
    <section className="pie__info">
        <span>Leads By Source</span>
        <div className="pie__chart">
        <ResponsiveContainer width="99%" height="100%">
        <PieChart>
            <Tooltip
            contentStyle={{background:"white",borderRadius:".5rem"}}
            />
          <Pie
            data={pieChartData}
            outerRadius={100}
            innerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map(({color,name}) => (
              <Cell key={name} fill={color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="pie__options">
        {pieChartData.map(({color,name,value})=>(
<div key={name} className="pie__option">
<div className="pie__option_title">
    <div className="pie__title-circle" style={{background:color}}/>
    <span>{name}</span>
</div>
<span>{value}</span>

</div>
        ))}
      </div>
    </section>
  )
}

export default PieChartBox


