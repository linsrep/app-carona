import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  primary_size: {
    height: 36,
    width: 36,
  },
  secondary_size: {
    height: 54,
    width: 54,
  },
  active: {
    backgroundColor: THEME.COLOR.TERTIARY
  },
  inative: {
    backgroundColor: THEME.COLOR.PRIMARY
  }
});