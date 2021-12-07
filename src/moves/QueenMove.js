/***
 * Queen – 在棋盘边界内沿对角线、水平或垂直方向移动任意距离
 */

export default class QueenMove {
    // static moves 没有特别的含义， 即一个简单的骑士步法
    static MOVES = [[1,2], [1,-2], [-1,2], [-1,-2], [2,1], [-2,1], [2,-1], [-2,-1]];

    validMovesFor(pos) {
        let result = [];
        // 根据骑士步法来决定怎么走；
        // 简单的根据 x，y 和 MOVES 的相加来得到走后的结果
        for (let move of QueenMove.MOVES) {
            let newX = pos[0] + move[0];
            let newY = pos[1] + move[1];

            if (newX > 8 || newX < 1 || newY > 8 || newY < 1)
                continue;
            result.push([newX, newY]);
        }

        return result;
    }
}
