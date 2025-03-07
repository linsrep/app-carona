import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND.DARK,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: THEME.SIZE.XXXXL,
    color: THEME.COLOR.PRIMARY,
  },
  subtitle: {
    fontSize: THEME.SIZE.MD,
    color: THEME.COLOR.WARNING,
    paddingTop: 8,
  },
  map: {
    flex: 1,
    width: "100%",
  },
  marker: {
    width: 90,
    height: 90,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 8,
    backgroundColor: THEME.BACKGROUND.OVERLAYDARK,
  },
  footerFields: {
    paddingBottom: 8,
  },
  footerText: {
    color: THEME.COLOR.PRIMARY,
    fontSize: THEME.SIZE.SM,
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
