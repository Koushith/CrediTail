import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 12,
    paddingBottom: 12,
    height: 62,
    backgroundColor: "#fff",
  },
  billNo: {
    fontSize: 16,
    lineHeight: 21,

    color: "#646464",
    fontWeight: 700,
  },
  retailerName: {
    fontSize: 12,
    lineHeight: 18,

    color: "#727272",
    fontWeight: 400,
  },
  inVoiceAmount: {
    fontSize: 16,
    // lineHeight: 14,

    color: "#000",
    fontWeight: 700,
  },
});
