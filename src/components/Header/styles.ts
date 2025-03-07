import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    zIndex:2,
    width: "100%",
    height: 90,
    padding: 10,
    paddingBottom: 0,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: THEME.BACKGROUND.OVERLAYDARK,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.SIZE.MD,
    color: THEME.COLOR.PRIMARY,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.SIZE.XS,
    color: THEME.COLOR.QUATERNARY,
    textAlign: "center",
  }
});