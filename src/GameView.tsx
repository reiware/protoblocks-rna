import React from 'react';
import { StyleSheet, View } from 'react-native';
import Grid from './Grid';

export function GameView() {
  return (
    <View style={gameViewStyles.gameScreen}>
      <Grid blocks={[0, 0, 1]} />
    </View>
  );
}

export default GameView;

const gameViewStyles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    backgroundColor: '#ccc',
    height: '10%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
