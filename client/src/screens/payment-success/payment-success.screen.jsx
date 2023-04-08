import { Image, Text } from "react-native";
import { SafeArea } from "../../components";
import { SuccessContainer } from "./payment-success.styles";
import Success from "../../../assets/images/success.png";

export const PaymentSuccessScreen = () => {
  return (
    <SafeArea>
      <SuccessContainer>
        <Image source={Success} style={{ width: 60, height: 60 }} />
      </SuccessContainer>
    </SafeArea>
  );
};
