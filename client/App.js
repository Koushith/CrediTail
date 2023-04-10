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
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { InvoiceProvider, PaymentProvider, useInvoices } from "./src/context";
import { useEffect } from "react";

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
      <InvoiceProvider>
        <PaymentProvider>
          <Navigation />
          <StatusBar style="auto" StatusBarStyle="auto" />
        </PaymentProvider>
      </InvoiceProvider>
    </ThemeProvider>
  );
}
