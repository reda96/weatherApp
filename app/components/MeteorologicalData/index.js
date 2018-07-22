import React, {Component} from 'react';
import {AppRegistry,StyleSheet, Text, View,Image} from 'react-native';
import weatherapp from '../../../App.js';
export default class MeteorologicalData extends Component {
state ={
  name:[],
  temperature:[],
  visiblity:[],
  humadity:[],
  clouds:[],
  pressure:[],
  wind:[]

};

componentDidMount(){
  return fetch('http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=2ba1e326aea1c4868bb0befc30b5c038')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        name:responseJson.name,
        temperature: responseJson.main.temp,
        visiblity: responseJson.visibility,
        humidity: responseJson.main.humidity,
        pressure: responseJson.main.pressure,
        wind: responseJson.wind.speed
      });

    })
    .catch((error) =>{
      console.error(error);
    });
}
render(){
const temp = this.state.temperature - 273.15;
const  tempValue=(temp) + " \u2103";
return( <View style={styles.backdropView}>

<Text style={styles.titleText}>{this.state.name} </Text>


<View style={styles.backdropView2}>
<Image source={require('../../../assets/sun.png')} style={styles.imageright}  />
<Text style ={styles.tempText}>{tempValue}</Text>

</View>

        <View  style={styles.backdropView3} >
        <Text style={styles.left}>Humidity</Text>
        <Text style={styles.right}>{this.state.humidity}%</Text>
        </View>

        <View  style={styles.backdropView4}>
        <Text style={styles.left}>Pressure</Text>
        <Text style={styles.right}>{this.state.pressure}</Text>
        </View>

        <View  style={styles.backdropView5}>
        <Text style={styles.left}>Wind</Text>
        <Text style={styles.right}>{this.state.wind} kph</Text>
        </View>
</View>);


}

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems:'center',
   justifyContent: 'center',
   paddingTop: 22
  },
topedge :{
  position: 'absolute',
  top: 10,
  alignItems:'center',
  justifyContent: 'center',
  flex:1

},

tempText:{
  color:'white',
  fontSize:50,
  left:100
},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }  ,
  titleText: {
    position: 'absolute',
    top: 10,
   fontSize: 40,
   fontWeight: 'bold',
   color:'white'
 },
  backdrop: {
    paddingTop: 60,
    width: 320,
    height: 120
  },
  backdropView: {
    position: 'absolute',
    top: 50,
    height: 500,
    width: 380,
    flex:0.5,
    borderWidth:1,
    borderStyle:'solid',
    backgroundColor: 'rgba(0  ,0,0,0.5)',
    alignItems:'center',
    justifyContent: 'center'
  },

  backdropView2: {
    position: 'absolute',
    top: 100,
    height:100,

    width: 380,
    flex:1,
    borderWidth:1,
    borderStyle:'solid',
    backgroundColor: 'rgba(25 ,25,25,0.5)',
    alignItems:'center',
    justifyContent: 'center'
  },
  backdropView3: {
    position: 'absolute',
    top: 250,
    height:50,

    width: 380,
    flex:1,
    borderWidth:1,
    borderStyle:'solid',
    backgroundColor: 'rgba(50 ,50,50,0.4)',
    alignItems:'center',
    justifyContent: 'center'
  },
  backdropView4: {
    position: 'absolute',
    top: 350,
    height:50,

    width: 380,
    flex:1,
    borderWidth:1,
    borderStyle:'solid',
    backgroundColor: 'rgba(50 ,50,50,0.4)',
    alignItems:'center',
    justifyContent: 'center'
  },
  backdropView5: {
    position: 'absolute',
    top: 450,
    height:50,
    width: 380,
    flex:1,
    borderWidth:1,
    borderStyle:'solid',
    backgroundColor: 'rgba(50 ,50,50,0.4)',
    alignItems:'center',
    justifyContent: 'center'
  },
  left:{
      position: 'absolute',
    color:'white',
    left:50,
    fontSize:20
  },
  right:{
      position: 'absolute',
    color:'white',
    right:50,
    fontSize:20
  },
  imageright:{
    position: 'absolute',
   flex:0.3,
   width: 100, height: 90,
  left:50,
  alignSelf: 'stretch'
  }
});
AppRegistry.registerComponent('MeteorologicalData',()=>weatherapp);
