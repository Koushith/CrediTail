import { Text } from "react-native";
import { CardContainer } from "./card.styles";
import { Dimensions } from "react-native";
import { SafeArea } from "../safe-area/safe-area.component";

export const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};
