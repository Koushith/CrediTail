import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";

export const InvoiceCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Payment")}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 12,
        paddingBottom: 12,
        height: 62,
        backgroundColor: "#fff",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 21,

            color: "#646464",
            fontWeight: 700,
          }}
        >
          MD22/110656
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 18,

            color: "#727272",
            fontWeight: 400,
          }}
        >
          PADMAMBA PRINTERS
        </Text>
      </View>
      <View style={{}}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 14,

            color: "#000",
            fontWeight: 700,
          }}
        >
          ₹5
        </Text>
      </View>
    </TouchableOpacity>
  );
};
