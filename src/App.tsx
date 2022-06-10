import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import GameView from './GameView';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: '10%',
  },
});

export function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>PROTOBLOCKS</Text>
      </View>
      <GameView />
    </View>
  );
}
