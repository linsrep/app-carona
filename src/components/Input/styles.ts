import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    borderRadius: 7,
    padding: 16,

    backgroundColor: THEME.COLOR.TERTIARY,

    color: THEME.COLOR.WHITE,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.SIZE.MD
  }
});