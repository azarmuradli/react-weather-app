import React, { Component } from 'react'
import {connect} from "react-redux"
import Chart from "./Chart"
import GoogleMap from "./GoogleMap"


 class WeatherList extends Component {
     WeatherList=api=>{
         let name=api.city.name
         let tempList=api.list.map(weather=> weather.main.temp)
         let pressure=api.list.map(weather=> weather.main.pressure)
         let humidity=api.list.map(weather=> weather.main.humidity)
         let {lon,lat}=api.city.coord;
      return (
        <tr key={name}>
      <td>
          <GoogleMap lon={lon} lat={lat}  />
      </td>
      <td>
         <Chart data={tempList} color="red" units="K"/>
      </td>
      <td>
         <Chart data={pressure} color="green" units="hPa"/>
      </td>
      <td>
         <Chart data={humidity} color="black" units="%"/>
      </td>
     
    </tr>
      )
     }
    render() {
       console.log(this.props.weather);
       
        
        return (
            <React.Fragment>
            <table className="table table-hover">

                    <tr>
                        <th>City</th>
                        <th>Teamperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                    {this.props.weather.map(this.WeatherList)}
            </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps=state=>{
    return {
        weather:state.weather
    }
}

export default connect(mapStateToProps)(WeatherList)
