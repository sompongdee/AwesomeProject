import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from 'react-native';
export default function Section2() {
    return (
        <View style={{ padding : 20 , marginTop : 10 }}>
            
            <Text style={{fontSize : 20 , textAlign : 'center'}}> Hilton San Francisco</Text>
          
        
            <View style={{ flexDirection : "row" }}>
                <View style={{ flexDirection : "row" , padding : 30 }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
            </View>
        
            <View style={{ marginTop : 10}}>
                <Text  style={{ fontSize : 14 , color : 'gray' , textAlign : 'center'}} >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>
    
 
    );
}
