function christmasDecoration(input) {

    let budget = +input.shift();

    let nameSubject = input.shift();
    let money = 0;
    while (nameSubject !== "Stop") {

        for (let i = 0; i < nameSubject.length; i++) {
            money += (nameSubject.charCodeAt(i));
        }
        if (money > budget) {
            console.log("Not enough money!");
            break
        }
        console.log("Item successfully purchased!");
        nameSubject = input.shift();
    }
    if (nameSubject === "Stop") {
        console.log(`Money left: ${(budget - money)}`);
    }
}
christmasDecoration([3000, "star", "Christmas tree", "tinsel", "Tree stand", "Stop"]);
christmasDecoration([5000, "Christmas lights", "wreath", "Stop"]);
/*Задача 6. Коледна украса
Семейство Иванови решават да подменят коледната украса в своя дом и да поръчат нова по интернет.
Вашата задача е да напишете програма, която изчислява, дали бюджетът ще им стигне за украсата.
Цената на всеки предмет ще представялва сумата от ASCII кодовете на всеки символ от думата.
Вход
Първия ред от входа представлява:
Бюджетът за украсата - цяло число в интервала [1 … 50000]
След това се четат поредица от редове до получаване на команда "Stop":
Име на предмет - текст
Изход
При успешна покупка (т.е ако цената на предмета е по-малка или равна на наличните пари), на конзолата да се отпечата:
"Item successfully purchased!"
При неуспешна покупка (т.е ако цената е по-голяма от останалите пари), да се отпечата:
"Not enough money!" и програмата да приключи
При получаване на команда "Stop", на конзолата да се отпечата:
"Money left: {останалият бюджет}" и програмата да приключи
Примерен вход и изход
Вход
3000
star
Christmas tree
tinsel
Tree stand
Stop

Изход
Item successfully purchased!
Item successfully purchased!
Item successfully purchased!
Not enough money!


Обяснения
Бюджетът, с който разполагаме е 3000лв.
Цената на първата украса се образува от ASCII стойностите за всеки символ (s + t + a + r) = 442 <= 3000, следователно я купуваме.
Остават ни 3000 – 442 = 2558 лв.
…
Цената на четвъртия артикул е 970, а останалият бюджет е 497, няма достатъчно средства и програмата приключва работа

Вход
5000
Christmas lights
wreath
Stop

Изход
Item successfully purchased!
Item successfully purchased!
Money left: 2724


Обяснения
Бюджетът, с който разполагаме е 5000лв.
Цената на първата украса се образува от ASCII стойностите за всеки символ (Christmas lights) = 1625 <= 5000, купуваме я.
Остават ни 5000 – 1625 = 3375 лв.
…
Получаваме командата "Stop", печатаме останалата сума от бюджета и програмата приключва работа

*/