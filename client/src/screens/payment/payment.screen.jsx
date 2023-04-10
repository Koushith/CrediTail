import { useNavigation, useRoute } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Card, Input, PaymentCard, SafeArea, Button } from "../../components";
import { getFullWidth } from "../../utils";
import { styles } from "./payment.styles";
import { useState } from "react";

export const PaymentScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();

  const paymentMethods = [
    {
      name: "Online",
      id: 1,
    },
    {
      name: "Cash",
      id: 2,
    },
    {
      name: "Cheque",
      id: 3,
    },
  ];

  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <View style={styles.paymentScreenContainer}>
      <Card>
        <Input value={router.params.invoiceAmount} />
      </Card>

      <View style={styles.actionContainer}>
        <Text style={{ fontWeight: 700, fontSize: 16, lineHeight: 14 }}>
          Choose Payment Mode
        </Text>

        <View style={{ flexDirection: "row", gap: 5, marginTop: 50 }}>
          {/* todo- rename the name */}

          {paymentMethods.map((method) => (
            <View key={method.id}>
              <PaymentCard
                method={method}
                key={method.id}
                isSelected={selectedItemId === method.id}
                onSelect={handleSelect}
              />
            </View>
          ))}
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "row" }}>
        <Button />
      </View>
    </View>
  );
};
