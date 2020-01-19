function series(input) {
    let budget = +input.shift();
    let numSeries = +input.shift();

    for (let i = 0; i < numSeries; i++) {
        let nameSeries = input.shift();
        let price = +input.shift();

        switch (nameSeries) {
            case "Thrones":
                price *= 0.5;
                break;
            case "Lucifer":
                price *= 0.6;
                break;
            case "Protector":
                price *= 0.7;
                break;
            case "TotalDrama":
                price *= 0.8;
                break;
            case "Area":
                price *= 0.9;
                break;
        }
        budget -= price;
    }
    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    }
    else {
        console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`);
    }
}

series([10, 3, "Thrones", 5, "Riverdale", 5, "Gotham", 2]);
series([25, 6, "Teen Wolf", 8, "Protector", 5, "TotalDrama", 5, "Area", 4, "Thrones", 5, "Lucifer", 9]);
/*Задача 5. Сериали
От телевизионна компания ви наемат да създадете програма,
която да изчислява дали за клиентите ще е възможно да си закупят желаните сериали.
Разполагате с бюджет и брой сериали, които потребителят ще желае да закупи.
Всеки сериал съответно има заглавие и цена.
Някои от сериалите имат намаление:
    • Thrones – 50%
    • Lucifer – 40%
    • Protector – 30%
    • TotalDrama – 20%
    • Area – 10%
Вход
От конзолата се четат:
    • Бюджет  - реално  число в интервала [10.0… 100.0]
    • Брой сериали - n - цяло положително число в интервала [1… 10]
За всеки сериал се четат по два реда:
    • Име на сериал - текст
    • Цена за сериал -  реално  число в интервала [1.0… 15.0]
Изход
На конзолата да се изпише един ред:
    • Ако бюджета ви е по-голям или равен на цената на сериалите:
	"You bought all the series and left with {останали пари} lv."
    • Ако бюджета ви е по-малък от цената на сериалите:
	"You need {нужни пари} lv. more to buy the series!"
Резултатът да бъде закръглен до втората цифра след десетичния знак.
Примерен вход и изход

Вход
10
3
Thrones
5
Riverdale
5
Gotham
2

Изход
You bought all the series and left with 0.50 lv.

Обяснения
Получавате бюджет – 10лв. и брой сериали - 3.
Първият сериал е Thrones с цена 5лв. , който има с 50% отстъпка от цената 5  - 50% = 2.50
Вторият сериал е Riverdale, който не разполага с отстъпка от цената.
Третият сериал също не разполага с отстъпка.
Цена на сериалите е 2.50 + 5 + 2 = 9.50
Бюджетът ви е по-голям от цената на сериалите, следователно можете да ги закупите.

Вход
25
6
Teen Wolf
8
Protector
5
TotalDrama
5
Area
4
Thrones
5
Lucifer
9

Изход
You need 2.00 lv. more to buy the series!



*/