import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const SuccessContainer = styled.View`
  flex: 1;
  background-color: #188748;
  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  successImage: { width: 60, height: 60 },
  billNo: { color: "#EFEFEF", marginTop: 30 },
  payAmount: { color: "#fff", marginTop: 16 },
  retailerName: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 21,
    color: "#EFEFEF",
    marginTop: 30,
  },
  seperator: {
    marginTop: 43,
    width: "80%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#f4f4f4",
  },
  paymentMethod: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 24,
    color: "#fff",
    marginTop: 28,
  },
  bottom: {
    backgroundColor: "#188748",
    flexDirection: "column",
    alignItems: "center",
  },
  redirect: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 21,
    color: "#EFEFEF",
    marginBottom: 30,
  },
});
