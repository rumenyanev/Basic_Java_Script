function trainTheTrainers(input) {

    let juryCount = Number(input.shift());

    let sumGrades = 0;
    let averageGrade = 0;
    let finalAssessment = 0;
    let counter = 0;
    let presentationName = "";

    while (true) {
        presentationName = input.shift();

       if (presentationName == "Finish") {
            break;
        }
        for (let i = 1; i <= juryCount; i++) {
            let evaluation = Number(input.shift());
            sumGrades += evaluation;
            averageGrade = sumGrades / juryCount;
            counter++;
        }

        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
        finalAssessment += sumGrades;
        sumGrades = 0;
    }
    finalAssessment /= counter;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}

trainTheTrainers([2, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);
trainTheTrainers([3,"Arrays",4.53,5.23,5.00,"Lists",5.83,6.00,5.42,"Finish"]);
trainTheTrainers([2,"Objects and Classes",5.77,4.23,"Dictionaries",4.62,5.02,"RegEx",2.88,3.42,"Finish"]);
/*Train the trainers
Курсът "Train the trainers" е към края си и финалното оценяване наближава.
Вашата задача е да помогнете на журито, което ще оценява презентациите, като напишете програма,
 която да изчислява средната оценка от представянето на всяка една презентация от даден студент,
а накрая средният успех от всички тях.

От конзолата на първият ред се прочита броят на хората в журито n - цяло число в интервала [1…20]
След това на отделен ред се прочита името на презентацията - текст
За всяка една презентация на нов ред се четат n - на брой оценки - реално число в интервала [2.00…6.00]
След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
"{името на презентацията} - {средна оценка}."
След получаване на команда "Finish" на конзолата се печата "Student's final assessment is
{среден успех от всички презентации}." и програмата приключва.
Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.
Примерен вход и изход
Вход
2
While-Loop
6.00
5.50
For-Loop
5.84
5.66
Finish

Изход
While-Loop - 5.75.
For-Loop - 5.75.
Student's final
assessment is 5.75.

Обяснения
2 – броят на хората в журито следователно ще получаваме
по 2 оценки на презентация.
(6.00 + 5.50) / 2 = 5.75
(5.84 + 5.66) / 2 = 5.75
(6.00 + 5.50 + 5.84 + 5.66) / 4 = 5.75

Вход
3
Arrays
4.53
5.23
5.00
Lists
5.83
6.00
5.42
Finish

Изход
Arrays - 4.92.
Lists - 5.75.
Student's final
assessment is 5.34.


Вход
2
Objects and
Classes
5.77
4.23
Dictionaries
4.62
5.02
RegEx
2.88
3.42
Finish

Изход
Objects and Classes - 5.00.
Dictionaries" - 4.82.
RegEx - 3.15.
Student's final assessment is
4.32.

Насоки
1. Вземете едно цяло число – броя на хората в журито:

2. Направете променлива от тип текст, в която да пазите името на презентацията, за която получавате
оценки, което ще получавате от аргумента на функцият. В while цикъл докато името на
презентацията не е равно на “Finish” получавате име на презентация:

3. Направете променлива sumGrades, в която да сумирате оценките, които получавате за всяка
презентация:

4. Сумирайте всички оценки към променлива finalAssessment и изчислете средната оценка за
текущата презентация. Увеличете броя на проведените презентации и принтирайте изхода според
условието с данните за текущата презентация:

5. Изчислете крайната средна оценка и принтирайте изхода по условие
                                                        */