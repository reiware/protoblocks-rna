import { Piece } from './types';

export const CELL_SIZE = 20;
export const BLOCK_COLORS = {
    empty: 'transparent',
    yellow: 'rgb(235, 220, 52)',
    cyan: 'rgb(52, 220, 235)',
    orange: 'rgb(235, 171, 52)',
    blue: 'rgb(52, 137, 235)',
    purple: 'rgb(189, 52, 235)',
    red: 'rgb(235, 79, 52)',
    green: 'rgb(52, 235, 101)',
};

/**
 * ##
 * ##
 */
export const pieceO: Piece = {
    type: 'O',
    color: 'yellow',
    pos: {
        x: 0,
        y: 0,
    },
    variationIdx: 0,
    variations: [
        [
            { x: 0, y: 0 }, // ##
            { x: 1, y: 0 }, // ##
            { x: 0, y: 1 },
            { x: 1, y: 1 },
        ],
    ],
};

export const PIECES = {
    pieceO,
};
