//Number String and String

/*
Neo and Prodo doing the game.
While Neo give to number to Prodo,

 

*/



const solution= (s) => {
    s = s.replace(/one/g, '1');
    s = s.replace(/two/g, '2');
    s = s.replace(/three/g, '3');
    s = s.replace(/four/g, '4');
    s = s.replace(/five/g, '5');
    s = s.replace(/six/g, '6');
    s = s.replace(/seven/g, '7');
    s = s.replace(/eight/g, '8');
    s = s.replace(/nine/g, '9');
    s = s.replace(/zero/g, '0');
    return Number(s);
}


let s = 'one4seveneight';
let s2= '23four5six7';
let s3= '2three45sixseven';
let s4= '123'

console.log(solution(s));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));




