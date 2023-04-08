import { Image, Platform, Text, View } from "react-native";
import { SafeArea, TextSecondary, TextXL } from "../../components";
import { SuccessContainer } from "./payment-success.styles";
import Success from "../../assets/images/success.png";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const PaymentSuccessScreen = () => {
  const navigation = useNavigation();

  const redirectToHome = () => {
    navigation.navigate("Invoice");
  };
  useEffect(() => {
    const timeOutId = setTimeout(redirectToHome, 3000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  const isIOS = Platform.OS === "ios";

  if (isIOS) {
    let Fullscreen;
  }

  return (
    <SafeArea>
      <SuccessContainer>
        <Image source={Success} style={{ width: 60, height: 60 }} />
        <TextSecondary style={{ color: "#EFEFEF", marginTop: 30 }}>
          MD22/1107651
        </TextSecondary>
        <TextXL style={{ color: "#fff", marginTop: 16 }}>₹500</TextXL>

        <Text
          style={{
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 21,
            color: "#EFEFEF",
            marginTop: 30,
          }}
        >
          AGRAWAL BROTHERS AND SONS
        </Text>

        <View
          style={{
            marginTop: 43,
            width: "80%",
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "#f4f4f4",
          }}
        ></View>

        <Text
          style={{
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 24,
            color: "#fff",
            marginTop: 28,
          }}
        >
          PAID BY CASH
        </Text>
      </SuccessContainer>
      <View
        style={{
          backgroundColor: "#188748",

          // backgroundColor: "188748",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 21,
            color: "#EFEFEF",
            marginBottom: 30,
          }}
        >
          Redirecting to home screen..
        </Text>
      </View>
    </SafeArea>
  );
};
