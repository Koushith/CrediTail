import { Button, Text } from "react-native";
import { SafeArea } from "../../components";
import { useNavigation } from "@react-navigation/native";

export const InvoiceScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeArea>
      <Text>Invoice</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Payment")}
      />
    </SafeArea>
  );
};
