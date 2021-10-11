import { dummydata } from "../DummyData/dummyData"
import DailyWeather from "./DailyWeather"
import { Link } from "react-router-dom"

const WeeklyWeather = () => {
    return( 
        <div>
            {
                dummydata.map((day, index) => {
                   return <Link to={`/weather/${index}`}><DailyWeather key={index} day={day} index={index}/></Link>
                })
            }
        </div>
    )
}

export default WeeklyWeather