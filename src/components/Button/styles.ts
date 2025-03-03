import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBlock: 8,
    minHeight: 54,
    maxHeight: 54,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: THEME.COLOR.PRIMARY
  },
  btnTitle: {
    color: THEME.COLOR.BLACK,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.SIZE.MD,
  },
  disabled: {
    opacity: 0.5
  }
});