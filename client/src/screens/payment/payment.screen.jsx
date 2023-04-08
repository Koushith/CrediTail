import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { Text } from "react-native";

export const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text>PaymentScreen Screen</Text>
      <Button
        title="Go to Success"
        onPress={() => navigation.navigate("PaymentSuccess")}
      />
    </>
  );
};
