function PCGameShop(input) {
    let numSalesGames = +input.shift();

    let percentHearthstone = 0.0;
    let percentFornite = 0.0;
    let percentOverwatch = 0.0;
    let percentOthers = 0.0;

    let numGames = numSalesGames;
    while (numGames-- > 0) {
        let game = input.shift();
        switch (game) {
            case "Hearthstone":
                percentHearthstone++;
                break;
            case "Fornite":
                percentFornite++;
                break;
            case "Overwatch":
                percentOverwatch++;
                break;
            default:
                percentOthers++;
                break;
        }
    }
    let Hearthstone = percentHearthstone * 1.0 / numSalesGames * 100;
    let Fornite = percentFornite * 1.0 / numSalesGames * 100;
    let Overwatch = percentOverwatch * 1.0 / numSalesGames * 100;
    let Others = percentOthers * 1.0 / numSalesGames * 100;

    console.log(`Hearthstone - ${Hearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${Fornite.toFixed(2)}%`);
    console.log(`Overwatch - ${Overwatch.toFixed(2)}%`);
    console.log(`Others - ${Others.toFixed(2)}%`);
}


PCGameShop([4, "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
PCGameShop([3,"Hearthstone","Diablo 2","Star Craft 2"]);

/*Задача 5. Магазин за компютърни игри
Магазин за компютърни игри ви наема за да направите статистика на
процента продажби на игрите от последния месец, като изчислите
по колко процента от общите продажби са за някоя от игрите.
Процентите трябва да бъдат разделени на четири части, три заглавия на игри и всички останали :
    • Hearthstone
    • Fornite
    • Overwatch
    • Others
Вход
От конзолата се четат:
    • Брой продадени игри- n - цяло положително число в интервала [1… 100]
За следващите n реда се чете по един ред:
    • Име на игра - текст
Изход
На конзолата да се изпишат четири реда:
	"Hearthstone - {процент продажби на Hearthstone}%"
	"Fornite - {процент продажби на Fornite}%"
	"Overwatch - {процент продажби на Overwatch}%"
	"Others - {процент продажби на всички останали игри}%"
Резултатът да бъде закръглен до втората цифра след десетичния знак.
Примерен вход и изход

Вход
4
Hearthstone
Fornite
Overwatch
Counter-Strike

Изход
Hearthstone - 25.00%
Fornite - 25.00%
Overwatch - 25.00%
Others - 25.00%

Обяснения
Продадени са  4 игри.
По една игра Hearthstone, Fornite и Overwatch, които принадлежат към съответните им категории,
както и една игра Counter-Strike, която спада към допълнителната категория.


Вход
3
Hearthstone
Diablo 2
Star Craft 2

Изход
Hearthstone - 33.33%
Fornite - 0.00%
Overwatch - 0.00%
Others - 66.67%

Обяснения
Продадени са 3 игри.
Една игра от категорията Hearthstone. Както и 2 игри Diablo 2 и Star Craft 2

*/
