function oscars(input) {
    let nameActor = input.shift();
    let startedPoints = +input.shift();
    let numJury = +input.shift();

    while (numJury-- > 0) {
        let nameJury = input.shift();
        let points = +input.shift();

        startedPoints += (nameJury.length * points / 2);

        if (startedPoints > 1250.5) {
            break;
        }
    }

    if (startedPoints > 1250.5) {
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${startedPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${nameActor} you need ${(1250.5 - startedPoints).toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov", 205, 4, "Johnny Depp", 45, "Will Smith", 29, "Jet Lee", 10, "Matthew Mcconaughey", 39]);
//oscars(["Sandra Bullock",340,5,"Robert De Niro",50,"Julia Roberts",40.5,"Daniel Day-Lewis",39.4,"Nicolas Cage",29.9,"Stoyanka Mutafova",33]);
/*Задача 5. Оскари
Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса.
Академията ще ви даде първоначални точки за актьора.
След това всеки оценяващ ще дава своята оценка.
Точките, които актьора получава се формират от:
дължината на името на оценяващия умножено по точките, които дава делено на две.
Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата,
че дадения актьор е получил номинация.
Вход
    • Име на актьора – текст
    • Точки от академията - реално число в интервала [2.0... 450.5]
    • Брой оценяващи n – цяло число в интервала[1… 20]
На следващите n-на брой реда:
    • Име на оценяващия – текст
    • Точки от оценяващия – реално число в интервала [1.0... 50.0]
Изход
Да се отпечата на конзолата един ред:
    • Ако точките са над 1250.5:
"Congratulations, {име на актьора} got a nominee for leading role with {точки}!"
    • Ако точките не са достатъчни:
	"Sorry, {име на актьора} you need {нужни точки} more!"
Резултатът да се форматирана до първата цифра след десетичния знак!
Примерен вход и изход

Вход
Zahari Baharov
205
4
Johnny Depp
45
Will Smith
29
Jet Lee
10
Matthew Mcconaughey
39

Изход
Sorry, Zahari Baharov you need 247.5 more!

Обяснения
Zahari Baharov започва с 205 точки, като 4 човека ще го оценяват.
Първи е Johnny Depp => (дължината на името * точките / 2)  => (11 * 45) / 2 = 247.5.
Общо точките стават = 452.5
Втори е Will Smith => 452.5 + ((10 * 29) / 2) = 597.5
Трети е Jet Lee => 597.5 + ((7 *10) / 2) = 632.5
Четвърти е Matthew Mcconaughey => 632.5 + ((19 * 39) / 2) = 1003.0
1003.0 < 1250.5 => Toчките не са достатъчни. Нужни са още 247.5.

Вход
Sandra Bullock
340
5
Robert De Niro
50
Julia Roberts
40.5
Daniel Day-Lewis
39.4
Nicolas Cage
29.9
Stoyanka Mutafova
33

Изход
Congratulations, Sandra Bullock got a nominee for leading role with 1268.5!

*/