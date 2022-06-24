export type ShapeType = 'O' | 'I' | 'L' | 'J' | 'T' | 'S' | 'Z';

export type BlockColor =
    | 'empty'
    | 'yellow'
    | 'cyan'
    | 'orange'
    | 'blue'
    | 'purple'
    | 'red'
    | 'green';

export type Block = {
    _reactKey: string;
    isFilled: boolean;
    color: BlockColor;
}

export type Position = {
    x: number;
    y: number;
}
export type Piece = {
    type: ShapeType;
    color: BlockColor;
    pos: Position;
    variationIdx: number;
    variations: Position[][]
}
