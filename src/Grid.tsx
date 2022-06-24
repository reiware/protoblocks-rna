import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CELL_SIZE, BLOCK_COLORS } from './constants';
import { Block } from './types';

const gridStyles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#111111',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: CELL_SIZE * 10 + 2,
        maxHeight: CELL_SIZE * 20 + 2,
    },
    cell: {
        borderWidth: 1,
        width: CELL_SIZE,
        height: CELL_SIZE,
        borderColor: '#141414',
    },
    cell_empty: {
        backgroundColor: BLOCK_COLORS.empty,
    },
    cell_yellow: {
        backgroundColor: BLOCK_COLORS.yellow,
    },
    cell_cyan: {
        backgroundColor: BLOCK_COLORS.cyan,
    },
    cell_orange: {
        backgroundColor: BLOCK_COLORS.orange,
    },
    cell_blue: {
        backgroundColor: BLOCK_COLORS.blue,
    },
    cell_purple: {
        backgroundColor: BLOCK_COLORS.purple,
    },
    cell_red: {
        backgroundColor: BLOCK_COLORS.red,
    },
    cell_green: {
        backgroundColor: BLOCK_COLORS.green,
    },
});

export type GridProps = {
    blocks: Block[];
};

export function Grid({ blocks }: GridProps) {
    return (
      <View style={gridStyles.grid}>
        {blocks.map((block) => (
          <View
            key={block._reactKey}
            style={[gridStyles.cell, gridStyles[`cell_${block.color}`]]}
          />
            ))}
      </View>
    );
}

export default Grid;
