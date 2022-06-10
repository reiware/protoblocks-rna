import React from 'react';
import { View } from 'react-native';
import { gridStyles } from './GridStyle';

export type GridProps = {
    blocks: number[]
}

export function Grid({ blocks }:GridProps) {
  return (
    <View style={gridStyles.grid}>
      {blocks.map((block, idx) => (
        <View
          key={`block-${block + idx}`}
          style={gridStyles.cell}
        />
      ))}
    </View>
  );
}

export default Grid;
