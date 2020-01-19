function filmPremiere(input) {
    let nameMovie = input.shift();
    let package = input.shift();
    let numTickets = +input.shift();

    let priceTicket = 0;
    switch (nameMovie) {
        case "John Wick":
            if (package == "Drink") {
                priceTicket = 12.00;
            } else if (package == "Popcorn") {
                priceTicket = 15.00;
            } else if (package == "Menu") {
                priceTicket = 19.00;
            }
            break;
        case "Star Wars":
            if (package == "Drink") {
                priceTicket = 18.00;
            } else if (package == "Popcorn") {
                priceTicket = 25.00;
            } else if (package == "Menu") {
                priceTicket = 30.00;
            }
            break;
        case "Jumanji":
            if (package == "Drink") {
                priceTicket = 9.00;
            } else if (package == "Popcorn") {
                priceTicket = 11.00;
            } else if (package == "Menu") {
                priceTicket = 14.00;
            }
            break;
    }
    if (nameMovie == "Star Wars" && numTickets >= 4) {
        priceTicket *= 0.70;
    }
    if (nameMovie == "Jumanji" && numTickets == 2) {
        priceTicket *= 0.85;
    }
    let totalPrice = priceTicket * numTickets;

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);

}
filmPremiere(["John Wick", "Drink", 6]);
filmPremiere(["Star Wars", "Popcorn", 4]);
/*Задача 3. Филмова премиера
За предстояща премиера на три известни продукции, местно кино ви наема да напишете софтуер,
който да изчислява цената, която клиентите трябва да заплатят, според филма и пакета, който са избрали.


                John Wick     Star Wars       Jumanji
Напитка         12 лв./бр.    18 лв. /бр.     9 лв. /бр.
Пуканки         15 лв. /бр.   25 лв. /бр.     11 лв. /бр.
Меню            19 лв. /бр.   30 лв. /бр.     14 лв. /бр.

Напишете програма, която изчислява цената, която трябва да се заплати, като имате в предвид следните отстъпки:
    • При избран филм "Star Wars" и закупени поне четири билета, има 30% семейна отстъпка.
    • При избран филм "Jumanji" и закупени точно два билета, има 15% отстъпка за двама.
Вход
Входът се чете от конзолата и се състои от три реда:
    • Първи ред - прожекция - текст с възможности"John Wick", "Star Wars" или "Jumanji"
    • Втори ред - пакет за филм - текст  с възможности "Drink", "Popcorn" или "Menu"
    • Трети ред - брой билети - цяло число в интервала [1… 30]
Изход
На конзолата трябва да се отпечата един ред:
"Your bill is {крайна цена} leva."
Цената да бъде закръглена до втората цифра след десетичния знак.
Примерен вход и изход

Вход
John Wick
Drink
6

Изход
Your bill is 72.00 leva.

Обяснения
Филмът е John Wick избрана е напитка.
Цена за един билет е 12 лв.
6 билета по 12 лв.  -> 72 лв. Няма отстъпки

Вход
Star Wars
Popcorn
4

Изход
Your bill is 70.00 leva.

Обяснения
Филмът е  Star Wars избрани са пуканки.
Цена за един билет е 25 лв. 4 билета по 25 лв. -> 100 лв.
За този филм има 30% отстъпка при 4 или повече човека.
30% от 100 -> 30 100 – 30 -> 70 лв. крайна цена

Вход
Jumanji
Menu
2

Изход
Your bill is 23.80 leva.

Обяснения
Филмът е  Jumanji избрано е меню(напитка + пуканки).
Цена за един билет е 14 лв. 2 билета по 14 лв. -> 28 лв.
За този филм има 15% отстъпка при точно 2 човека. 15% от 28 -> 4.20
28 – 4.20 лв. -> 23.80 лв.  крайна цена
*/