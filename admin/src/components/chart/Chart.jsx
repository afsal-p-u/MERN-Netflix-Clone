import { 
    CartesianGrid, 
    Line,
    LineChart,
    Tooltip,
    XAxis,
    ResponsiveContainer
} from "recharts";
 
import './chart.css';

const Chart = ({ title, grid, dataKey, data}) => {
    return(
        <div className="chart">
            <div className="chartTitle">{title}</div>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart 