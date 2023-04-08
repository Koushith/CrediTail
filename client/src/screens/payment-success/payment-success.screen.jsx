import { Text } from "react-native";
import { SafeArea } from "../../components";
import { SuccessContainer } from "./payment-success.styles";

export const PaymentSuccessScreen = () => {
  return (
    <SafeArea>
      <SuccessContainer>
        <Text>PaymentSuccessScreen Screen</Text>
      </SuccessContainer>
    </SafeArea>
  );
};
