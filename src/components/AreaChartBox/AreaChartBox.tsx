import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./index.scss"
import { areaChartProps } from "../../types"
import { areaChartData } from "../../constants/data"



const AreaChartBox = ({name,clothes,electronic,books}:areaChartProps) => {
  return (
    <section className="area__info">
        <span>Revenue Analysis</span>
        <div className="area__chart">
          <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={areaChartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey={name} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={books} stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey={clothes} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey={electronic} stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </section>
  )
}

export default AreaChartBox