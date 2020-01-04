function examPreparationTwo(input){
    let inputOfBadGrades = +input.shift();

    let countOfBadGrade = 0;
    let sumGrades = 0;
    let counterForGrades = 0;
    let lastProblem = "";

    while(countOfBadGrade < inputOfBadGrades){
        let nameOfExercise = input.shift();
        let grade = +input.shift();

        
    
        if(nameOfExercise == "Enough"){
            console.log(`Average score: ${(sumGrades / counterForGrades).toFixed(2)}`);
            console.log(`Number of problems: ${counterForGrades}`);
            console.log(`Last problem: ${lastProblem}`);
            return;
        }
        else{
            counterForGrades++;
            if(grade >= 4.00){
              sumGrades += grade;
              
              lastProblem = nameOfExercise;
            }
            else{
                countOfBadGrade++;
            }
            
        }
        if(countOfBadGrade == inputOfBadGrades){
            console.log(`You need a break, ${countOfBadGrade} poor grades.`);
        }
    }

}


examPreparationTwo([3, "Money", 6, "Story", 4, "Spring Time", 5, "Bus", 6, "Enough"]);
examPreparationTwo([2, "Income", 3, "Game Info", 6, "Best Player", 4]);

/*Подготовка за изпит
Напишете програма, в която Марин решава задачи от изпити, докато не получи съобщение "Enough" от лектора си.
При всяка решена задача, той получава оценка.
Програмата трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
Незадоволителна е всяка оценка, която е по-малка или равна на 4.
Вход
 На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
 След това многократно се четат по два реда:
o Име на задача - текст
o Оценка - цяло число в интервала [2…6]

Изход
 Ако Марин стигне до командата "Enough", отпечатайте на 3 реда:
o "Average score: {средна оценка}"
o "Number of problems: {броя на всички задачи}"
o "Last problem: {името на последната задача}"
 Ако получи определения брой незадоволителни оценки:
o "You need a break, {брой незадоволителни оценки} poor grades."
Средната оценка да бъде форматирана до втория знак след десетичната запетая.
Примерен вход и изход
Вход
3
Money
6
Story
4
Spring Time
5
Bus
6
Enough

Изход
Average score: 5.25
Number of problems: 4
Last problem: Bus

Обяснения
Броя на позволени незадоволителни оценки е 3.
Първата задача се казва Money, оценката на Марин е 6.
Втората задача е Story, оценката на Марин е 4.
Третата задача е Spring Time, оценката на Марин е 5.
Четвъртата задача е Bus, оценката на Марин е 6.
Следващата команда е Enough, програмата приключва.
Средна оценка: 21 / 4 = 5.25
Брой решени задачи: 4
Последна задача: Bus

Вход
2
Income
3
Game Info
6
Best Player
4

Изход
You need a break, 2 poor
grades.

Обяснения
Броят незадоволителни оценки е 2.
Първата задача е Income, оценката на Марин е 3.
Втората задача е Game Info, оценката на Марин е 6.
Третата задача е Best Player, оценката на Марин е 4.
Марин достигна допустимия брой незадоволителни
оценки, време е за почивка.*/