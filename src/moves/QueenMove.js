/***
 * Queen – 在棋盘边界内沿对角线、水平或垂直方向移动任意距离
 * 也就是我一次能从我的以我自己为中心， 上下左右随机跳动 (先 x 后 y)
 * 这里对于每次的跳动采取完全用`+` 来实现； 所以步数会为 **负数**
 * 上 [0,1]
 * 下 [0,-1]
 * 左 [-1,0]
 * 右 [1,0]
 * 右上 [1,1]
 * 左上 [-1,1]
 * 右下 [1,-1]
 * 左下 [-1,-1]
 */

export default class QueenMove {
    // static moves
    static MOVES = [[0, 1], [0, -1], [-1, 0], [1, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]];

    validMovesFor(pos) {
        let result = [];
        // 这个就可以简单的套用骑士的跳跳逻辑了
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
