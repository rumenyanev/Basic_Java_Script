function bakingCompetition(input) {
    let bakers = +input.shift();

    let totalSum = 0;
    let totalSweetsCnt = 0;

    for (let i = 0; i < bakers; i++) {
        let bakerName = input.shift();

        let cookiesCnt = 0;
        let cakesCnt = 0;
        let wafflesCnt = 0;

        let sweetName = input.shift();
        while ("Stop baking!"!= sweetName) {
            let sweetsCnt = +input.shift();
            switch (sweetName) {
                case "cookies":
                    cookiesCnt += sweetsCnt;
                    break;
                case "cakes":
                    cakesCnt += sweetsCnt;
                    break;
                case "waffles":
                    wafflesCnt += sweetsCnt;
                    break;
            }
            sweetName = input.shift();
        }
        totalSum += ((cookiesCnt * 1.5) + (cakesCnt * 7.8) + (wafflesCnt * 2.3));
        totalSweetsCnt += (cookiesCnt + cakesCnt + wafflesCnt);
        console.log(`${bakerName} baked ${cookiesCnt} cookies, ${cakesCnt} cakes and ${wafflesCnt} waffles.`);
    }
    console.log(`All bakery sold: ${totalSweetsCnt}`);
    console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
}

bakingCompetition([3, "Iva", "cookies", 5, "cakes", 3, "Stop baking!", "George", "cakes", 7, "waffles", 2, "Stop baking!",
    "Ivan", "cookies", 6, "Stop baking!"]);
/*Задача 6. Състезание по готварство
По време на почивката на семейството на Ани се организирало благотворително състезание
по готварство и майката на Ани се записала за участие.
Всеки един от участниците избирал колко и кои от възможните сладкиши да направи,
а те били следните -

сладки, торти и гофрети.

След като се изпекат, сладкишите се продават на следните цени за брой:

сладки - 1,50,
торти - 7,80,
гофрети - 2,30,

а събраната сума се дарява за благотворителност.
Напишете програма, която проследява колко и кои сладкиши е изпекъл всеки един от участниците,
колко е общият брой на продадените сладкиши и колко е събраната сума за благотворителност.
Вход
От конзолата се четат следните редове:
    • Първи ред – брой участници в състезанието – цяло положително число в интервала [1…10]
За всеки един от участниците се четат следните редове до прочитане на командата "Stop baking!":
    • Първи ред – име на участник - текст
    • Втори ред – вид сладкиш - текст с възможности: "cookies", "cakes", "waffles"
    • Трети ред – брой изпечени сладкиши от дадения вид - цяло число в интервала [1…1000]

Изход
За всеки един от участниците се отпечатва по един ред:

    • "{име на съответния участник} baked {брой изпечени сладки} cookies, {брой изпечени торти} cakes and {брой изпечени гофрети} waffles."
Накрая да се отпечатат два реда, съдържащи съответно общия брой на изпечените сладкиши и събраната сума за благотворителност,
форматирани по следния начин:
    • "All bakery sold: {брой сладкиши}"
    • "Total sum for charity: {сума за благотворителност} lv."
Сумата да бъде форматирана до втората цифра след десетичния знак.
Примерен вход и изход
Вход
3
Iva
cookies
5
cakes
3
Stop baking!
George
cakes
7
waffles
2
Stop baking!
Ivan
cookies
6
Stop baking!

Изход
Iva baked 5 cookies, 3 cakes and 0 waffles.
George baked 0 cookies, 7 cakes and 2 waffles.
Ivan baked 6 cookies, 0 cakes and 0 waffles.
All bakery sold: 23
Total sum for charity: 99.10 lv.

Обяснения
Участниците са трима.
Първият пече 5 бисквити и 3 торти. Вторият 7 торти и 2 гофрети. Третият 6 бисквити.
Общият брой на печивата е 5 + 3 + 7 + 2 + 6 = 23.
Общата им сума е
5 * 1.50 + 3 * 7.80 + 7 * 7.80 + 2 * 2.30 + 6 * 1.50 = 99.10


Вход
2
Annie
cakes
3
waffles
6
cookies
2
Stop baking!
Petya
waffles
8
Stop baking!

Изход
Annie baked 2 cookies, 3 cakes and 6 waffles.
Petya baked 0 cookies, 0 cakes and 8 waffles.
All bakery sold: 19
Total sum for charity: 58.60 lv.


Вход
3
George
cookies
10
Stop baking!
Annie
waffles
8
Stop baking!
Ivan
cookies
6
waffles
3
Stop baking!

Изход
George baked 10 cookies, 0 cakes and 0 waffles.
Annie baked 0 cookies, 0 cakes and 8 waffles.
Ivan baked 6 cookies, 0 cakes and 3 waffles.
All bakery sold: 27
Total sum for charity: 49.30 lv.

*/