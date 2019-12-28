function timeAdd15Minutes(input){
    let hours = Number(input.shift());
    let minutes = Number(input.shift());
    
    let timeMinutes = hours * 60 + minutes;
    let timePlus15 = timeMinutes + 15;
    
    let newHour = Math.floor(timePlus15 /60);
    let newMinutes = timePlus15 % 60;
    
    if (newHour>=24){
        newHour -=24;
    }if(newMinutes > 59){
        newMinutes -= 59;
    }if (newMinutes< 10){
        console.log(`${newHour}:0${newMinutes}`);
    
    }else{
        console.log(`${newHour}:${newMinutes}`);
    }
    
    }
    timeAdd15Minutes([1,46]);
timeAdd15Minutes([0,01]);
timeAdd15Minutes([23,59]);
timeAdd15Minutes([11,08]);
timeAdd15Minutes([12,49]);
/*Време + 15 минути
Да се напише програма, която чете час и минути от 24-часово денонощие, въведени от потребителя и
изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути. Часовете
винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри.
Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.
Примери:
вход  
1
46
изход
2:01 

вход
0
01
изход
0:16 

вход
23
59
изход
0:14 

вход
11
08
изход
11:23 

вход
12
49
изход
13:04
              */
