import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const TextSecondary = styled.Text`
  /* font-family: "Poppins"; */
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #646464;
`;

export const TextXL = styled.Text`
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
`;

export const Typography = () => {
  return (
    <>
      <Text>Button</Text>
    </>
  );
};
