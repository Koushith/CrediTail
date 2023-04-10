import { Text } from "react-native";
import { PaymentMethodContainer } from "./payment-card.styles";
import { useState } from "react";

export const PaymentCard = (props) => {
  const { method } = props;

  // const [isSelected, setIsSelectd] = useState(false);

  const { item, isSelected, onSelect } = props;
  const backgroundColor = isSelected ? "#DFE8F4" : "#EFEFEF";

  return (
    <PaymentMethodContainer
      style={{ backgroundColor }}
      onClick={() => onSelect(item.id)}
      role="button"
      tabIndex={0}
    >
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          color: "#2f2f2f",
          fontWeight: 400,
        }}
      >
        {method.name}
      </Text>
    </PaymentMethodContainer>
  );
};
