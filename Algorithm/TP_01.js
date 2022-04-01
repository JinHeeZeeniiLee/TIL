const solution = (N, K) => {
    
    let idx = 0;
    let used = [];

    let fac = (num) => num >= 1 ? num * fac(num - 1) : 1;

    for (let i = 0; i < N; i++){
        for (let j = 1; j <= N; j++){
            if(K[i] > j && !used.includes(j)) {
                idx += fac(N - (i + 1))
            } else if(K[i] === j){
                used.push(j);
            }
        }
    }
    return idx;
}