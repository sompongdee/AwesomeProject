import React from "react";
import {  View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    
      
      <View style={{ flexDirection : "row"  }}>
        <MyIcon title="Hotel" name="building" size={30} color="orange" />
        <MyIcon title="Tour" name="map-marker" size={30} color="orange" />
        <MyIcon title="Car" name="car" size={30} color="orange" />
        <MyIcon title="Flight" name="plane" size={30} color="orange" />
        <MyIcon title="Tour" name="map-marker" size={30} color="orange" />
      </View>
      
  
  );
}
