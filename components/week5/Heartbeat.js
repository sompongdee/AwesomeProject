import React ,{useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {  
    const [count,setCount] = useState (0);
    
    return (
        <View  style={{flexDirection : "row", flex : 1 , padding : 10 , justifyContent : "space-around" , borderRadius : 10 , height : 100 , alignItems : "center", marginRight : 10}} >
                
                
                <TouchableOpacity onPress={()=> setCount(count+1) } >
                <FontAwesome name="heart"  size={32} color="orange" />
                </TouchableOpacity>
                    <Text style={{fontSize : 20 }}>{count}</Text>
            </View>
    );
}
