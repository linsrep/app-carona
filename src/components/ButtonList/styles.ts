import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBlockStart: 10,
  },
  btn: {
    borderBottomWidth: 1,
    borderBlockEndColor: THEME.COLOR.PRIMARY,
    marginBlock: 10,
    paddingBottom: 15,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  contentAddress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  car: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: THEME.SIZE.XL,
    color: THEME.COLOR.PRIMARY,
    paddingBottom: 5,
  },
  titleFinishRide: {
    textDecorationLine: "line-through",
  },
  titleProgressRide: {
    fontSize: THEME.SIZE.XS,
    color: THEME.COLOR.SUCCESS
  },
  titleCancelRide: {
    fontSize: THEME.SIZE.XS,
    color: THEME.COLOR.SUCCESS
  },
  address: {
    fontSize: THEME.SIZE.XS,
    color: THEME.COLOR.WHITE,
    paddingTop: 5,
  }
});
