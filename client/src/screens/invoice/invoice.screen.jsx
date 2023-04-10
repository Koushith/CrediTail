import { FlatList } from "react-native";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { InvoiceCard } from "../../components";
import { useInvoices } from "../../context";

export const InvoiceScreen = () => {
  const { invoices, getAllInvoices } = useInvoices();

  const onRefresh = () => {
    getAllInvoices();
  };

  const renderItem = ({ item }) => {
    return <InvoiceCard data={item} />;
  };

  return (
    <FlatList
      data={invoices}
      renderItem={renderItem}
      refreshControl={<RefreshControl onRefresh={onRefresh} />}
    />
  );
};
