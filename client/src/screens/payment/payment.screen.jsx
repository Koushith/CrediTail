import { useNavigation, useRoute } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Card, Input, PaymentCard, SafeArea, Button } from "../../components";
import { getFullWidth } from "../../utils";
import { styles } from "./payment.styles";
import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import axios from "axios";

export const PaymentScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();

  const [inVoiceAmount, setInvoiceamount] = useState(0);

  const [payAmount, setPayAmount] = useState(inVoiceAmount);
  const [isLoading, setIsLoading] = useState(false);

  const billNo = router.params.billNo;

  console.log("bill no", billNo);
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

  const payment = async () => {
    //get invoice
    const { data } = await axios.get(
      `https://nodejs-production-8b92.up.railway.app/v1/invoice/${billNo}`
    );

    setInvoiceamount(data.invoice.invoiceAmount);
  };

  const makePayment = async () => {
    try {
      if (payAmount > inVoiceAmount) {
        alert("Please Pay the exact amount or less than invoice amount");
      } else {
        // alert("make payment");
        let payment = await axios.put(
          `https://nodejs-production-8b92.up.railway.app/v1/invoice/${billNo}`,
          {
            pendingAmount: payAmount,
            paymentMethod: "This shit works",
          }
        );
        console.log("paymenttttt", payment);
        if (payment) {
          console.log(payment.data.updatedDiff.retailerName);
          navigation.navigate("Success", {
            paymentMethod: "This shit works",
            billNo,
            payAmount,
            retailerName: `${payment.data.updatedDiff.retailerName}`,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    payment();
  }, [router]);
  return (
    <View style={styles.paymentScreenContainer}>
      <Card>
        <Input value={payAmount} onChangeText={(text) => setPayAmount(text)} />
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
        <Button onPress={makePayment} text="Pay Now" />
      </View>
    </View>
  );
};
