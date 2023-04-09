import { Button, ScrollView, Text, View } from "react-native";
import { InvoiceCard, SafeArea } from "../../components";
import { useNavigation } from "@react-navigation/native";

export const InvoiceScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{ backgroundColor: "#ECECEC", marginTop: 0 }}>
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />

        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />

        {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Payment")}
      /> */}
      </ScrollView>
    </>
  );
};
