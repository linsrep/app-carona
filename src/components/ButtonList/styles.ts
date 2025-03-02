import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND.DARK,
  },
  btn: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBlockEndColor: THEME.COLOR.PRIMARY,
    marginBlock: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingBlock: 5,
  },
  car: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  title: {
    fontSize: THEME.SIZE.XL,
    color: THEME.COLOR.PRIMARY,
    paddingBottom: 5,
  },
  address: {
    fontSize: THEME.SIZE.XS,
    color: THEME.COLOR.WHITE,
    paddingTop: 5,
  }
});
