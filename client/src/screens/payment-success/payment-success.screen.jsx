import { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { TextSecondary, TextXL } from "../../components";
import { SuccessContainer, styles } from "./payment-success.styles";
import { useInvoices } from "../../context";
import Success from "../../assets/images/success.png";

export const PaymentSuccessScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const { getAllInvoices } = useInvoices();

  const redirectToHome = () => {
    navigation.navigate("Invoice");
  };

  useEffect(() => {
    const timeOutId = setTimeout(redirectToHome, 6000);
    getAllInvoices();
    return () => {
      clearTimeout(timeOutId);
    };
  }, [router]);

  return (
    <>
      <SuccessContainer>
        <Image source={Success} style={styles.successImage} />
        <TextSecondary style={styles.billNo}>
          {router.params.billNo}
        </TextSecondary>

        <TextXL style={styles.payAmount}>
          ₹{`${router.params.payAmount}`}
        </TextXL>

        <Text style={styles.retailerName}>{router.params.retailerName}</Text>

        <View style={styles.seperator}></View>
        <Text style={styles.paymentMethod}>{router.params.paymentMethod}</Text>
      </SuccessContainer>
      <View style={styles.bottom}>
        <Text style={styles.redirect}>Redirecting to home screen..</Text>
      </View>
    </>
  );
};
