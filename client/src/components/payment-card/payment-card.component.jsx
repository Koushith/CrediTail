import { Text } from "react-native";
import { PaymentMethodContainer, styles } from "./payment-card.styles";

export const PaymentCard = (props) => {
  const { item, isSelected, onSelect, onPress, method, ...rest } = props;
  // const backgroundColor = isSelected ? "#DFE8F4" : "#EFEFEF";

  return (
    <PaymentMethodContainer
      onClick={() => onSelect(item.id)}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{method.name}</Text>
    </PaymentMethodContainer>
  );
};
