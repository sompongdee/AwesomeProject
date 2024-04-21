import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding : 20  }}>

            <View style={{ flexDirection: "row", padding: 10 }}>
                    <Text style={{ fontSize: 20 }}>Room Type</Text>
            </View>

            <View style={{ flexDirection : "row" }}>
                <View style={{ padding : 10}}>
                    <Image style={{width : 80 , height : 80 , borderRadius  : 20/2}} source={require("../../assets/week3/room-8.jpg")} />
                </View>
            
                <View style={{ padding : 10 }}>
                    <Text style={{ fontSize : 20 }}> Standard Twin Room</Text>
                    <Text style={{ color : 'red' , fontSize : 30 }}>$399.99</Text>
                    <Text style={{ fontSize : 14 , color : 'blue' }}> Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>    
    );
}
