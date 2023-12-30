import { StatusBar } from "expo-status-bar";
import {Box, NativeBaseProvider, Text, View} from "native-base"
import HomeScreen from "./src/Screens/HomeScreens";
import LoginScreen from "./src/Screens/LoginScreens";


export default function App(){
  return(
    <NativeBaseProvider>
      <LoginScreen/>
    </NativeBaseProvider>
  );
}