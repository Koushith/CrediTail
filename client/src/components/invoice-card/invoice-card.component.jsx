import { Text, View } from "react-native";

export const InvoiceCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 12,
        paddingBottom: 12,
        height: 62,
        backgroundColor: "#fff",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 21,

            color: "#646464",
            fontWeight: 700,
          }}
        >
          MD22/110656
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 18,

            color: "#727272",
            fontWeight: 400,
          }}
        >
          PADMAMBA PRINTERS
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 14,

          color: "#000",
          fontWeight: 700,
        }}
      >
        ₹327
      </Text>
    </View>
  );
};
