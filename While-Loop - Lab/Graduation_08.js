function graduation(input) {
    let name = input.shift();
    let counter = 1;

    let finalDegrees = 0.0;
    while (counter <= 12) {
        let grade = +input.shift();
        if (grade >= 4.00) {
            finalDegrees += grade;
            counter ++;
        }
    }
    let average = finalDegrees / 12;
  
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    

}
graduation(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5]);
graduation(["Ani", 5, 5.32, 6, 5.43, 5, 6, 5.5, 4.55, 5, 6, 5.56, 6]);

/*Завършване
Напишете програма, която изчислява средната оценка на ученик от цялото му обучение.
На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки.
Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00.
Ако оценката му е под 4.00, той ще повтори класа.
При успешно завършване на 12-ти клас да се отпечата:
"{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
Стойността трябва да бъде форматирана до втория знак след десетичната запетая.
Примерен вход и изход
вход
Pesho
4
5.5
6
5.43
4.5
6
5.55
5
6
6
5.43
5

изход
Pesho graduated. Average grade: 5.37

вход
Ani
5
5.32
6
5.43
5
6
5.5
4.55
5
6
5.56
6

изход
Ani graduated. Average grade: 5.45             */