//hit the lottary

const solution = (lottos, win_nums) => {
    let answer = [];

    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    
    const zeros = lottos.filter(lotto => lotto === 0). length;

    console.log(correct, zeros);

    let min = 7-correct >= 6 ? 6 : 7-correct;
    let max = min-zeros < 1 ? 1 : min-zeros;

    answer = [min, max];

    return answer;
}


let lottos = [44,1,0,0,31,25];
let lottos_01 = [0,0,0,0,0,0];
let lottos_02 = [45,4,35,20,3,9];

const win_nums = [31,10,45,1,6,19];
const win_nums_01 = [38, 19, 20, 40, 15, 25];
const win_nums_02 = [20, 9, 3, 45, 4, 35];

console.log(solution(lottos,win_nums));