import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GPS from "../../helpers/GPS";
import MyMapView from "../../components/week10/MyMapView";

export default function Location() {
    const [location, setLocation] = useState(null);

    const onLoad = async () => {
        let loc = await GPS.getLocation();
        if (loc) {
            //console.log("Location : ", loc);
            setLocation(loc);
        }
    };
    useEffect(() => {
        console.log("ENTER SCREEN");
        onLoad();
    }, []);


    //TOP RIGHT MENU
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{ paddingRight: 20 }}
                    onPress={() => { navigation.navigate("LocationQuiz"); }}
                >
                    <Text>Quiz</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    //SCREEN UI
    return (
        <View style={{ flex: 1 }}>
            <Text>{location ? new Date(location.timestamp).toString() : "-"}</Text>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: "#50E3C2" }}>
            </View>

            <View style={{ flex: 1 }}>
                <MyMapView location={location}
                    setLocation={setLocation} />
            </View>
        </View>

    );
}
