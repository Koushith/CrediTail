import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./invoice-card.styles";

export const InvoiceCard = ({ data }) => {
  const { billNo, retailerName, invoiceAmount } = data;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Payment", { billNo, retailerName, invoiceAmount })
      }
      style={styles.cardContainer}
    >
      <View>
        <Text style={styles.billNo}>{billNo}</Text>
        <Text style={styles.retailerName}>{retailerName}</Text>
      </View>
      <View style={{}}>
        <Text style={styles.inVoiceAmount}>₹{invoiceAmount}</Text>
      </View>
    </TouchableOpacity>
  );
};
