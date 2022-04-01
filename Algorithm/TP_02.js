//fibonacci

let memo = [0, 1];


const solution = (n) => {
    if (typeof memo[n] !== "number") memo[n] = solution(n-1)+solution(n-2);
    return memo[n];
}


let output = solution(7);
console.log(output);