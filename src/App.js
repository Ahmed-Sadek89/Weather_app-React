import React , {Component} from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Weather from './Components/Weather/Weather';



const API_Key = 'd9e847e2bd4f83763ebd0187db1ddd74';

class App extends Component{
  
  state = {
    city :'',
    country :'',
    temp: '',
    weather_description:'',
    temp_min: '',
    temp_max: '',
    error_msg: ''
  }

  handleSubmit = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const API_Link = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`);
    const toJSON = await API_Link.json();
     console.log(toJSON); // => get all info about the weather of your selected city 
    if( city )
    {
      try // try X catch => for check if city is really found مش هبد و خلاص
      {  
        this.setState({
          city : toJSON.name ,
          country : toJSON.sys.country ,
          temp: toJSON.main.temp ,
          weather_description:toJSON.weather[0].description ,
          temp_min: toJSON.main.temp_min ,
          temp_max: toJSON.main.temp_max ,
          error_msg:''
        });
      }
      catch( ex ) 
      {
        this.setState({
          city : '' ,
          country : '' ,
          temp: '' ,
          weather_description:'' ,
          temp_min: '' ,
          temp_max: '' ,
          error_msg:`${toJSON.cod} ${toJSON.message}`
        });
      }
    }
    else
    {
      this.setState({
        
        error_msg:`${toJSON.cod} ${toJSON.message}`
      });
    }
  }

  render(){
    return(
      <div className="App">
        <Form handleSubmit={this.handleSubmit} />
        <Weather
        city = {this.state.city}
        country = {this.state.country}
        temp= {this.state.temp}
        weather_description={this.state.weather_description}
        temp_min= {this.state.temp_min}
        temp_max= {this.state.temp_max}
        error_msg={this.state.error_msg}
        />
      </div>
    );
  }
}

export default App;
