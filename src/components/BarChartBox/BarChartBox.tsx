
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./index.scss";
import { barChartProps } from "../../types";



const BarChartBox = ({title,color,dataKey,chartData}:barChartProps) => {
  return (
    <section className="bar__info">
        <span>{title}</span>
        <ResponsiveContainer width="99%" height="100%">
        <BarChart width={150} height={40} data={chartData}>
            <Tooltip
            contentStyle={{background:"#2a3447",borderRadius:".5rem"}}
            labelStyle={{display:"none"}}
            />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}

export default BarChartBox