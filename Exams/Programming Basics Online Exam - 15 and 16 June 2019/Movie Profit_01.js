function movieProfit(input){
    let nameMovie = input.shift();
    let numDays = +input.shift();
    let numTickets = +input.shift();
    let priceTicket = +input.shift();
    let percentForCinema = +input.shift();

    let sum = numTickets * priceTicket * numDays;
    let cinemaPercent = sum * percentForCinema /100;
    let totalSum = sum - cinemaPercent;

    console.log(`The profit from the movie ${nameMovie} is ${totalSum.toFixed(2)} lv.`);


}
movieProfit(["The Programmer",20,500,7.50,7]);
movieProfit(["Python Basics",40,34785,10.45,14]);
movieProfit(["The Jungle",22,20500,9.37,30]);
/*Задача 1. Приход от филм
Наети сте от "SoftUni Studios" да напишете програма която пресмята 
потенциалната печалба от продажбата на билети за филм. 
Прожекцията на филма трае предварително зададен брой дни, 
като всеки ден се продават определен брой билети. 
Цената на 1 билет се определя от студиото. 
За излъчване на продукцията, определен процент от общия приход остава за киното.  
Вход
От конзолата се четат 5 реда:
    1. Име на филм - текст
    2. Брой дни - цяло число в диапазона [1… 90]
    3. Брой билети  - цяло число в диапазона [100… 100000]
    4. Цена на билет - реално число в диапазона [5.0… 25.0]
    5. Процент за киното - цяло число в диапазона [5... 35]
Изход 
Да се отпечата на конзолата прихода от продажбите, в следния формат:
    • "The profit from the movie {име на филм} is {приход на студиото} lv."
Цената на прихода да бъде форматирана до втората цифра след десетичния знак.
Примерен вход и изход

Вход
The Programmer
20
500
7.50
7

Изход
The profit from the movie The Programmer is 69750.00 lv.

Обяснения
Цената на билетите за ден => 500 * 7.50 = 3750 lv.
Приходи за целия период => 20 * 3750 = 75000 lv.
Процент от приходите остава за киното 75000 * 7 / 100 = 5250 lv.
Приход от филма = 75000 - 5250 = 69750 lv.

Вход
Python Basics 
40
34785
10.45
14

Изход
The profit from the movie Python Basics is 12504511.80 lv.

Вход
The Jungle
22
20500
9.37
30

Изход
The profit from the movie The Jungle is 2958109.00 lv.


*/