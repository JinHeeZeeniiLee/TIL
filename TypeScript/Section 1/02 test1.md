## Test1 폴더에 있는 예제 내용

js_only.js 파일에 있는 내용에서

add 함수 예제가 있다. 

```
function add (num1, num2){
    return num1 + num2;
}
```

함수에서 index.html을 브라우저에 열고 
개발자도구로 계산을 해보면 
그냥 숫자가 수학적으로 더해지는것이 아닌 
문자열이 더해진 값이 나온다. 

JavaScript의 약점이다. 

이 에러가 어디서 나온걸까?

addEventListener를 보게되면 
```
button.addEventListener("click", function(){
    console.log(add(input1.value, input2.value));;
})
```

Input값에 액세스 할떄 알아두어야 하는 중요한 것은 
value는 언제나 문자열이라는 것이다. 

input 타입이 무엇이든 숫자든 상관없이 항상 문자열이다. 


## 해결방법은? 

타입스크립트로 해결할 수 있다. 

add 함수에 type을 설정하면 된다. 

또한  else 에는 에러가 발생하거나 적어도 각 매개변수 앞에 
더하기 기호를 붙여 둘 다 숫자로 변환하게 한다. 

```
    function add(num1, num2){
        if(typeof num1 == 'number' && typeof num2 == 'number'){
            return num1 + num2
        } else {
            return +num1 + +num2
        }
    }
```

자바스크립트에서 보다 정제된 코드이다. 

index.html을 새로고침후에 개발자 도구를 열어 
덧셈을 다시 진행해보면 문자열이 아닌 숫자가 더해지는걸 알 수 있다. 

하지만 이 방식은 바닐라 자바스크립트이고 타입스크립트가 아니다. 



