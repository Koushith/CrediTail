import { View, Text } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InvoiceScreen, PaymentScreen, PaymentSuccessScreen } from "../screens";
import { headerConfig } from "../utils";

const Stack = createNativeStackNavigator();

export const Header = () => {
  const router = useRoute();

  return (
    <View>
      <Text
        style={{
          color: "#ECECEC",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 24,
        }}
      >
        {router.params.billNo}
      </Text>
      <Text
        style={{
          color: "#D0D0D0",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 16,
        }}
        ellipsizeMode="tail"
      >
        {router.params.retailerName}
      </Text>
    </View>
  );
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
            headerStyle: {
              backgroundColor: "#2A2D31",
            },

            headerTintColor: "#ECECEC",
            headerTitle: (props) => <Header />,
          }}
        />
        <Stack.Screen
          name="Success"
          component={PaymentSuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
