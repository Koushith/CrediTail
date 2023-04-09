import { Button, ScrollView, Text, View } from "react-native";
import { InvoiceCard, SafeArea } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useInvoices } from "../../context";
import { FlatList } from "react-native";

export const InvoiceScreen = () => {
  const navigation = useNavigation();
  const { invoices } = useInvoices();

  const renderItem = ({ item }) => {
    return <InvoiceCard data={item} />;
  };

  return <FlatList data={invoices} renderItem={renderItem} />;
};
