function greaterNumbers(input){
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());

    if(num1 >= num2){
        console.log(num1);
    }else{
        console.log(num2);
    }

}
greaterNumbers([3,5]);
greaterNumbers([10,10]);
greaterNumbers([-5,5]);

/*Намиране на по-голямото число
Да се напише програма, която получава две цели числа въведени от потребителя и отпечатва по-голямото от
двете.
Примерен вход и изход
вход   изход вход изход вход изход
5
3

изход
5 

вход
3
5
изход
5 

вход
10
10
изход
10 

вход
-5
5
изход
5   
     */