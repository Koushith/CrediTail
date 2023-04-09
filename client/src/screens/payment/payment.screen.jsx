import { useNavigation, useRoute } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Card, Input, PaymentCard, SafeArea, Button } from "../../components";
import { getFullWidth } from "../../utils";
import { styles } from "./payment.styles";

export const PaymentScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();
  console.log("params.", router.params.billNo);

  return (
    <View style={styles.paymentScreenContainer}>
      <Card>
        <Input />
      </Card>

      <View style={styles.actionContainer}>
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
        <Button />
      </View>
    </View>
  );
};
