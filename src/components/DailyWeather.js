const DailyWeather = (props) => {
    const {day, humidity, location, temperature, weatherType} = props.day;
    console.log(props)
    return (
        <div>
            <p>{day}</p>
        </div>
    )
}

export default DailyWeather