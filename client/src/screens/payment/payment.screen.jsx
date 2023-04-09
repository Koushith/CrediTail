import { useNavigation } from "@react-navigation/native";
import { Button, View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Card, Input, PaymentCard, SafeArea } from "../../components";
import { getFullWidth } from "../../utils";

export const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Card>
        <Input />
      </Card>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          marginTop: 100,
        }}
      >
        <Text style={{ fontWeight: 700, fontSize: 16, lineHeight: 14 }}>
          Choose Payment Mode
        </Text>

        <View style={{ flexDirection: "row", gap: 5, marginTop: 50 }}>
          {/* todo- rename the name */}
          <PaymentCard />
          <PaymentCard />
          <PaymentCard />
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            height: 56,
            backgroundColor: "#2760B6",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: 400, fontSize: 16 }}>
            Pay now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
