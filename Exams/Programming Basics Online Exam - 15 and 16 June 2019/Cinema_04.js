function cinema(input) {

    let capacity = +input.shift();
    let profit = 0;
    let priceTicket = 5;
    let command = input.shift();

    while ("Movie time!" != command) {
        let people = +command;
        if (capacity - people >= 0) {
            capacity -= people;
            profit += people * priceTicket;
            if (people % 3 == 0) {
                profit -= priceTicket;
            }
        } else {
            console.log("The cinema is full.");
            break;
        }
        command = input.shift();
    }

    if ("Movie time!" == command) {
        console.log(`There are ${capacity} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${profit} lv.`);
}

cinema([60, 10, 6, 3, 20, 15, "Movie time!"]);
cinema([50, 15, 10, 10, 15, 5]);
cinema([100,10,10,10,10,10,10,10,10,10,10,"Movie time!"]);
/*Задача 4. Кино
От кино ви наемат да напишете програма, чрез която да разберете
дали на една прожекцията ще се запълни залата и колко пари ще се изкарат от нея.
Получавате места в залата и на всеки следващ ред до команда "Movie time!",
колко хора влизат в залата. Цената на един билет е 5 лв.
Ако текущия брой хора влезли в залата се дели на 3 без остатък, се прави отстъпка 5лв от общата им сметка.
Ако в залата се опитат да влязат повече хора от колкото места са останали,
то се счита че местата са изчерпани и програмата трябва да приключи четенето на вход.
Вход
От конзолата се четат:
    • На първия ред - капацитет на залата - цяло число в интервала [50... 150]
На всеки следващ ред до команда "Movie time!":
        ◦ Брой хора влизащи в киното - цяло число в интервала [1… 15]
Изход
На конзолата първо да се отпечата един ред:
    • При получена команда "Movie time!":
 "There are {останали места} seats left in the cinema."
    • При изчерпване на местата в залата:
	"The cinema is full."
След това да се отпечата:
	"Cinema income - {приходи от залата} lv."
Примерен вход и изход

Вход
60
10
6
3
20
15
Movie time!

Изход
There are 6 seats left in the cinema.
Cinema income - 255 lv.

Обяснения
Първо получаваме капацитет на залата - 60 места.
На следващият ред получаваме хората, които са влезли в залата - 10.
Парите, който те ще заплатят са 10 * 5 = 50.
След това получаваме, че в залата влизат 6 човека,
тяхната бройка се дели на 3 и плащат с 5 лв. по-малко.
Аналогично продължаваме до команда  "Movie time!" като принтираме съответният изход.

Вход
50
15
10
10
15
5


Изход
The cinema is full.
Cinema income - 240 lv.


Вход
100
10
10
10
10
10
10
10
10
10
10
Movie time!

Изход
There are 0 seats left in the cinema.
Cinema income - 500 lv.



*/