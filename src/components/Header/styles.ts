import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    zIndex:2,
    width: "100%",
    height: 90,
    padding: 15,
    paddingBottom: 0,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: THEME.BACKGROUND.OVERLAYDARK,
  },
  title: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.SIZE.LG,
    color: THEME.COLOR.PRIMARY,
    textAlign: "center",
  }
});