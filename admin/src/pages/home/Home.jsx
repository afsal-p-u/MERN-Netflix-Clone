import { useEffect, useMemo, useState } from 'react';
import axios from "axios"

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

import './home.css';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
    const MONTHS = useMemo(() => 
    [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ], []
  )

  const [userStats, setUserStats] = useState([]);

  const access = JSON.parse(localStorage.getItem('user')) 
  const accessInfo = access.accessToken

  const navigate = useNavigate()

  setInterval(()=>{
    if(localStorage.getItem('user') == null){
      navigate("/login")
    }
  }, 5000)

  window.unload = () => {
    localStorage.removeItem('user')
  }

  useEffect(() => {
    const getStats = async () => {
      try{ 
        const res = await axios.get("/users/stats", 
        {
          headers: 
          {
            token: "Bearer " + accessInfo
          }
        })
        const statsList = res.data.sort(function (a, b) {
            return a._id - b._id
        })
        statsList.map(item => setUserStats(prev => 
          [
            ...prev, 
            {name: MONTHS[item._id-1], "New User": item.total}
          ]
        ));
      }catch(err){
        console.log(err)
      }
    }
    getStats()
  }, [MONTHS])

    return(
        <div className="home">  
            <FeaturedInfo /> 
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="homeWidgets">
                <WidgetSm /> 
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home