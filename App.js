import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Button, Image, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import Resort from './screens/week3/Resort';
import Health from './screens/week5/Health';
import Home from './screens/week6/Home';
import FlatListExample from './screens/week6/FlatListExample';
import HomeStack from './navigations/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';
import ChartKitScreen from './screens/week5/ChartKitScreen';


export default function App() {
  return (
    // <Welcome/>
    // <Ex01/>
    // <Ex02/>
    // <Ex03/>
    // <Ex04/>
    // <Ex05/>
    // <Ex06/>
    // <Ex07/>
    // <Ex08/>
    // <Ex09/>
    // <Ex10/>
    // <Ex11/>
    // <Ex12/>
    // <Travel/>
    // <Resort/>
    // <Health/>
    // <Home />
    //<FlatListExample/>
    <NavigationContainer>
        {/* <HomeStack /> */}
        {/* <BottomTab /> */}
        <RootStack />
        {/* <ChartKitScreen /> */}
    </NavigationContainer>


    //<View style={{padding : 20}}>
      //<TextInput
      //  keyboardType="email-address"
      //  autoCapitalize="none"
      //  autoCorrect={false}
      //  maxLength={30}
       // multiline={false}
      //  placeholder="Please enter your email"
      //  returnKeyType="next"
      //  onChangeText={(text)=>{}}
       // defaultValue="Default text"
     // />
     // <Button
      //  title="Press me"
       // onPress={() => Alert.alert("Simple Button pressed")}
       // color="#665544"
     // />
     // <Text> Hello </Text>
     // <Image source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width:50, height:50 }} />
     // <View style={{ flexDirection: 'row' , justifyContent : 'space-between' , marginTop : 50}}>
     //   <Image style={{ width: 150, height: 100 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
     //   <Image style={{ width: 150, height: 150}} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
     //   <Image style={{ width: 150, height: 150, borderRadius: 150/2 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
     // </View>  

     // <FontAwesome name="heart"  size={32} color="orange" />

     //   <Greeting name='Rexxar' lastname='CS-VRU'/>
     //   <Greeting name='Jaina' lastname='CS-VRU'/>
     //   <Greeting name='Valeera' lastname='CS-VRU'/>

    //</View>

  );
}
