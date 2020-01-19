function favoriteMovie(input){
    let line = input.shift();
    let maxSum = Number.MIN_SAFE_INTEGER;
    let countMovie = 0;
    let bestMovie = "";

    while ("STOP"!=line) {
        let sum = 0;
        countMovie++;
        for (let i = 0; i < line.length; i++) {
            let currentChar = line.charCodeAt(i);
            sum += currentChar;
            if (currentChar >= 65 && currentChar <= 90) {
                sum -= line.length;
            } else if (currentChar >= 97 && currentChar <= 122) {
                sum -= line.length * 2;
            }
        }
        if (sum > maxSum) {
            maxSum = sum;
            bestMovie = line;
        }
        if (countMovie >= 7) {
            break;
        }
        line = input.shift();
    }

    if (countMovie >= 7) {
        console.log(`The limit is reached.`);
    }

    console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
}

favoriteMovie(["[Matrix","Breaking bad","Legend","STOP"]);
favoriteMovie(["Wrong turn","The maze","Area 51","Night Club","Ice age","Harry Potter","Wizards"]);
/*Задача 6. Любим филм
Петък вечер е и се чудите кой филм да си пуснете да гледате. 
Решавате да напишете програма, която да избере това вместо вас. 
До команда "STOP" получавате заглавия на любими ваши филми. 
Най-добрият филм за вас ще бъде този, който има най-много точки. 
Точките се изчисляват като сбор от ASCII стойностите на символите в заглавието на филма. 
(няма да има случай, в който имаме два филма с равен брой точки)
При изчислението на точките трябва да се има предвид следното:
    • За всяка малка буква в заглавието, от сумата трябва да се извади два пъти дължината на заглавието на филма.
    • За всяка главна буква в заглавието, от сумата трябва да се извади дължината на заглавието на филма.
Може да имате максимум 7 заглавия на филми.
Вход
От конзолата се четат редове до команда "STOP" или до достигането на лимита от 7 филма:
    • Заглавие на филм  – текст;
Изход
На конзолата да се отпечата:
    • Ако сте достигнали лимита от 7 филма трябва да отпечатате:
"The limit is reached."
Да се отпечата най-добрият филм за вас:
"The best movie for you is {заглавие на филм} with {сума на символите} ASCII sum."
Примерен вход и изход
Вход
Matrix
Breaking bad
Legend
STOP

Изход
The best movie for you is Breaking bad with 878 ASCII sum.

Обяснения
Първо получавам Matrix, първата буква е M със стойност 77, 
но тя е главна буква и вадим от нея дължината на заглавието  77- 6  = 71 , 
втората буква е a със стойност 97 и от нея вадим 2 пъти дължината на заглавието 97 - 12 = 85. 
Аналогично продължаваме с всяка следваща буква и получаваме за сума 563.
При получаване на командата STOP, принтираме заглавието с най-голяма стойност като то съответно е Breaking bad с - 878. 

Вход
Wrong turn
The maze
Area 51
Night Club
Ice age
Harry Potter
Wizards


Изход
The limit is reached.
The best movie for you is Harry Potter with 948 ASCII sum.

*/