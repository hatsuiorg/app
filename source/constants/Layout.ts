import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default {
  isSmallDevice: width < 375,
  window: {
    height,
    width,
  },
};
