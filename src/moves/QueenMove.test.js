import QueenMove from './QueenMove'

// 对称跳转
test("Queen Moves diagonally, horizontally or vertically", () => {
    const bishop = new QueenMove();
    const pos = [5, 5];
    let moves = bishop.validMovesFor(pos);

    for (let move of moves) {
        // move diagonally
        if(move[1]!==pos[1] && move[0]!==pos[0] ){
            expect(Math.abs(move[1] - pos[1])).toBe(Math.abs(move[0] - pos[0]))
        }
    }
});

// 根据现有的逻辑； 一次 确定的随机到x Queen 的跳转 只有最多三种可能
test("A Queen Moves with One Random Confirmed move X will have less than 2 valid moves", () => {
    const bishop = new QueenMove();
    const pos = [5, 5];
    let moves = bishop.validMovesFor(pos);

    expect(moves.length <=3).toBeTruthy();
});

// 跳转的结果不可能会有 < 0  或者 > 0
test("A Queen Moves will never jump out of the board", () => {
    const bishop = new QueenMove();
    const pos = [5, 5];
    let moves = bishop.validMovesFor(pos);
    let checkResult = []
    for (let move of moves) {
        if(move[0] <=0 || move[0]>=9 || move[1]<=0 || move[1]>=9 ){
            checkResult.push(move)
        }
    }
    expect(checkResult.length ===0 ).toBeTruthy();
});



