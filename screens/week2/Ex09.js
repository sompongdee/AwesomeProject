import React from 'react';
import { View } from 'react-native';

export default function Ex09() {
  return (
    <View style={{ flex : 1 ,flexDirection : 'column' , justifyContent : 'space-around'}}>
      <View style={{ flexDirection : 'row' , flexWrap : 'wrap' , justifyContent : 'space-between' ,alignItems : 'flex-start'}}>
       <View style={{ backgroundColor : '#50E3C2' , height : 100 , width : 100 }}></View>
       <View style={{ backgroundColor : '#4A90E2' , height : 100 , width : 100 }}></View>
       <View style={{ backgroundColor : '#9013FE' , height : 100 , width : 100 }}></View>  
      </View>

     <View style={{ flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center'}}>
      <View style={{ backgroundColor : '#50E3C2' , height : 100 , width : 100 }}></View>
      <View style={{ backgroundColor : '#4A90E2' , height : 100 , width : 100 }}></View>
      <View style={{ backgroundColor : '#9013FE' , height : 100 , width : 100 }}></View> 
      </View>

      <View style={{ flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'flex-end'}}>
        <View style={{ backgroundColor : '#50E3C2' , height : 100 , width : 100 }}></View>
        <View style={{ backgroundColor : '#4A90E2' , height : 100 , width : 100 }}></View>
        <View style={{ backgroundColor : '#9013FE' , height : 100 , width : 100 }}></View> 
      </View>
    
    </View>
  );
}
