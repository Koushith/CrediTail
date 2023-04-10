import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";

export const InvoiceCard = ({ data }) => {
  const { billNo, retailerName, invoiceAmount } = data;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Payment", { billNo, retailerName, invoiceAmount })
      }
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
          {billNo}
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 18,

            color: "#727272",
            fontWeight: 400,
          }}
        >
          {retailerName}
        </Text>
      </View>
      <View style={{}}>
        <Text
          style={{
            fontSize: 16,
            // lineHeight: 14,

            color: "#000",
            fontWeight: 700,
          }}
        >
          ₹{invoiceAmount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
