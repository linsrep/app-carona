import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND.DARK,
  },
  contentLista: {
    width: "100%",
    height: "100%",
    padding: 10,
    paddingTop: 90,
  },
  title: {
    fontSize: THEME.SIZE.XL,
    color: THEME.COLOR.PRIMARY,
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: THEME.SIZE.MD,
    color: THEME.COLOR.WARNING,
    paddingTop: 10,
  },
  containerNotFound: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  imgCar: {
    width: 40,
    height: 40,
  }
});
