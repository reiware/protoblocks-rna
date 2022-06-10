import { StyleSheet } from 'react-native';
import { CELL_SIZE } from './constants';

export const gridStyles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#111111',
    padding: 10,
    width: '100%',
    height: 400,
  },
  cell: {
    borderWidth: 1,
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderColor: '#141414',
  },
});
