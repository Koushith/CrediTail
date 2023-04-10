import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const PaymentMethodContainer = styled.TouchableOpacity`
  border-radius: 12px;
  height: 150px;
  width: 106px;
  background-color: #efefef;
  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#2f2f2f",
    fontWeight: 400,
  },
});
