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
import { Button, Card, SafeArea } from "./src/components";
import { Navigation } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes/theme";

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
    <ThemeProvider theme={theme}>
      <Navigation />
      <StatusBar style="auto" StatusBarStyle="auto" />
    </ThemeProvider>
  );
}
