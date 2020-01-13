function cruiseGames(input) {
    
    let player = input.shift();
    let games = +input.shift();

    let volleyballGames = 0;
    let tennisGames = 0;
    let badmintonGames = 0;

    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;

    while(games -- > 0) {
        let gameName = input.shift();
        let points = +input.shift();

        switch (gameName) {
            case "volleyball":
                volleyballPoints += points * 1.07;
                volleyballGames++;
                break;
            case "tennis":
                tennisPoints += points * 1.05;
                tennisGames++;
                break;
            case "badminton":
                badmintonPoints += points * 1.02;
                badmintonGames++;
                break;
        }
    
    }
    let volleyballAvgPoints = Math.floor(volleyballPoints / volleyballGames);
    let tennisAvgPoints = Math.floor(tennisPoints / tennisGames);
    let badmintonAvgPoints = Math.floor(badmintonPoints / badmintonGames);
    let totalPoints = Math.floor(volleyballPoints + tennisPoints + badmintonPoints);

    if (volleyballAvgPoints >= 75 && tennisAvgPoints >= 75 && badmintonAvgPoints >= 75) {
        console.log(`Congratulations, ${player}! You won the cruise games with ${totalPoints} points.`);
    } else {
        console.log(`Sorry, ${player}, you lost. Your points are only ${totalPoints}.`);
    }
}


cruiseGames(["Pepi", 3, "volleyball", 78, "tennis", 98, "badminton", 105]);
cruiseGames(["Annie", 5, "badminton", 34, "tennis", 76, "badminton", 10, "volleyball", 62, "badminton", 56]);
/*Задача 5. Круизни игри
На круизния кораб, на който Ани прекарвала почивката си, се организирали т. нар. круизни игри.
Всеки участник избирал в колко игри да участва, като всяко състезание му носело даден брой точки.
Възможните игри били волейбол, тенис и бадминтон, като в зависимост от трудността на играта
получените точки се увеличавали както следва:
 волейболът увеличавал точките със 7%,
 тенисът с 5%,
 а бадминтонът с 2%.
Играчът печели ако средноаритметичният брой точки от всеки един вид игра е поне 75, в противен случай губи.

Напишете програма, която пресмята дали играчът е победил или загубил и изчислява общият му брой точки.

ЗАБЕЛЕЖКА: При пресмятане на средноаритметичните точки и общият брой точки да се закръгли към по-малкото цяло число.
Вход
От конзолата първоначално се прочитат два реда:
    • Име на играч – текст
    • Брой изиграни игри – цяло число в интервала [1...10]
За всяка една игра се четат по два реда:
    • Име на играта – текст с възможности "volleyball", "tennis", "badminton"
    • Брой точки – цяло число в интервала [1…100]
Изход
На конзолата да се отпечата един ред:
    • Ако играчът е спечелил:
    • "Congratulations, {име на играча}! You won the cruise games with {общият брой точки} points."
    • Ако играчът е загубил:
    • "Sorry, {име на играча}, you lost. Your points are only {общият брой точки}."
Примерен вход и изход
Вход
Pepi
3
volleyball
78
tennis
98
badminton
105

Изход
Congratulations, Pepi! You won the cruise games with 293 points.


Обяснения
Пепи е изиграла 3 игри:
Първата е волейбол със 78 точки, които се увеличават със 7% =>
78 + 7% * 78 = 83,46
Втората е тенис с 98 точки, които се увеличат с 5% =>
98 + 5% * 98 = 102.9
Третата е бадминтон със 105 точки, които се увеличават с 2% => 105 + 2% * 105 = 107.1
Броят на всяка от игрите е 1.
Средноаритметичен брой точки от игрите по волейбол:
83,46 / 1 = 83,46  >= 75
Средноаритметичен брой точки от игрите по тенис:
102,9 / 1 = 102,9 >= 75
Средноаритметичен брой точки от игрите по бадминтон:
107,1 / 1 = 107,1 >= 75
Средноаритметичния брой точки от ВСЯКА една игра е по-голям от 75 => Пепи печели.
Общият му брой точки е 83,46 + 102,9 + 107,1 = 293


Вход
Annie
5
badminton
34
tennis
76
badminton
10
volleyball
62
badminton
56

Изход
Sorry, Annie, you lost. Your points are only 248.

Вход
Ivan
7
volleyball
70
tennis
100
badminton
64
volleyball
125
tennis
62
tennis
72
badminton
87

Изход
Congratulations, Ivan! You won the cruise games with 608 points.

*/