import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InvoiceScreen, PaymentScreen, PaymentSuccessScreen } from "../screens";
import { View, Text } from "react-native";
const Stack = createNativeStackNavigator();

const headerConfig = {
  headerStyle: {
    backgroundColor: "#2A2D31",
  },

  headerTintColor: "#ECECEC",
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Invoice"
          component={InvoiceScreen}
          options={headerConfig}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            ...headerConfig,
          }}
        />
        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
