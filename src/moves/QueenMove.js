/***
 * Queen – 在棋盘边界内沿对角线、水平或垂直方向移动任意距离
 * 抽象 Queen 的跳转逻辑为： 我可以在棋盘上
 * 随机到任何一个 x 的位置以后，定位到上中下随便去一个地方
 */

export default class QueenMove {

    validMovesFor(pos) {
        // 这个就可以简单的套用骑士的跳跳逻辑了
        // 简单的根据 x，y 和 MOVES 的相加来得到走后的结果
        const randomX = Math.floor(Math.random() * 7);   // 随便取一个可以移动的位置
        // 根据该 randomX 的值 （比如为 2）， 老的 x 为 2，老的 Y 值为 1 则可以确定 新的 x 的值为 4
        // 则 新的 Y 的值 为 1 + 2  或者 1 - 2
        return generateMOVES(pos, randomX);
    }
}

const generateMOVES = (position, randomX)=>{
    const [x,y]= position

    if(randomX === x){
        return [randomX, Math.floor(Math.random() * 7)]     // 随机生成一个 Y 就好
    }else{
        //  不等于 x 的话， 要保证对角线移动
        return [[randomX, y + Math.abs(randomX-x)],[randomX,y-Math.abs(randomX-x)]].filter(item=>item[1]>0)
    }
}
