import { Text, TextInput } from "react-native";

export const Input = ({ value, onChangeText }) => {
  return (
    <>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 16,
          fontWeight: 400,
          color: "#c4c4c4",
        }}
      >
        Amount
      </Text>
      <TextInput
        onChangeText={onChangeText}
        style={{
          marginTop: 12,
          height: 50,
          backgroundColor: "#24262A",
          color: "#C8C8C8",
          fontSize: 24,
          fontWeight: "400",
          borderRadius: 6,
          paddingLeft: 10,
        }}
        value={value}
      />
    </>
  );
};
