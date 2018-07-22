import React, {Component} from 'react';
import {setNativeExceptionHandler} from 'react-native-exception-handler';
import {AppRegistry,StyleSheet,FlatList,ListView, Text, View,Image, ImageBackground} from 'react-native';
import MeteorologicalData from './app/components/MeteorologicalData/index';
const back = require('./assets/homebg.png');
import {setJSExceptionHandler, getJSExceptionHandler} from 'react-native-exception-handler';
const ensureComponentIsNative = require('ensureComponentIsNative');



setJSExceptionHandler((error, isFatal) => {
  Alert.alert(
    'Exception',
    error,
    [

      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
  });

export default class weatherapp extends Component {


state={
  curTime:[]
}


   render() {
     const currentHandler = getJSExceptionHandler();

      return (

       <ImageBackground style = {styles.container}    source={require('./assets/homebg.png')}>
          <MeteorologicalData />
          </ImageBackground>
  );
    }
  }



const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems:'center',
   justifyContent: 'center',
   paddingTop: 22
  },
  sun:{
    backgroundColor :'yellow'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }, backdrop: {
    paddingTop: 60,
    width: 300,
    height: 120
  },
  backdropView: {
    height: 120,
    width: 320,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
});
AppRegistry.registerComponent('weatherapp',()=>weatherapp);
