function travelAgency(input) {

    let nameTown = input.shift();
    let typePackage = input.shift();
    let vip = input.shift();
    let days = +input.shift();

    let price = 0.0;
    switch (nameTown) {
        case "Bansko":
            if (typePackage == "withEquipment") {
                price = 100.00;
                if (vip == "yes") {
                    price = 100.00 * 0.90;
                }
            } else if (typePackage == "noEquipment") {
                price = 80.00;
                if (vip == "yes") {
                    price = 80.00 * 0.95;
                }

            } else {
                console.log("Invalid input!");
                return;
            }
            break;
        case "Borovets":
            if (typePackage == "withEquipment") {
                price = 100.00;
                if (vip == "yes") {
                    price = 100.00 * 0.90;
                }
            } else if (typePackage == "noEquipment") {
                price = 80.00;
                if (vip == "yes") {
                    price = 80.00 * 0.95;
                }

            } else {
                console.log("Invalid input!");
                return;
            }
            break

        case "Varna":
            if (typePackage == "withBreakfast") {
                price = 130.00;
                if (vip == "yes") {
                    price = 130.00 * 0.88;
                }
            } else if (typePackage == "noBreakfast") {
                price = 100.00;
                if (vip == "yes") {
                    price = 100.00 * 0.93;
                }

            } else {
                console.log("Invalid input!");
                return;
            }
            break

        case "Burgas":
            if (typePackage == "withBreakfast") {
                price = 130.00;
                if (vip == "yes") {
                    price = 130.00 * 0.88;
                }
            } else if (typePackage == "noBreakfast") {
                price = 100.00;
                if (vip == "yes") {
                    price = 100.00 * 0.93;
                }

            } else {
                console.log("Invalid input!");
                return;
            }
            break
        default: {
            console.log("Invalid input!");
            return;
        }}
            if (days > 7) {
                days -= 1;
            }
            if (days < 1) {
                console.log("Days must be positive number!");
                return;
            }
let totalPrice = price * days;
console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    
}
travelAgency(["Varna","withBreakfast","no",0])
/*
travelAgency(["Borovets", "noEquipment", "yes", 6]);
travelAgency(["Bansko", "withEquipment", "no", 2]);
travelAgency(["Varna", "withBreakfast", "yes", 5]);
travelAgency(["Burgas", "noBreakfast", "no", 4]);
travelAgency(["Varna", "withBreakfast", "no", 0]);
travelAgency(["Gabrovo", "noBreakfast", "no", 3]);
/*Задача 3. Туристическа агенция
Туристическа агенция има нужда от система за изчисляване на дължимата сума при резервация.
В зависимост от различните дестинации и различните пакети, цената е различна.
Цените за ден са следните:

                         Банско/Боровец                          Варна/Бургас
                  с екипировка    без екипировка          със закуска    без закуска
Цена за ден          100лв.          80лв                     130лв.         100лв.

VIP отстъпка          10%            5%                       12%             7%

Ако клиентът е заявил престой повече от 7 дни, получава единия ден безплатно.
Вход
От конзолата се четат 4 реда:
    1. Име на града - текст с възможности ("Bansko",  "Borovets", "Varna" или "Burgas")
    2. Вид на пакета - текст с възможности ("noEquipment",  "withEquipment", "noBreakfast" или "withBreakfast")
    3. Притежание на VIP отстъпка - текст с възможности  "yes" или "no"
    4. Дни за престой - цяло число в интервала [1 … 10000]
Изход
На конзолата се отпечатва 1 ред:
    • Когато потребителят е въвел всички данни правилно, отпечатваме:
"The price is {цената, форматирана до втория знак}lv! Have a nice time!"
    • Ако потребителят е въвел по-малко от 1 ден за престой, отпечатваме:
"Days must be positive number!"
    • Когато при въвеждането на града или вида на пакета се въведат невалидни данни, отпечатваме: "Invalid input!"
Примерен вход и изход

Вход
Borovets
noEquipment
yes
6

Изход
The price is 456.00lv! Have a nice time!

Коментар
Градът е Боровец, а пакетът е без екипировка, съответно цената за ден е 80лв.
Клиентът разполага с VIP пакет, така че цената за ден става 80-80*0.05=76лв.
Резервацията е за 6 дни, следователно крайната цена е 76 * 6 = 456 лв.

Вход
Bansko
withEquipment
no
2

Изход
The price is 200.00lv! Have a nice time!


Вход
Varna
withBreakfast
yes
5

Изход
The price is 572.00lv! Have a nice time!


Вход
Burgas
noBreakfast
no
4

Изход
The price is 400.00lv! Have a nice time!


Вход
Varna
withBreakfast
no
0

Изход
Days must be positive number!


Вход
Gabrovo
noBreakfast
no
3

Изход
Invalid input!



*/