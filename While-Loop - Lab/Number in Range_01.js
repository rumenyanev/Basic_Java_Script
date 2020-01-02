function numberInRange(input){

    let number = Number(input.shift());

    if (number >= 1 && number <= 100){
        console.log(`The number is: ${number}`);
    }else{
        console.log("Invalid number!")
    }

}
numberInRange([35]);
numberInRange([105]);
numberInRange([0]);
numberInRange([-200]);
numberInRange([77]);
/*Число в диапазона [1…100]
Напишете програма, която въвежда цяло положително число n в диапазона [1…100]. При въвеждане на
число извън посочения диапазон, да се отпечата съобщение за грешка и да се въведе ново число.
Примерен вход и изход
Вход 
35

Изход
The number is: 35

Вход 
105

Изход
Invalid number!

Вход 
0
Изход
Invalid number!

Вход 
-200
Изход
Invalid number!

Вход 
77
Изход
The number is: 77 
                      */