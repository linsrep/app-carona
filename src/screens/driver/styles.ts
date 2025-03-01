import { StyleSheet } from "react-native";
import { THEME } from "../../theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND.DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: THEME.SIZE.XXXXL,
    color: THEME.COLOR.PRIMARY,
  },
  subtitle: {
    fontSize: THEME.SIZE.MD,
    color: THEME.COLOR.WARNING,
    paddingTop: 10,
  }
});