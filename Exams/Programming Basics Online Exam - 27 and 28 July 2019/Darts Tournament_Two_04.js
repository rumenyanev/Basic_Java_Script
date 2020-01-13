function dartsTournamentTwo(input){
    let startingPoints = input.shift();
    let shotsCounter = 0;
     wonWithBullseye = false;

    while (startingPoints > 0) {
        let sector = input.shift();
        shotsCounter++;
        if ("bullseye"=== sector) {
            wonWithBullseye = true;
            break;
        }
        let points = +input.shift();

        if ("number section" === sector) {
            startingPoints -= points;
        } else if ("double ring" === sector) {
            startingPoints -= (points * 2);
        } else if ("triple ring" === sector) {
            startingPoints -= (points * 3);
        }

        if (startingPoints < 0) {
            break;
        }
    }

    if (wonWithBullseye) {
       console.log(`Congratulations! You won the game with a bullseye in ${shotsCounter} moves!`);
    } else if (startingPoints == 0) {
       console.log(`Congratulations! You won the game in ${shotsCounter} moves!`);
    } else {
        console.log(`Sorry, you lost. Score difference: ${Math.abs(startingPoints)}.`);
    }
}

//dartsTournamentTwo([150, "double ring", 20, "triple ring", 10, "number section", 20, "triple ring", 20]);
dartsTournamentTwo([101,"triple ring",7,"double ring",19,"bullseye"]);
//dartsTournamentTwo([75,"triple ring",17,"number section",16,"triple ring",13,"double ring",10]);
/*Задача 4. Турнир по дартс
На круизния кораб, на който Ани и семейството й прекарват лятната си почивка
се организират различни развлечения за гостите.
 Ани решила да се запише за участие в турнира по дартс.

 В тази игра играчът започва с определен брой точки, които се намаляват постепенно
 и при достигането на точно нула точки играчът печели.

 На мишената има следните сектори –
 сектор с конкретен брой точки (number section),
 сектор, който удвоява точките (double ring),
 сектор, който утроява точките (triple ring) и
 център на мишената (bullseye).
 Ако играчът уцели центъра на мишената, автоматично печели играта.
 Играчът губи ако точките му станат отрицателни.
Вход
От конзолата първо се чете един ред:
    • Първоначален брой точки  –  цяло положително число в интервала [1 … 1000];
След това последователно се четат по два реда:
    • Сектор на мишената – текст с възможности: "number section", "double ring",
"triple ring", "bullseye"
    • Брой точки  – цяло положително число в интервала [1 … 100]
Изход
На конзолата се отпечатва един ред:
    • Ако играчът спечели чрез достигане на нула точки:
	"Congratulations! You won the game in {брой ходове} moves!"
    • Ако играчът спечели чрез уцелване на центъра на мишената:
	"Congratulations! You won the game with a bullseye in {брой ходове} moves!"
    • Ако играчът загуби:
	"Sorry, you lost. Score difference: {брой отрицателни точки}."
Примерен вход и изход
Вход
150
double ring
20
triple ring
10
number section
20
triple ring
20


Изход
Congratulations! You won the game in 4 moves!

Обяснения
Ани започва със 150 точки. В първия ход уцелва 20 точки в двойния сектор и точките се удвояват =>
 20 * 2 = 40.  След това се изваждат от първоначалния брой точки: 150 – 40 = 110.
Във втория ход уцелва 10 точки в тройния сектор => 10 * 3 = 30, които отново се изваждат => 110 – 30 =  80.
В третия ход уцелва точно 20 точки, които отново се изваждат => 80 – 20 = 60.
В четвъртия ход уцелва 20 точки в тройния сектор => 20 * 3 = 60, след което се изваждат => 60 - 60 = 0.
Ани достига нула точки и печели играта.


Вход
101
triple ring
7
double ring
19
bullseye

Изход
Congratulations! You won the game with a bullseye in 3 moves!

Обяснения
Ани започва със 101 точки. В първия ход уцелва 7 точки в тройния сектор  =>
 7 * 3 = 21.  След това се изваждат от първоначалния брой точки: 101 – 21 = 80.
Във втория ход уцелва 19 точки в двойния сектор => 19 * 2 = 38, които отново се изваждат => 80 – 38 =  42.
В третия ход уцелва центъра => печели и играта приключва.

Вход
75
triple ring
17
number section
16
triple ring
13
double ring
10

Изход
Sorry, you lost. Score difference: 31.

Обяснения
Ани започва със 75 точки. В първия ход уцелва 17 точки в тройния сектор  =>
 17 * 3 = 51.  След това се изваждат от първоначалния брой точки: 75 – 51 = 24.
Във втория ход уцелва 16, които отново се изваждат без да се умножават, защото са в number sector  => 24 – 16 =  8.
В третия ход уцелва 13  точки в тройния сектор  => 13 * 3 = 39, които отново се изваждат => 8 – 39 = -31.
Точките стават отрицателни => Ани губи играта.



*/