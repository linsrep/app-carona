import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { initialWindowMetrics } from 'react-native-safe-area-context';
export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: (initialWindowMetrics?.insets.top || 0) + 24,
    padding: 25,
    margin: 10,
    borderRadius: 10,
  },

  text: {
    color: THEME.COLOR.WHITE,
    fontSize: THEME.SIZE.XL,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    textAlign: "center"
  }
});