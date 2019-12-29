function fruitShop(input){
    let fruit = input.shift();
    let dayOfWeek = input.shift();
    let quantity = Number(input.shift());

    let price = 0;
    switch(dayOfWeek){
    case"Monday":
          case"Tuesday":
           case"Wednesday":
            case"Thursday":
            case"Friday": 
        if ("banana" == fruit) {
            price = 2.50 ;
        }else if ("apple" == fruit){
            price = 1.20 ;

        }else if ("orange" == fruit){
            price = 0.85 ;

        }else if ("grapefruit" == fruit){
            price = 1.45 ;
        }else if ("kiwi" == fruit){
            price = 2.70 ;

        }else if ("pineapple" == fruit) {
            price = 5.50 ;

        }else if ("grapes" == fruit){
            price = 3.85 ;
        }
    break;

     case"Saturday":
     case"Sunday":
        if ("banana" == fruit) {
            price = 2.70;
        }else if ("apple" == fruit){
            price = 1.25 ;
        }else if ("orange" == fruit){
            price = 0.90 ;
        }else if ("grapefruit" == fruit){
            price = 1.60 ;
        }else if ("kiwi" == fruit){
            price = 3.00 ;
        }else if ("pineapple" == fruit) {
            price = 5.60 ;
        }else if ("grapes" == fruit){
            price = 4.20 ;
        }break;
    }

    if (price > 0){
        let totalPrice = price * quantity;
     console.log(totalPrice.toFixed(2));
    }else {
        console.log("error");
    }
}
fruitShop(["apple","Workday",2]); 
fruitShop(["apple","Tuesday",2]);
fruitShop(["orange","Sunday",3]);
fruitShop(["kiwi","Monday",2.5]);
fruitShop(["grapes","Saturday",0.5]); 
fruitShop(["tomato","Monday",0.5]);
/*Магазин за плодове
Магазин за плодове през работните дни работи на следните цени:

плод    banana  apple  orange  grapefruit  kiwi  pineapple  grapes
цена     2.50    1.20   0.85    1.45       2.70   5.50       3.85

Събота и неделя магазинът работи на по-високи цени:

плод  banana  apple  orange  grapefruit  kiwi  pineapple  grapes
цена   2.70   1.25    0.90    1.60       3.00   5.60       4.20

Напишете програма, която приема като вход аргумента input и изважда от него плод (banana / apple /
orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday /
Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число, и пресмята цената
според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка.
При невалиден ден от седмицата или невалидно име на плод да се отпечата "error".

Примерен вход и изход
вход  
apple
Tuesday
2
изход
2.40

вход
orange
Sunday
3
изход
2.70

вход
kiwi
Monday
2.5
изход
6.75

вход
grapes
Saturday
0.5
изход
2.10

вход
tomato
Monday
0.5
изход
error
           */