import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { userDetailsProps } from "../../types";
import "./index.scss";

const Detail = ({img,title,info,chart,activities}:userDetailsProps) => {
  return (
    <div className="detail">
      <div className="detail__view">
        <div className="detail__info">
          <div className="detail__info-top">
            {img && <img src={img} alt="" />}
            <h1>{title}</h1>
            <button>Update</button>
          </div>
          <div className="detail__info-items">
            {Object.entries(info).map((item) => (
              <div className="detail__info-item" key={item[0]}>
                <span>{item[0]} {""}:</span>
                <span>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {chart && (
          <div className="detail__chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={200}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="detail__activities">
        <h2>Latest Activities</h2>
        {activities && (
          <ul>
            {activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Detail