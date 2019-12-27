function number100To200(input){
    let number = Number(input.shift());
    if(number >= 100 && number <= 200){
        console.log("Between 100 and 200")
    }else if(number < 100){
        console.log("Less than 100");
    }else{
        console.log("Greater than 200");
    }

}
number100To200([95]);
number100To200([120]);
number100To200([210]);

/*Число от 100 до 200
Да се напише програма, която получава цяло число, получено като аргумент и проверява, дали е под 100,
между 100 и 200 или над 200. Да се отпечатат съответно съобщения, като в примерите по-долу:
Примерен вход и изход
вход   
95 
изход
Less than 100 

вход
120 
изход
Between 100 and 200 

вход
210 
изход
Greater than 200
       */