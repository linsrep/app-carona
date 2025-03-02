import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { initialWindowMetrics } from 'react-native-safe-area-context';
export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: (initialWindowMetrics?.insets.top || 0) + 100,
    left: 0,
    right: 0,
    zIndex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },

  text: {
    color: THEME.COLOR.WHITE,
    fontSize: THEME.SIZE.MD,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    textAlign: "center"
  }
});