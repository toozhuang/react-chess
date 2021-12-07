/**
 * Queen 考虑的方向多一些
 * Note: 更改算法逻辑后弃用
 */
export function generateMoves(originalMoves) {
    const moves = [];
    for(let index=1;index<8;index++){
        for(let move of originalMoves){
            moves.push([move[0]*index,move[1]*index])
        }
    }
    return moves;
}
