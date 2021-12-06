// Convert the position array to position string.
// 把棋盘坐标变成可读性的string坐标([3,2]=>c2)
function ToString(pos) {
    return String.fromCharCode(pos[0] + 'a'.charCodeAt(0) - 1) + pos[1];
}

// 把当前的坐标 (c2)变成真实的棋盘坐标: [3,2]
function ToArray(posString) {
    return [posString.charCodeAt(0) - 'a'.charCodeAt(0) + 1, posString.charCodeAt(1) - '0'.charCodeAt(0)];
}

export { ToString, ToArray };
