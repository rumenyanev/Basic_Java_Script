function numberInRange(input){
    let number = Number(input.shift());

    if(number >= -100 && number <= 100 && number!== 0){
        console.log("Yes");
    }else{
        console.log("No");
    }

}
numberInRange([-25]);
numberInRange([0]);
numberInRange([98]);
numberInRange([109]);
/*Число в интервалa
Да се напише програма, която проверява дали въведеното от потребителя число е в интервала [-100, 100] и е
различно от 0 и извежда "Yes", ако отговаря на условията, или "No" ако е извън тях.
Примерен вход и изход
вход  
-25 
изход
Yes 

вход
0 
изход
No 

вход
25 
изход
Yes
         */