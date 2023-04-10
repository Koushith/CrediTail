import { Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress, text, isDisabled = false }) => {
  return (
    <TouchableOpacity
      style={{
        height: 56,
        backgroundColor: isDisabled ? "#EFEFEF" : "#2760B6",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      disabled={isDisabled}
      onPress={onPress}
    >
      <Text
        style={{
          color: isDisabled ? "#5F5F5F " : "#FFFFFF",
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
