const DailyWeather = (props) => {
    const {day, humidity, location, temperature, weatherType} = props.day;
    console.log(props)
    return (
        <div className='dailyDiv'>
            <h2 className='dailyDay'>{day}</h2>
            <h3 className='dailyTemp'>{temperature}</h3>
            <h3 className='dailyType'>{weatherType}</h3>
            <h4 className='dailyHumidity'>{humidity}</h4>
            <h4 className='dailyLocation'>{location}</h4>
        </div>
    )
}

export default DailyWeather