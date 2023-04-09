import styled from "styled-components/native";
import { getFullWidth } from "../../../utils";

export const CardContainer = styled.View`
  background-color: #2a2d31;
  width: ${Math.ceil(getFullWidth())}px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 144px;
  padding: 18px 30px 59px 30px;
  border-top: 10px solid #3a3a3a;
`;
