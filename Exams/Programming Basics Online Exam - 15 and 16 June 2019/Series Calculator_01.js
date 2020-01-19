function seriesCalculator(input) {
    let nameSeries = input.shift();
    let numSeasons = +input.shift();
    let numEpisode = +input.shift();
    let timeEpisode = +input.shift();

    let episode = timeEpisode += timeEpisode * 0.20;
    let season = (numEpisode * episode) + 10;
    let allSeasons = season * numSeasons;

console.log(`Total time needed to watch the ${nameSeries} series is ${Math.round(allSeasons)} minutes.`);

}
seriesCalculator(["Lucifer", 3, 18, 55]);
seriesCalculator(["Game of Thrones", 7, 10, 50]);
seriesCalculator(["Riverdale", 3, 21, 45]);

/*Задача 1. Калкулатор за сериали
Напишете програма, която изчислява колко време ще ви отнеме да изгледате всички епизоди на един сериал в минути.
Ще разполагате с брой сезони, брой епизоди на сезон и времетраене на един епизод.
Във всеки епизод има реклами, които са с продължителност 20% от времето на един епизод.
Също така знаете, че всеки сезон завършва със специален епизод, който е с 10м по-дълъг от обичайното.
Вход
От конзолата се четат 4 реда:
    • Име на сериал - текст
    • Брой сезони – цяло число в диапазона [1… 10]
    • Брой епизоди  – цяло число в диапазона [10… 80]
    • Времетраене на обикновен епизод без рекламите – реално число в диапазона [40.0… 65.0]
Изход
Да се отпечата на конзолата времето, необходимо за изглеждане на всички епизоди,
закръглено до най-близкото цяло число надолу в следния формат:
"Total time needed to watch the {име на сериал} series is {време} minutes."
Примерен вход и изход
Вход
Lucifer
3
18
55

Изход
Total time needed to watch the Lucifer series is 3594 minutes.

Обяснения
Продължителност на реклами за един епизод :
20% от 55 = 11.0
Продължителност на епизод с рекламите:
55 + 11 = 66.0
Допълнително време от специалните епизоди:  3*10 = 30
Общо време за гледане на сериала:
66 * 18 * 3 + 30 = 3594.0

Вход
Game of Thrones
7
10
50

Изход
Total time needed to watch the Game of Thrones series is 4270 minutes.


Вход
Riverdale
3
21
45

Изход
Total time needed to watch the Riverdale series is 3432 minutes.

*/