import styled from "styled-components/native";
import { getFullWidth } from "../../../utils";

export const CardContainer = styled.View`
  background: rgba(42, 45, 49, 1);
  width: ${getFullWidth()};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 144px;
  padding: 18px 30px 59px 30px;
`;
