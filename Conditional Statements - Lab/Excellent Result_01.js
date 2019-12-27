function excellentResult(input){
    let grade = Number(input.shift());
    if(grade >= 5.50){
        console.log("Excellent!");
    }

}
excellentResult([6]);
excellentResult([5]);
excellentResult([5.5]);
excellentResult([5.49]);
/*Проверка за отлична оценка
Първата задача от тази тема е да се напише конзолна програма, която чете оценка, получена като аргумент и
отпечатва "Excellent!", ако оценката е 5.50 или по-висока.
вход  
6 
изход
Excellent! 

вход 
5 
изход
(няма изход) 


вход 
5.50 
изход
Excellent! 

вход 
5.49 
изход
(няма изход)
              */