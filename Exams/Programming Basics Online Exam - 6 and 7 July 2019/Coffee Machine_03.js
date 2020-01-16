function coffeeMachine(input) {

    let drinks = input.shift();
    let sugar = input.shift();
    let numDrinks = +input.shift();

    let priceDrink = 0;
   
    switch (drinks) {
        case "Espresso":
            if (sugar == "Without") {
                priceDrink = 0.90;
            }
            else if(sugar == "Normal"){
                priceDrink = 1.00;
            }
            else if(sugar == "Extra"){
                priceDrink = 1.20;
            }
            break;
            case "Cappuccino":
            if (sugar == "Without") {
                priceDrink = 1.00;
            }
            else if(sugar == "Normal"){
                priceDrink = 1.20;
            }
            else if(sugar == "Extra"){
                priceDrink = 1.60;
            }
            break;
            case "Tea":
            if (sugar == "Without") {
                priceDrink = 0.50;
            }
            else if(sugar == "Normal"){
                priceDrink = 0.60;
            }
            else if(sugar == "Extra"){
                priceDrink = 0.70;
            }
            break;
    }
    let totalPrice = priceDrink * numDrinks;
    if(sugar == "Without"){
        totalPrice = totalPrice * 0.65;
    }
    if(drinks == "Espresso" && numDrinks >= 5){
        totalPrice = totalPrice * 0.75;
    }
    if(totalPrice > 15.00){
        totalPrice = totalPrice * 0.80;
    }
    
    console.log(`You bought ${numDrinks} cups of ${drinks} for ${totalPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", 10]);
coffeeMachine(["Cappuccino", "Normal", 13]);
coffeeMachine(["Tea", "Extra", 3]);
/*Задача 3. Кафемашина
Напишете софтуер, който да пресмята сметката на клиент, закупил определен брой от дадена напитка от кафемашина.

                 Без захар       Нормално        Допълнително захар
Еспресо        0.90 лв./бр.      1 лв. /бр.       1.20 лв. /бр.
Капучино       1.00 лв. /бр.     1.20 лв. /бр.    1.60 лв. /бр.
Чай            0.50 лв. /бр.     0.60 лв. /бр.    0.70 лв. /бр.

Трябва да имате предвид следните отстъпки:
    • При избрана напитка без захар има 35% отстъпка.
    • При избрана напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка.
    • При сума надвишава 15 лева, 20% отстъпка от крайната цена,
Отстъпките се прилагат в реда на тяхното описване.
Вход
Входът се чете от конзолата и се състои от три реда:
    • Първи ред - напитка - текст с възможности"Espresso", "Cappuccino" или "Tea"
    • Втори ред - захар - текст  с възможности "Without", "Normal" или "Extra"
    • Трети ред - брой напитки - цяло число в интервала [1… 50]
Изход
На конзолата трябва да се отпечата един ред:
"You bought {брой напитки} cups of {напитка} for {крайна цена} lv."
Цената да бъде форматирана до втората цифра след десетичния знак.
Примерен вход и изход
Вход
Espresso
Without
10

Изход
You bought 10 cups of Espresso for 4.39 lv.

Обяснения
Избрани са 10 броя Еспресо без захар по 0.90 лв. за чаша -> 9 лв.
35% отстъпка за напитка без захар от 9 лв. ->  3.15 -> 9 – 3.15 = 5.85
25% отстъпка за покупка на поне 5 броя еспресо. 25% от 5.85 -> 1.4625
5.85 – 1.4625 -> 4.3875

Вход
Cappuccino
Normal
13

Изход
You bought 13 cups of Cappuccino for 12.48 lv.

Обяснения
Избрани са 13 броя Капучино със нормална захар по 1.20 лв. за чаша -> 15.60 лв.
15.60 >= 15.00 -> 20% отстъпка от 15.60 е 3.12
15.60 – 3.12 = 12.48 лв.

Вход
Tea
Extra
3

Изход
You bought 3 cups of Tea for 2.10 lv.

Обяснения
Избрани са 3 чая с допълнителна захар по 0.70 лв. за чаша -> 2.10 лв.
Няма отстъпки, крайната цена остава 2.10 лв.
*/