const solutiobn = (board, moves) =>{
    const basket = [];
    let result = 0;

    console.log(board);
    console.log(moves);

    moves.forEach(move =>{
        const doll = pickup(board, move-1);
        console.log(doll);
        // 4, 3, 1, 1, 3, 2, undefined, 4;
        if(doll){
            if(basket[basket.lengh-1] === doll)
            console.log(basket[basket.lengh-1]);
            //1, 3
            basket.pop();
            result += 2;
            console.log(basket);
            //[4,3], [4];
            console.log(result);
            //2, 4;
        }
        basket.push(doll);
        console.log(basket);
    })

    return result;
}

const pickup = (board, result) => {
    for(let i = 0; i < board.length; i++){
        console.log(board[i]);
        /*
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 1, 0, 3 ] 
        [ 0, 2, 5, 0, 1 ] 
        [ 4, 2, 4, 4, 2 ] 

        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 1, 0, 3 ] 
        
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 1, 0, 0 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 2, 5, 0, 1 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 2, 5, 0, 0 ] 
        [ 0, 2, 4, 4, 2 ] 
        [ 3, 5, 1, 3, 1 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 2, 5, 0, 0 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 5, 0, 0 ] 
        [ 0, 2, 4, 4, 2 ] 
        [ 0, 5, 1, 3, 1 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 0, 0, 0 ] 
        [ 0, 0, 5, 0, 0 ] 
        [ 0, 2, 4, 4, 2 ]

        */
        if(board[i][result] !== 0){
            const doll = board[i][result];
            board[i][result] = 0;
            return doll;
        }
    }
}