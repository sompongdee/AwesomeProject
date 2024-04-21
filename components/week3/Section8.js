import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Section8() {
    return (
        <View style={{ padding : 20  }}>
         
            <View style={{ flexDirection: "row" , justifyContent : 'space-between' , marginTop : 10 }}>
                <View style={{ flexDirection : 'column'}}>
                    <Text style={{ fontSize : 20 , color : 'black'}}>Price</Text>
                    <Text style={{ fontSize: 30 , color : 'red'}}>$399.99</Text>
                    <Text style={{ fontSize: 20 , color: "black" }}>AVG/Night</Text>
                </View>
                <View style={{ marginTop : 20 , padding : 20}}>
                    <Button title="Book Now" onPress={() => Alert.alert("Simple Button pressed")} color={'red'}/>

                </View>
            </View>
        </View>
         
    );
}