import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 350,
    marginBlock: 50,
    minHeight: 34,
    maxHeight: 54,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: THEME.COLOR.PRIMARY
  },
  btnTitle: {
    color: THEME.COLOR.WHITE,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.SIZE.MD,
  },
  disabled: {
    opacity: 0.5
  }
});