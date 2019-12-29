function InvalidNumber(input){
    let num = Number(input.shift());
    let isValid = ((num>=100 && num<=200)||num==0);
    
            if (!isValid){
                console.log("invalid");
            }else {
                console.log("");
            }
        }
invalidNumber([-45]);
invalidNumber([2]);
invalidNumber([76529]);
invalidNumber([123]);
invalidNumber([179]);
invalidNumber([875]);
/*Невалидно число
Дадено число е валидно, ако е в диапазона [100…200] или е 0. 
Да се напише програма, която приема аргумента input и изважда от него цяло число, 
и печата "invalid" ако въведеното число не е валидно.
Примерен вход и изход
вход  
75 
изход
invalid 

вход
150 
изход
(няма изход) 

вход
220 
изход
invalid 

вход
199 
изход
(няма изход)


вход  
-1 
изход 
invalid 

вход
100 
изход 
(няма изход) 

вход
200 
изход 
(няма изход) 

вход
0 
изход 
(няма изход)
                                           */