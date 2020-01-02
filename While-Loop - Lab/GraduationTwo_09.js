function graduationTwo(input) {
    let name = input.shift();
    let counter = 1;
    let countPoorGrade = 0;
    let sum = 0;
    while (counter <= 12) {
        let grade = Number(input.shift());
        if (grade >= 4) {
            sum += grade;
            counter++;
        } if (grade < 4) {
            countPoorGrade++;
        } if (countPoorGrade >= 2) {
            console.log(`${name} has been excluded at ${counter} grade`);
            return;
        }
    } let average = sum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);

}
graduationTwo(["Gosho", 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6]);
graduationTwo(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3]);
/*Завършване - част 2
Напишете програма, която изчислява средната оценка на ученик от цялото му обучение. На първия ред ще
получите името на ученика, а на всеки следващ ред неговите годишни оценки. Ученикът преминава в
следващия клас, ако годишната му оценка е по-голяма или равна на 4.00. Ако ученикът бъде скъсан повече
от един път, то той бива изключен и програмата приключва, като се отпечатва името на ученика и в кой
клас бива изключен.
При успешно завършване на 12-ти клас да се отпечата :
&quot;{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}&quot;
В случай, че ученикът е изключен от училище, да се отпечата:
&quot;{име на ученика} has been excluded at {класа, в който е бил изключен} grade&quot;
Стойността трябва да бъде форматирана до втория знак след десетичната запетая.
Примерен вход и изход
вход
Gosho
5
5.5
6
5.43
5.5
6
5.55
5
6
6


изход
Gosho graduated. Average grade: 5.53

вход
Mimi
5
6
5
6
5
6
6
2
3

изход
Mimi has been excluded at 8 grade    */