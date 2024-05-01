
import "./index.scss"
import { Link } from 'react-router-dom';
import { LineChart,Line, ResponsiveContainer, Tooltip } from 'recharts';
import { chartProps } from "../../types";

const LineChartBox = ({
    color,
    icon,
    title,
    dataKey,
    number,
    percentage,
    chartData}
    :chartProps) => {
  return (
    <section className="line">
        <div className="line__info">
            <div className="line__total">
         <span>{icon}</span> 
         <span>{title}</span>
            </div>
            <span className="line__total-number">{number}</span>
            <Link to="#" style={{color}}>view all</Link>
        </div>
     <div className="line__chart-info">
     <div className="line__chart">
        <ResponsiveContainer width="99%" height="100%">
        <LineChart data={chartData}>
          <Tooltip
          contentStyle={{background:"transparent",border:"none"}}
          labelStyle={{display:"none"}}
          position={{x:12,y:50}}
          />
          <Line type="monotone" dot={false} dataKey={dataKey} stroke={color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
        </div>
        <div className="line__chart-text">
            <span style={{color:percentage<0 ? "tomato":"limegreen"}}>{percentage}%</span>
            <span>this month</span>
        </div>
     </div>
    </section>
  )
}

export default LineChartBox;