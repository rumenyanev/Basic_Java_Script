function onTimeForTheExam(input){
    let hoursOfExam = Number(input.shift());
    let minutesOfExam = Number(input.shift());
    let hoursOfArrival = Number(input.shift());
    let minutesOfArrival = Number(input.shift());

  
    let timeExams = hoursOfExam * 60 + minutesOfExam;
    let timeArrival = hoursOfArrival * 60 + minutesOfArrival;

    let result = timeExams - timeArrival;

    let hours = Math.floor(Math.abs( result)/60);
    let minutes = Math.abs(result) % 60;

    if (result < 0) {
        console.log("Late");
        if(hours === 0){
            console.log(`${minutes} minutes after the start`);
        }
        else if (minutes < 10){
            console.log(`${hours}:0${minutes} hours after the start`);   
        
        }else{
            console.log(`${hours}:${minutes} hours after the start`);
        }

    } else if (result === 0 || result <= 30 ) {
        console.log("on time");
        console.log(`${result} minutes before the start`);
    } else {
        console.log("early");
        if (minutes < 10){
            console.log(`${hours}:0${minutes} hours before the start`);   
        }else if (result < 60) {
            console.log(`${minutes} minutes before the start`);
        }else{
            console.log(`${hours}:${minutes} hours before the start`);
        }  
    }
}
onTimeForTheExam([10,00,10,00]);
/*
onTimeForTheExam([9,30,9,50]);
onTimeForTheExam([9,00,10,30]);
onTimeForTheExam([10,00,10,00]);
onTimeForTheExam([9,00,8,30]);
onTimeForTheExam([14,00,13,55]);
onTimeForTheExam([11,30,10,55]);
onTimeForTheExam([16,00,15,00]);
onTimeForTheExam([11,30,8,12]);
onTimeForTheExam([11,30,12,29]);
/*Навреме за изпит
Студент трябва да отиде на изпит в определен час (например в 9:30 часа). Той идва в изпитната зала в даден
час на пристигане (например 9:40). Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на
изпита или до половин час преди това. Ако е пристигнал по-рано повече от 30 минути, той е подранил. Ако е
дошъл след часа на изпита, той е закъснял. Напишете програма, която прочита време на изпит и време на
пристигане и отпечатва дали студентът е дошъл навреме, дали е подранил или е закъснял и с колко часа
или минути е подранил или закъснял.
Вход
Приемат се 4 реда, извадени от входния аргумент:
 Първият ред съдържа час на изпита – цяло число от 0 до 23.
 Вторият ред съдържа минута на изпита – цяло число от 0 до 59.
 Третият ред съдържа час на пристигане – цяло число от 0 до 23.
 Четвъртият ред съдържа минута на пристигане – цяло число от 0 до 59.

Изход
На първият ред отпечатайте:
 "Late", ако студентът пристига по-късно от часа на изпита.
 "On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
 "Early", ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
 "mm minutes before the start" за идване по-рано с по-малко от час.
 "hh:mm hours before the start" за подраняване с 1 час или повече. 
Минутите винаги печатайте с 2 цифри, например "1:05".
 "mm minutes after the start" за закъснение под час.
 "hh:mm hours after the start" за закъснение от 1 час или повече. 
Минутите винаги печатайте с 2 цифри, например "1:03".
Примерен вход и изход
Вход   
9
30
9
50

Изход
Late 
20 minutes after the start


Вход
9
00
10
30

Изход
Late 
1:30 hours after the start

Вход
10
00
10
00

Изход
On time

Вход
9
00
8
30

Изход
On time 
30 minutes before the start


Вход
14
00
13
55

Изход
On time 
5 minutes before the start

Вход
11
30
10
55

Изход
Early 
35 minutes before the start

Вход
16
00
15
00


Изход
Early 
1:00 hours before the start

Вход
11
30
8
12

Изход
Early 
3:18 hours before the start

Вход
11
30
12
29

Изход
Late 
59 minutes after the start

               */