import {
  Button as ButtonV,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { ButtonBase } from "./button.styles";
import { useNavigation } from "@react-navigation/native";

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      style={{
        height: 56,
        backgroundColor: "#2760B6",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff", fontWeight: 400, fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
