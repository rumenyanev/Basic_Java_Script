function poolDay(input){
let numPeople = +input.shift();
let charge = +input.shift();
let priceLounge = +input.shift();
let priceUmbrella = +input.shift();

let chargePeople = (numPeople * charge) ;
let peopleWithLounge = (Math.ceil(numPeople * 0.75));
let chargeLounge = peopleWithLounge * priceLounge;
let peopleWithUmbrella = Math.ceil(numPeople/2);
let chargeUmbrella = peopleWithUmbrella * priceUmbrella;

let totalSum = chargePeople + chargeLounge + chargeUmbrella;

console.log(`${totalSum.toFixed(2)} lv.`);

}
poolDay([21,5.50,4.40,6.20]);
poolDay([50,6,8,4]);

/*Задача 1. Басейн
Преподавателският екип на СофтУни организира работен ден на басейн по случай настъпването на лятото. 
Вашата задача е да напишете програма, която да изчислява каква сума трябва да се заплати. 
За всеки един човек от екипа трябва да се заплати такса вход. 
Трябва да имате предвид, че един чадър стига за двама души. Знае се, че само 75% от екипа искат шезлонги. 
При изчислението на броя на чадърите и шезлонгите, техният брой да се закръгли до по-голямото цяло число.
Вход
От конзолата се четат 4 числа:
    1. Първи ред – брой на хората. Цяло число в интервала [1…100]
    2. Втори ред – такса вход. Реално число в интервала [0.00…50.00]
    3. Трети ред – цена един за шезлонг. Реално число в интервала [0.00…50.00]
    4. Четвърти ред – цена за един чадър. Реално число в интервала [0.00...50.00] 
Изход
"{сумата за покриване на разходите} lv." 
Резултатът да се форматира до втората цифра след десетичния знак.
Примерен вход и изход


Вход
21
5.50
4.40
6.20

Изход
254.10 lv.


Обяснения
21 човека по 5.50 лв. такса вход е 115.50 лв.
75% от 21 човека са 16, следователно трябват 16 шезлонга, които са на цена от 4.40лв. -> 16 * 4.40 = 70.40 лв.
50% от 21 човека са 11, следователно трябват 11 чадъра, които са на цена от 6.20лв. -> 11 * 6.20 = 68.20 лв.
Крайната цена е: 115.50 + 70.40 + 68.20 = 254.10


Вход
50
6
8
4

Изход
704.00 lv.


Вход
100
8
6
4

Изход
1450.00 lv.
*/