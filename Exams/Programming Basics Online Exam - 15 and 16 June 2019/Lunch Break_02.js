function lunchBreak(input) {
    let nameSeries = input.shift();
    let timeEpisode = +input.shift();
    let timeBreak = +input.shift();

    let recreation = timeBreak / 4;
    let lunches = timeBreak / 8;
    let freeTime = timeBreak - (recreation + lunches);

    if(freeTime >= timeEpisode){
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(freeTime - timeEpisode)} minutes free time.`);
    }
    else{
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(timeEpisode - freeTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", 60, 96]);
lunchBreak(["Teen Wolf", 48, 60]);


/*Задача 2. Обедна почивка
По време на обедната почивка искате да изгледате епизод от своя любим сериал.
Вашата задача е да напишете програма, с която ще разберете дали имате достатъчно време да изгледате епизода.
По време на почивката отделяте време за обяд и за отдих.
Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.
Вход
От конзолата се четат 3 реда:
    1. Име на сериал – текст
    2. Продължителност на епизод  – цяло число в диапазона [10… 90]
    3. Продължителност на почивката  – цяло число в диапазона [10… 120]
Изход
На конзолата да се изпише един ред:
    • Ако времето е достатъчно да изгледате епизода:
"You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
    • Ако времето не Ви е достатъчно:
"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
Времето да се закръгли до най-близкото цяло число нагоре.

Примерен вход и изход


Вход
Game of Thrones
60
96

Изход
You have enough time to watch Game of Thrones and left with 0 minutes free time.

Обяснения
Време за обяд : 96 * 1/8 = 12.0
Време за отдих : 96 * 1/4 = 24.0
Останало време : 96 - 12 - 24 = 60
Останалото време е по-голямо или равно на продължителността на епизода, следователно печатаме подходящия изход.

Вход
Teen Wolf
48
60

Изход
You don't have enough time to watch Teen Wolf, you need 11 more minutes.

Обяснения
Време за обяд : 60 * 1/8 = 7.5
Време за отдих : 60 * 1/4 = 15.0
Останало време : 60 – 7.5 - 15 = 37.5
Останалото време е по-малко от продължителността на епизода, следователно печатаме подходящия изход.

*/