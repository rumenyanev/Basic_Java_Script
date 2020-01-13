function luggageTax(input){

    let widthSuitcase = +input[0];
    let heightSuitcase = +input[1];
    let depthSuitcase = +input[2];
    let typeTicket = input[3];

    let volumeSuitcase = widthSuitcase * heightSuitcase * depthSuitcase;
    let charge = 0;
    if(volumeSuitcase > 50 && volumeSuitcase <=100){
        if(typeTicket == "true"){
            charge = 0;
        }
        else{
            charge = 25;
        }

    }else if(volumeSuitcase > 100 && volumeSuitcase <= 200){
        if(typeTicket == "true"){
            charge = 10;
        }
        else{
            charge = 50;
        }

    } if(volumeSuitcase > 200 && volumeSuitcase <= 300){
        if(typeTicket == "true"){
            charge = 20;
        }
        else{
            charge = 100;
        }

    }
    console.log(`Luggage tax: ${charge.toFixed(2)}`);
}
luggageTax([2,5,3,"false"]);
luggageTax([5,7,7,"false"])
/*Задача 3. Такса багаж
Деси е на летището и чекира багажа си. 
Напишете програма, която да помогне на служителите на летището да преценят 
дали трябва да таксуват Деси допълнително според размерите на куфара ѝ и според това дали е закупила priority или обикновен билет. 
Ако обема на куфара ѝ до 50 дм3 включително няма такса. Ако е над 50 дм3 обаче, таксата е следната за двата вида билети:

тип билет/
обем              между 50 и 100 вкл.       между 100 и 200 вкл.       между 200 и 300 вкл.
priority            няма такса                10лв.                       20лв.
обикновен              25лв.                  50лв.                       100лв.
Вход
    1. Първи ред – ширина на куфара – цяло число в интервала от [1… 10]
    2. Втори ред – височина на куфара – цяло число в интервала от [1… 10]
    3. Трети ред – дълбочина на куфара – цяло число в интервала от [1… 10]
    4. Четвърти ред – дали билета ѝ е priority или не – текст с възможности "true" или "false"
Въведените числа са в дециметри.
Изход
"Luggage tax: {размера на таксата}"
Числото да е форматирано до втория знак.
Примерен вход и изход
Вход
2
5
3
false


Изход
Luggage tax: 0.00

Обяснения
Обемът на куфара е 2*5*3 = 30 дм3. Тъй като е под 50 дм3 не се заплаща такса.

Вход
10
4
5
true

Изход
Luggage tax: 10.00

Обяснения
Обемът на куфара е 10*4*5 = 200 дм3. Тя има priority билет, следователно таксата, която ще заплати е 10лв.

Вход
5
4
3
true

Изход
Luggage tax: 0.00

Обяснения
Обемът на куфара е 5*4*3 = 60 дм3. Тя има priority билет, следователно не заплаща такса.

Вход
5
7
7
false

Изход
Luggage tax: 100.00

Обяснения
Обемът на куфара е 5*7*7 = 245 дм3. Тя няма priority билет, следователно ще заплати 100лв.
*/