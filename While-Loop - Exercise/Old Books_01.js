function oldBooks(input) {
    let book = input.shift();
    let capacity = Number(input.shift());
    let bookCount = 0;

    let title = input.shift();
    while (bookCount < capacity) {
        if (title == book) {
            break;
        } else {
            title = input.shift();
        }
        bookCount++;
    }
    if (title == book) {
        console.log(`You checked ${bookCount} books and found it.`)
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCount} books.`)
    }

}
oldBooks(["Troy", 8, "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", 4, "Hunger Games", "Harry Potter", "Toronto", "Sportily"]);
oldBooks(["Bourne", 32, "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest",
    "Profit", "Triple", "Stella", "The Matrix", "Bourne"])


/*Старата Библиотека
Ани отива до родния си град след много дълъг период извън страната.
Прибирайки се вкъщи, тя вижда старата библиотека на баба си и си спомня за любимата си книга.
Помогнете на Ани, като напишете програма,в която тя въвежда търсената от нея книга (текст)
и капацитета на библиотеката(цяло число).
Докато Ани не намери любимата си книга или не провери всички книги в библиотеката,
програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст), която тя проверява.
 Ако не открие книгата да се отпечата на два реда:
o "The book you search is not here!"
o "You checked {брой} books."
 Ако открие книгата си се отпечатва един ред:
o "You checked {брой} books and found it."
Примерен вход и изход
Вход
Troy
8
Stronger
Life Style
Troy

Изход
You checked 2 books and found it.


Обяснения
Книгата, която Ани търси, в случая е
"Troy", а библиотеката съдържа 8
книги. Първата е "Stronger", втората е
"Life Style", третата книга е търсената –
"Troy" и програмата приключва.


Вход
The Spot
4
Hunger Games
Harry Potter
Toronto
Sportily

Изход
The book you search is not here!
You checked 4 books.

Обяснения
Книгата, която търси Ани е "The Spot".
Библиотеката съдържа 4 книги.
Първата е "Hunger Games", втората
"Harry Potter", третата "Toronto", а
четвъртата "Spotify".
Понеже няма повече книги в библиотеката
четенето на имена приключва.
Ани не намери книгата, която търсеше.

Вход
Bourne
32
True Story
Forever
More Space
The Girl
Spaceship
Strongest
Profit
Triple
Stella
The Matrix
Bourne

Изход
You checked 10 books and found it.

Насоки
1. Прочетете входните данни от конзолата (името на книгата, която търси и капацитета на
библиотеката):

2. Създайте две нови променливи. В едната ще съхранявате информация за текущата книга, която ще
проверявате, а в другата броя на проверените книги.

3. Създайте си нова променлива от булев тип, като и дадете начална стойност false (т.е. книгата не е
открита). В тази променлива ще държите стойност, която ще показва дали книгата е открита или не.
Ако променливата е със стойност true – книгата е открита, в противен случай – книгата не е.

4. Направете while цикъл, в които четете по една книга всеки път, докато книгата не е намерена или
докато не свърши капацитета на библиотеката (броят на проверените книги трябва да е по-малък от
капацитета). В цикъла направете проверка дали въведената книга съвпада с търсената и ако
проверката е вярна, променете стойността на булевата променлива, която създадохте в предната
стъпка, на true (т.е. книгата е намерена). В противен случай увеличете с едно променливата (брояча),
която създадохте във втората стъпка.

5. Когато цикълът приключи, отпечатайте двата възможни резултата.*/