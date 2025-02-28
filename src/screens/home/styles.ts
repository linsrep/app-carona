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
    width: 150,
    height: 150,
  },

  title: {
    fontSize: THEME.SIZE.XXXL,
    color: THEME.COLOR.WHITE,
  },

  subtitle: {
    fontSize: THEME.SIZE.MD,
    color: THEME.COLOR.WARNING,
    paddingTop: 5,
  },

  btnIconsHome: {
    alignItems: "center",
    margin: 25,
  }

});
