import { Chessboard } from "react-chessboard";
import { TextField } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import KnightMove from "../libs/KnightMove";
import { ToArray, ToString } from "../libs/Utils";

const SimpleGame = forwardRef((props, ref) => {
    const [steps, setSteps] = useState('The initial Knight position: c3\r\n');
    const [position, setPosition] = useState({c1: 'wN'});
    const knight = new KnightMove();

    function move(idx) {
        let posStr = Object.keys(position)[0];
        let pos = ToArray(posStr);
        let possibleMoves = knight.validMovesFor(pos);
        let index = Math.floor(Math.random() * possibleMoves.length);   // 随便取一个可以移动的位置
        let dest = ToString(possibleMoves[index]);
        setPosition(p => {
            if (p.hasOwnProperty(posStr)) {
                delete p[posStr];
            }

            p[dest] = 'wN';
            return p;
        });
        setSteps(s => {
            return s + "The Knight #" + idx + " moves: " + dest + "\r\n";
        })
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    // 配合 forwardRef 使用； 相当于在 parent 中调用 ref 中的方法
    useImperativeHandle(ref, () => ({
        async play() {
            for (let i = 1; i < 11; i++) {
                move(i);
                await delay(1000);
            }
        }
    }));

    return (
        <div className="Content">
            <div className="ChessBoard">
                <Chessboard position={position} arePiecesDraggable={false} animationDuration={200} />
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

export default SimpleGame;
