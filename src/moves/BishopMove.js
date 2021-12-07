/***
 * Bishop - 沿对角线移动，在棋盘边界内任意距离
 * 也就是我一次能从我的以我自己为中心， 右上；右下；左上；左下(先 x 后 y)
 * 即先确定一个 x  该 x 是随机数字出来以后的一个值
 * 当该 x 确定了以后， 对应的 y
 */

export default class BishopMove {

    validMovesFor(pos) {
        const randomX = Math.floor(Math.random() * 8+1);   // 随便取一个可以移动的位置
        return generateMOVES(pos, randomX);
    }
}

const generateMOVES = (position, randomX)=>{
    const [x,y]= position

    if(randomX === x){
        return [[x,y]]     // 但这个时候，回去后肯定要 again 的；交给外面考虑
    }else{
        //  不等于 x 的话， 要保证对角线移动
        return [[randomX, randomX], [randomX, y + Math.abs(randomX - x)], [randomX, y - Math.abs(randomX - x)]].filter(item => item[1] > 0 && item[1] < 9);
    }
}
