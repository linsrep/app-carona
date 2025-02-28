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
    fontSize: 38,
    color: THEME.COLOR.PRIMARY,
  },
  subtitle: {
    fontSize: 16,
    color: THEME.COLOR.TERTIARY,
    paddingTop: 10,
  }
});