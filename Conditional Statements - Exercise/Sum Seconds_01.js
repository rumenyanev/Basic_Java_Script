function sumSeconds(input){
    let firstTime = Number(input.shift());
    let secondTime = Number(input.shift());
    let thirdTime = Number(input.shift());

    let allTime = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(allTime/60);
    let seconds = allTime  % 60;
    
    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }

}
sumSeconds([35,45,44]);
sumSeconds([22,7,34]);
sumSeconds([50,50,49]);
sumSeconds([14,12,10]);
/*Сумиране на секунди
Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се напише програма,
която чете времената на състезателите в секунди, въведени от потребителя и пресмята сумарното им време
във формат "минути:секунди". Секундите да се изведат с водеща нула (2->"02", 7->"07", 35->"35").

вход  
35
45
44
изход
2:04 

вход
22
7
34
изход
1:03 

вход
50
50
49
изход
2:29 

вход
14
12
10
изход
0:36
          */