import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { uid } from 'uid';
import { PIECES } from './constants';
import Grid from './Grid';
import { debugBorder } from './styles';
import { Block, Piece } from './types';

const gameViewStyles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        backgroundColor: '#ccc',
        height: '10%',
        width: '100%',
        ali: 'center',
        justifyContent: 'flex-start',
        ...debugBorder,
    },
    gameContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        ...debugBorder,
    },
    controlButton: {
        width: 60,
        ...debugBorder,
    },
    grid: {
        marginLeft: 10,
        marginRight: 10,
        ...debugBorder,
    },
});

const prepareBlocks = (): Block[] => new Array(200).fill(0).map(() => ({ _reactKey: uid(), color: 'empty', isFilled: false } as Block));
const lastPos = 0;

export function GameView() {
    const [grid, setGrid] = useState(prepareBlocks());
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentPiece, setCurrentPiece] = useState<Piece|null>(PIECES.pieceO);
    const gameLoopTimeoutRef = useRef<number>();

    const gameTick = () => {
        gameLoopTimeoutRef.current = window.setTimeout(() => {
            const newIter = grid.map((x) => x);
            if (currentPiece) {
                const newPiece:Piece = { ...currentPiece };
                if (newPiece) {
                    newPiece.variations[newPiece.variationIdx].forEach((blockPos) => {
                        const newPos = (newPiece.pos.x + blockPos.x) + ((newPiece.pos.y + blockPos.y) * 10);
                        console.log(blockPos);
                        console.log(newPos);
                        if (newIter[newPos]) {
                            newIter[newPos].color = 'empty';
                        }
                    });
                    newPiece.pos.y += 1;
                    newPiece.variations[newPiece.variationIdx].forEach((blockPos) => {
                        const newPos = (newPiece.pos.x + blockPos.x) + ((newPiece.pos.y + blockPos.y) * 10);
                        console.log(blockPos);
                        console.log(newPos);
                        if (newIter[newPos]) {
                            newIter[newPos].color = 'yellow';
                        }
                    });
                }
                setCurrentPiece(newPiece);
            }
                // if (newIter[lastPos]) {
            //     newIter[lastPos].color = 'empty';
            //     lastPos += 10;
            // }
            // if (newIter[lastPos]) {
            //     newIter[lastPos].color = 'blue';
            // }
            console.log('tick');
            setGrid(newIter);
            gameTick();
        }, 1000);
    };

    useEffect(() => {
        if (isPlaying) {
            gameTick();
        } else {
            clearInterval(gameLoopTimeoutRef.current);
        }
      return () => {
        clearInterval(gameLoopTimeoutRef.current);
      };
    }, [isPlaying]);

    return (
      <View style={gameViewStyles.gameScreen}>
        <View style={gameViewStyles.controlButton}>
          <Button title="↻" />
        </View>
        <View style={gameViewStyles.gameContainer}>
          <View style={gameViewStyles.controlButton}>
            <Button title="◄" />
          </View>
          <View style={gameViewStyles.grid}>
            <Grid blocks={grid} />
          </View>
          <View style={gameViewStyles.controlButton}>
            <Button title="►" />
          </View>
        </View>
        <View>
          <Button title="▼" onPress={() => { console.log('Push Down'); }} />
          <Button title={isPlaying ? 'Pause' : 'Play'} onPress={() => { setIsPlaying((prev) => !prev); }} />
          <Button title="Restart" onPress={() => { console.log('Restart'); }} />
        </View>
      </View>
    );
}

export default GameView;
