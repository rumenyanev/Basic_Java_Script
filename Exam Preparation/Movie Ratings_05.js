function movieRatings(input) {
    let numMovies = +input.shift();
    let nameMovie = "";
    let ratingMovie = 0;

    let bestRating = Number.MIN_SAFE_INTEGER;
    let smallestRating = Number.MAX_SAFE_INTEGER;
    let averageRating = 0;
    let sumRating = 0;
    let bestRatingMovie = "";
    let smallestRatingMovie = "";

    for (let i = 0; i < numMovies; i++) {
        nameMovie = input.shift();
        ratingMovie = +input.shift();
        sumRating += ratingMovie;

        if (bestRating < ratingMovie) {
            bestRating = ratingMovie;
            bestRatingMovie = nameMovie;
        } if (smallestRating > ratingMovie) {
            smallestRating = ratingMovie;
            smallestRatingMovie = nameMovie;
        }

    }
    averageRating = Number(sumRating / numMovies);
    console.log(`${bestRatingMovie} is with highest rating: ${bestRating.toFixed(1)}`);
    console.log(`${smallestRatingMovie} is with lowest rating: ${smallestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);

}
movieRatings([5," A Star is Born",7.8,"Creed 2",7.3,"Mary Poppins",7.2,"Vice",7.2,"Captain Marvel",7.1]);

/*Задача 5. Филмов рейтинг
Деси много обича да гледа филми, но често й е трудно да си избере подходящ за гледане.
Набелязва си определен брой филми и иска да си избере кой филм да гледа спрямо рейтинга на филмите.
Напишете програма, която показва кой филм е с най-висок рейтинг, кой е с най-нисък и колко е средният рейтинг от всички филми,
които си е набелязала да гледа.
Вход
От конзолата първо се чете един ред:
Брой филми, които си е набелязала Деси – цяло число в интервала [1…20]
За всеки филм се прочитат два отделни реда:
Име на филма – текст
Рейтинг на филма - реално число в интервала [1.00…10.00]
Изход
Отпечатват се три реда в следния формат:
"{име на филма с най-висок рейтинг} is with highest rating: {рейтинг на филма}"
"{име на филма с най-нисък рейтинг} is with lowest rating: {рейтинг на филма}"
"Average rating: {средният рейтинг на всички филми}"
Максималният, минималният и средният рейтинг да се форматира до първата цифра след десетичния знак.
Примерен вход и изход
Вход
5
A Star is Born
7.8
Creed 2
7.3
Mary Poppins
7.2
Vice
7.2
Captain Marvel
7.1

Изход
A Star is Born is with highest rating: 7.8
Captain Marvel is with lowest rating: 7.1
Average rating: 7.3

Обяснения
5 набелязани филма
Филмът с максимален рейтинг е:
A Star is Born с рейтинг 7.8
Филмът с минимален рейтинг е:
Captain Marvel с рейтинг 7.1
Средният рейтинг е:
(7.8 + 7.3 + 7.2 + 7.2 + 7.1) / 5 = 36.5 / 5 = 7.32 ~ 7.3


Вход
3
Interstellar
8.5
Dangal
8.3
Green Book
8.2

Изход
Interstellar is with highest rating: 8.5
Green Book is with lowest rating: 8.2
Average rating: 8.3


Обяснения
3 набелязани филма
Филмът с максимален рейтинг е:
Interstellar с рейтинг 8.5
Филмът с минимален рейтинг е:
Green Book с рейтинг 8.2
Средният рейтинг е:
(8.5 + 8.3 + 8.2) / 3 = 25 / 3 = 8.3
*/