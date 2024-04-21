import React from 'react';
import { Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{ padding : 20  }}>
         
            <View style={{ flexDirection: "row" , justifyContent : 'space-between' , marginTop : 10 }}>
                <View style={{ borderRadius : 16 }}>
                    <Text style={{ fontSize : 20 , color : 'write'}}>9.5</Text>
                </View>
            
                <View>
                    <Text style={{ fontSize: 20 , color : 'orange'}}>Excellent</Text>
                    <Text style={{ fontSize: 20 , color: "gray" }}>See 801 reviews</Text>
                </View>

            </View>
        </View>
         
    );
}