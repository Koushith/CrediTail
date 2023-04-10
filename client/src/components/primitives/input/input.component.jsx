import { Text, TextInput } from "react-native";
import { styles } from "./input.styles";

export const Input = ({ value, onChangeText }) => {
  return (
    <>
      <Text style={styles.amount}>Amount</Text>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        value={value}
        placeholder={`₹ ${value.toString()}`}
        placeholderTextColor={"#c8c8c8"}
      />
    </>
  );
};
