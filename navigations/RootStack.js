import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";
import TodoList from "../screens/week9/TodoList";
import YourHealth from "../components/week9/YourHealth";
import Book from "../screens/week9/Book";
import BookDetail from "../screens/week9/BookDetail";
import BookForm from "../screens/week9/BookForm";
import Location from "../screens/week10/Location";
import LocationQuiz from "../screens/week10/LocationQuiz";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
      <Stack.Screen name="TodoList" component={TodoList} />
      <Stack.Screen name="YourHealth" component={YourHealth} />
      <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: "Book Detail" }} />
      <Stack.Screen name="BookForm" component={BookForm}   />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="LocationQuiz" component={LocationQuiz} />


    </Stack.Navigator>
  );
}
