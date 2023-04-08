import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Card, SafeArea } from "./src/components";

export default function App() {
  let fontsLoaded = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,

    Poppins_400Regular,
    Poppins_500Medium,

    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeArea>
      {/* <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 30 }}>
        Open up App.js to start working on your app!
      </Text> */}

      <Card />
      <StatusBar style="auto" />
    </SafeArea>
  );
}
