import {Chessboard} from "react-chessboard";
import {TextField} from "@mui/material";
import {forwardRef, useImperativeHandle, useState} from "react";
import KnightMove from "../libs/KnightMove";
import {ToArray, ToString} from "../libs/Utils";
import QueenMove from "../moves/QueenMove";
import BishopMove from "../moves/BishopMove";

/**
 * 返回为 ： 返回最开始初始化的role的位置
 * @param role
 * @param position
 * @returns {string}
 */
function getPositionByRole(role, position) {
    const positionKeyList = Object.keys(position);
    for (let index = 0; index < positionKeyList.length; index++) {
        const positionKey = positionKeyList[index];
        if (position[positionKey].toUpperCase() === role.toUpperCase()) {
            return positionKey
        }
    }
}

/**
 * 判断获得的 destination 是否符合标准（即：是否覆盖来当前已经存在的值
 * @param dest
 * @param position
 */
function checkDest(dest, position) {
    const positionKeyList = Object.keys(position); // 现有的三个角色的位置
    for (let index = 0; index < positionKeyList.length; index++) {
        const positionKey = positionKeyList[index];
        if (dest === positionKey) {
            return false
        }
    }
    return true;
}


const ComplexGame = forwardRef((props, ref) => {
    const [steps, setSteps] = useState('The initial Knight position: c3\r\n');
    const [position, setPosition] = useState({c2: 'wK', a4: 'wQ', d5: 'wB'});  //Knight  Bishop Queen);

    const knight = new KnightMove();
    const bishop = new BishopMove();
    const queen = new QueenMove();

    const moveStrategy = {
        knight,
        bishop,
        queen
    }


    function moveByRole(role) {
        let posStr = getPositionByRole(role.key, position);
        let pos = ToArray(posStr);
        let possibleMoves = moveStrategy[role.name].validMovesFor(pos);
        let index = Math.floor(Math.random() * possibleMoves.length);   // 随便取一个可以移动的位置
        let dest = ToString(possibleMoves[index]);
        // 要对 dest 做判断， 如果 dest 存在当前的位置， 那么跳失败，即立马重新再跳一次
        if (!checkDest(dest, position)) {
            return false
            // 如果是错误的， 直接返回 false， 不需要再往下走来
        }
        // 更新 新的 position； react hook state 保存
        setPosition(p => {
            if (p.hasOwnProperty(posStr)) {
                delete p[posStr];
            }
            p[dest] = role.key;
            return p;
        });
        setSteps(s => {
            return s + `The ${role.name.toUpperCase()} moves: ` + dest + "\r\n";
        })
        return true;
    }


    /**
     * wK 是骑士
     */
    function moveKnight(jumpCount) {
        let posStr = getPositionByRole('wk', position);
        // Object.keys(position)[0];  // 获取 骑士当前的位置； 通过骑士的下标来获取
        // console.log(posStr)
        let pos = ToArray(posStr);
        // console.log(pos) // c1 变成 【 3 ， 1】 位置
        let possibleMoves = knight.validMovesFor(pos);
        let index = Math.floor(Math.random() * possibleMoves.length);   // 随便取一个可以移动的位置
        let dest = ToString(possibleMoves[index]);
        // 要对 dest 做判断， 如果 dest 存在当前的位置， 那么跳失败，即立马重新再跳一次
        if (!checkDest(dest, position)) {
            return false
            // 如果是错误的， 直接返回 false， 不需要再往下走来
        }
        setPosition(p => {
            if (p.hasOwnProperty(posStr)) {
                delete p[posStr];
            }
            // console.log('old p:',p)
            p[dest] = 'wK';
            // console.log(' new p: ',p)
            return p;
        });
        setSteps(s => {
            return s + "The Knight #" + `${jumpCount} moves: ` + dest + "\r\n";
        })
        return true;
    }

    function moveBishop(jumpCount) {
        let posStr = getPositionByRole('wB', position);
        let pos = ToArray(posStr);
        // console.log(pos) // c1 变成 【 3 ， 1】 位置
        let possibleMoves = bishop.validMovesFor(pos);
        let index = Math.floor(Math.random() * possibleMoves.length);   // 随便取一个可以移动的位置
        let dest = ToString(possibleMoves[index]);
        // 要对 dest 做判断， 如果 dest 存在当前的位置， 那么跳失败，即立马重新再跳一次
        if (!checkDest(dest, position)) {
            return false
            // 如果是错误的， 直接返回 false， 不需要再往下走来
        }
        setPosition(p => {
            if (p.hasOwnProperty(posStr)) {
                delete p[posStr];
            }
            // console.log('old p:',p)
            p[dest] = 'wB';
            // console.log(' new p: ',p)
            return p;
        });
        setSteps(s => {
            return s + "The Bishop #" + `${jumpCount} moves: ` + dest + "\r\n";
        })
        return true;
    }

    function moveQueen(jumpCount) {
        let posStr = getPositionByRole('wQ', position);
        let pos = ToArray(posStr);
        // console.log(pos) // c1 变成 【 3 ， 1】 位置
        let possibleMoves = queen.validMovesFor(pos);
        let index = Math.floor(Math.random() * possibleMoves.length);   // 随便取一个可以移动的位置
        let dest = ToString(possibleMoves[index]);
        // 要对 dest 做判断， 如果 dest 存在当前的位置， 那么跳失败，即立马重新再跳一次
        if (!checkDest(dest, position)) {
            return false
            // 如果是错误的， 直接返回 false， 不需要再往下走来
        }
        setPosition(p => {
            if (p.hasOwnProperty(posStr)) {
                delete p[posStr];
            }
            // console.log('old p:',p)
            p[dest] = 'wQ';
            // console.log(' new p: ',p)
            return p;
        });
        setSteps(s => {
            return s + "The Queen #" + `${jumpCount} moves: ` + dest + "\r\n";
        })
        return true;
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    // 配合 forwardRef 使用； 相当于在 parent 中调用 ref 中的方法
    useImperativeHandle(ref, () => ({
        async play() {
            // 随机角色跳
            // c2: 'wK', a4: 'wQ', d5: 'wB'
            const roleList = [{key: 'wB', name: 'bishop'}, {key: 'wQ', name: 'queen'}, {key: 'wK', name: 'knight'}]
            const role = roleList[Math.floor(Math.random() * roleList.length)]
            console.log(role.name)
            // 每次点击，随机一个role 随机跳一次（不再是 simple game 中的 10 次）
            let jumpAble = moveByRole(role)
            while (!jumpAble) {
                jumpAble = moveByRole(role)
                console.log('jump one more ')
            }
        }
    }));

    return (
        <div className="Content">
            <div className="ChessBoard">
                <Chessboard position={position} arePiecesDraggable={false} animationDuration={200}/>
            </div>
            <div className="Output">
                <TextField
                    multiline
                    value={steps}
                    className="MoveList"
                    rows={20}
                    InputProps={{readOnly: true}}
                />
            </div>
        </div>
    );
});

export default ComplexGame;
