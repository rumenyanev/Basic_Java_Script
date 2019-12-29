function smallShop(input){
    let product = input.shift();
    let town = input.shift();
    let quantity = Number(input.shift());

    let sum = 0;

    switch(product){
        case "coffee":
            if(town ==="Sofia"){
                sum = quantity * 0.50;
            }
            else if(town === "Plovdiv"){
                sum = quantity * 0.40;
            }
            else if (town === "Varna"){
                sum = quantity * 0.45;
            }
            break;
            case "water":
            if(town ==="Sofia"){
                sum = quantity * 0.80;
            }
            else if(town === "Plovdiv"){
                sum = quantity * 0.70;
            }
            else if (town === "Varna"){
                sum = quantity * 0.70;
            }
            break;
            case "beer":
            if(town ==="Sofia"){
                sum = quantity * 1.20;
            }
            else if(town === "Plovdiv"){
                sum = quantity * 1.15;
            }
            else if (town === "Varna"){
                sum = quantity * 1.10;
            }
            break;
            case "sweets":
            if(town ==="Sofia"){
                sum = quantity * 1.45;
            }
            else if(town === "Plovdiv"){
                sum = quantity * 1.30;
            }
            else if (town === "Varna"){
                sum = quantity * 1.35;
            }
            break;
            case "peanuts":
            if(town ==="Sofia"){
                sum = quantity * 1.60;
            }
            else if(town === "Plovdiv"){
                sum = quantity * 1.50;
            }
            else if (town === "Varna"){
                sum = quantity * 1.55;
            }
            break;
    }
         console.log(sum.toFixed(2));
}
smallShop(["coffee","Varna",2]);
smallShop(["peanuts","Plovdiv",1]);
smallShop(["beer","Sofia",6]);
smallShop(["water","Plovdiv",3]);
smallShop(["sweets","Sofia",2.23]);
/*Квартално магазинче
Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според
града:
град / продукт coffee water  beer   sweets  peanuts
Sofia           0.50   0.80  1.20    1.45    1.60
Plovdiv         0.40   0.70  1.15    1.30    1.50
Varna           0.45   0.70  1.10    1.35    1.55
Напишете програма, която приема входен аргумент и изважда от него продукт (низ), град (низ) и количество
(число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град.
  Примерен вход и изход

вход       
coffee
Varna
2
изход
0.9

вход
peanuts
Plovdiv
1
изход
1.5

вход
beer
Sofia
6
изход
7.2

вход
water
Plovdiv
3
изход
2.1

вход
sweets
Sofia
2.23

изход
3.2335
               */