import {
  Button as ButtonV,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { ButtonBase } from "./button.styles";

export const Button = () => {
  return (
    <TouchableOpacity
      style={{
        height: 56,
        backgroundColor: "#2760B6",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => navigation.navigate("Success")}
    >
      <Text style={{ color: "#fff", fontWeight: 400, fontSize: 16 }}>
        Pay now
      </Text>
    </TouchableOpacity>
  );
};
