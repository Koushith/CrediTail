import { Dimensions } from "react-native";

//read about width , scale

export const getFullWidth = () => Dimensions.get("window").width;

export const getFullHeight = () => Dimensions.get("window").height;

export const headerConfig = {
  headerStyle: {
    backgroundColor: "#2A2D31",
  },
  headerTintColor: "#ECECEC",
};
