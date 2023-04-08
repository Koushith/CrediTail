import { Text } from "react-native";
import { CardContainer } from "./card.styles";
import { Dimensions } from "react-native";
import { SafeArea } from "../safe-area/safe-area.component";

export const Card = () => {
  console.log("width:", Dimensions.get("window").width);
  return (
    <SafeArea>
      <CardContainer>
        <Text>Button</Text>
      </CardContainer>
    </SafeArea>
  );
};
