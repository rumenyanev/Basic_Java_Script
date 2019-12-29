function dayOfWeek(input){
    let number = Number(input.shift());
    let day = "";
    switch(number){
        case 1:
         day = "Monday";
         break;
         case 2:
         day = "Tuesday";
         break;
         case 3:
         day = "Wednesday";
         break;
         case 4:
         day = "Thursday";
         break;
         case 5:
         day = "Friday";
         break;
         case 6:
         day = "Saturday";
         break;
         case 7:
         day = "Sunday";
         break;
         default:
             day = "Error";
         break;  
    }
    console.log(day);

}
dayOfWeek([2]);
dayOfWeek([-1]);
dayOfWeek([6]);
dayOfWeek([4]);
dayOfWeek([8]);
/*Ден от седмицата
Напишете програма, която получава цяло число и отпечатва ден от седмицата (на английски език), в граници
[1...7] или отпечатва "Error" в случай, че въведеното число е невалидно.
Примерен вход и изход
Вход   Изход
1      Monday
2      Tuesday
3      Wednesday
4      Thursday
5      Friday
6      Saturday
7      Sunday
-1      Error*/