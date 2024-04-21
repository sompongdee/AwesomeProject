import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ flexDirection : 'column' , padding : 20}}>
                <Text style={{ fontSize : 20 , textAlign: 'left' }}>Location </Text>
                <Text style={{ color : '#444444' , textAlign : 'left'}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>

        </View>    
    );
}
