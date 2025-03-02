import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND.DARK
  },
  text: {
    fontSize: THEME.SIZE.XL,
    color: THEME.COLOR.PRIMARY,
    paddingBottom: 20,
  }
});