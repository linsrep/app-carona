import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 64,
    maxHeight: 64,
    borderRadius: 7,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: THEME.COLOR.PRIMARY
  },
  title: {
    color: THEME.COLOR.WHITE,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.SIZE.MD,
  },
  disabled: {
    opacity: 0.5
  }
});