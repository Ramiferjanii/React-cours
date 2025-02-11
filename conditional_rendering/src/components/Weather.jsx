
const Weather = () => {
    let temp = 3 ; 
    if (temp < 15 ) {
        return <h2> its cold outside </h2>
    } else if (temp < 25 && temp > 15 ) {
        return <h2>its nice outside </h2>
    } else {
        return <h2>its hot outside </h2> 
        
    }





}

export default Weather
