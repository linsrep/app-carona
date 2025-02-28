import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND.DARK,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 46,
    margin: 30,
  },

  iconHome: {
    width: 130,
    height: 130,
  },

  title: {
    fontSize: THEME.SIZE.XXXL,
    color: THEME.COLOR.WHITE,
  },

  subtitle: {
    fontSize: THEME.SIZE.SM,
    color: THEME.COLOR.WARNING,
    paddingTop: 5,
  },

  btnIconsHome: {
    alignItems: "center",
    margin: 15,
  },

  copyright: {
    display:"flex",
    width: "100%",
    marginTop: 20,
    position:"absolute",
    bottom: 0,
    alignItems: "center",
    backgroundColor: THEME.COLOR.WARNING,
    padding: 8,
  },

  copyrightTitle: {
    fontSize: THEME.SIZE.XS,
    color: THEME.COLOR.BLACK,
  },

});
