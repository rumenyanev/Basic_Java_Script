function invalidNumber(input){
    let number = Number(input.shift());

    if(number >= 100 && number <= 200 || number === 0){
        console.log(" ");
    }
    else {
        console.log("invalid")
    }


}
invalidNumber([150]);
invalidNumber([220]);
invalidNumber([0]);
invalidNumber([-50]);
invalidNumber([18]);
invalidNumber([139]);
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