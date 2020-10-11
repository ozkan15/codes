function chessKnight(cell) {
    let moves = [[2,1], [2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2], [1,2]];
    let res = moves.length;
    for(let i = 0; i < moves.length; i++){
        if(!(
        cell.charCodeAt(0) + moves[i][0] >= "a".charCodeAt(0) 
        && cell.charCodeAt(0) + moves[i][0] <= "h".charCodeAt(0) 
        && Number(cell[1]) + moves[i][1] >= 1
        && Number(cell[1]) + moves[i][1] <= 8 )) res--;
    }
    return res;
}
