import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  paymentScreenContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  actionContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 100,
  },
  payBtnContainer: { flex: 1, alignItems: "flex-end", flexDirection: "row" },
  paymentHeading: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Poppins_700Bold",
  },
  cardContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 50,
  },
  buttonContainer: { flex: 1, alignItems: "flex-end", flexDirection: "row" },
});
