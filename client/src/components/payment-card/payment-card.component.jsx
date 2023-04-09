import { Text } from "react-native";
import { PaymentMethodContainer } from "./payment-card.styles";

export const PaymentCard = () => {
  return (
    <PaymentMethodContainer>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          color: "#2f2f2f",
          fontWeight: 400,
        }}
      >
        Online
      </Text>
    </PaymentMethodContainer>
  );
};
