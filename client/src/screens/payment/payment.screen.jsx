import { Text } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import { Card, Input, PaymentCard, Button } from "../../components";
import { styles } from "./payment.styles";
import { paymentMethods } from "../../utils";

export const PaymentScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();

  const [inVoiceAmount, setInvoiceamount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const [payAmount, setPayAmount] = useState(router.params.invoiceAmount);
  const [isDisabled, setIsDisabled] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const billNo = router.params.billNo;

  const [selectedItemId, setSelectedItemId] = useState(null);

  const paymentMethodSelector = (id) => {
    setIsDisabled(false);
    switch (id) {
      case id === 1:
        setPaymentMethod("Online");
        return;
      case id === 2:
        setPaymentMethod("Cash");
        return;
      case id === 3:
        setPaymentMethod("Online");
        return;
      default:
        setPaymentMethod("Cheque");
    }
  };

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
      if (payAmount.length > 0 && payAmount > inVoiceAmount) {
        alert("Please Pay the exact amount or less than invoice amount");
      } else {
        // alert("make payment");
        setIsLoading(true);
        let payment = await axios.put(
          `https://nodejs-production-8b92.up.railway.app/v1/invoice/${billNo}`,
          {
            pendingAmount: payAmount,
            paymentMethod: paymentMethod,
          }
        );

        if (payment) {
          setIsLoading(false);
          console.log(payment.data.updatedDiff.retailerName);
          navigation.navigate("Success", {
            paymentMethod: paymentMethod,
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
  }, []);

  return (
    <View style={styles.paymentScreenContainer}>
      <Card>
        <Input value={payAmount} onChangeText={(text) => setPayAmount(text)} />
      </Card>

      <View style={styles.actionContainer}>
        <Text style={styles.paymentHeading}>Choose Payment Mode</Text>

        <View style={styles.cardContainer}>
          {paymentMethods.map((method) => (
            <View key={method.id}>
              <PaymentCard
                method={method}
                key={method.id}
                isSelected={selectedItemId === method.id}
                onSelect={handleSelect}
                onPress={() => paymentMethodSelector(method.id)}
              />
            </View>
          ))}
        </View>
      </View>
      {isLoading && <ActivityIndicator size="large" />}

      <View style={styles.buttonContainer}>
        <Button onPress={makePayment} text="Pay Now" isDisabled={isDisabled} />
      </View>
    </View>
  );
};
