function worldSnookerChampionshipTwo(input){

let stage = input.shift();
let ticket = input.shift(); 
let numTickets = +input.shift();
let symbol = input.shift();


let ticketPrice = 0;
let priceAfterDiscount = 0.0;
let pricePhoto = 0;

if (stage =="Quarter final" && ticket =="Standard") {
    ticketPrice = numTickets * 55.5;
} else if (stage =="Semi final" && ticket == "Standard") {
    ticketPrice = numTickets * 75.88;
} else if (stage == "Final" && ticket == "Standard") {
    ticketPrice = numTickets * 110.10;
} else if (stage == "Quarter final" && ticket == "Premium") {
    ticketPrice = numTickets * 105.20;
} else if (stage == "Semi final" && ticket == "Premium") {
    ticketPrice = numTickets * 125.22;
} else if (stage =="Final" && ticket == "Premium") {
    ticketPrice = numTickets * 160.66;
} else if (stage == "Quarter final" && ticket =="VIP") {
    ticketPrice = numTickets * 118.90;
} else if (stage == "Semi final" && ticket == "VIP") {
    ticketPrice = numTickets * 300.40;
} else if (stage == "Final" && ticket == "VIP") {
    ticketPrice = numTickets * 400;
}

if (ticketPrice > 4000) {
    if (symbol == 'Y' || symbol == 'N') {
        priceAfterDiscount = ticketPrice * 0.75;
        console.log(`${priceAfterDiscount.toFixed(2)}`);
    }
}
else if (ticketPrice <= 4000 && ticketPrice > 2500) {
    priceAfterDiscount = ticketPrice * 0.9;
    if (symbol == 'Y') {
        pricePhoto = numTickets * 40;
        let sum = priceAfterDiscount + pricePhoto;
     console.log(`${sum.toFixed(2)}`);
    } else {
        console.log(`${priceAfterDiscount.toFixed(2)}`);
    }
}
else if (symbol =="N") {
    console.log(`${ticketPrice.toFixed(2)}`);
}
else if (symbol =='Y') {
    pricePhoto = numTickets * 40;
    console.log(`${(pricePhoto + ticketPrice).toFixed(2)}`);
}
}
    
worldSnookerChampionshipTwo(["Final", "Premium", 25, 'Y']);
/*worldSnookerChampionship(["Semi final","VIP",9,'Y']);
worldSnookerChampionship(["Quarter final","Standard",11,'N']);
worldSnookerChampionship(["Final","Premium",25,'Y']);
/*Задача 3. Билети за снукър
С наближаването на световното първенство по снукър в театъра Крусибъл в Шефилд, Англия, феновете нямат търпение
да се сдобият с ценните билети. Заради големия наплив от хора, организаторите ви молят да напишете програма
за продаване на билети, като се има предвид следния ценоразпис:

	         Четвъртфинал	  Полуфинал   	  Финал
Стандартен	  55.50 £/бр.	  75.88 £/бр.	  110.10 £/бр.
Премиум	      105.20 £/бр.	  125.22 £/бр.	  160.66 £/бр.
ВИП	          118.90 £/бр.	  300.40 £/бр.	   400 £/бр.

При закупуване на билет, зрителят може да избере опция, снимка с трофея, на цена 40 лири.
При достигане на определена сума има отстъпки:
Над 4000 лири има 25% отстъпка и безплатни снимки с трофея (ако  опцията за снимки е избрана, таксата от 40 лири за билет не се включва)
Над 2500 лири има 10% отстъпка
При избрана опция за снимки с трофея, цената се начислява след изчисляването на отстъпките.
Вход
От конзолата се четат 3 реда:
Етап на първенството – текст - “Quarter final ”, “Semi final” или “Final”
Вид на билета – текст - “Standard”, “Premium” или “VIP”
Брой билети – цяло число в интервала [1 … 30]
Снимка с трофея – символ – 'Y' (да) или 'N' (не)
Изход
На конзолата се отпечатва 1 ред:
"Цената, която трябва да се заплати, форматирана до втората цифра след десетичния знак"
Примерен вход и изход

Вход
Final
Premium
25
Y

Изход
3012.38


Обяснения
Цената за един премиум билет за финал е 160.66 лири.
Цената за 25 билета е: 160.66 * 25 = 4016.5 лири
4016.5 > 4000, следователно зрителят получава безплатни снимки с трофея и 25% отстъпка от цената.
25% от 4016.5 е 3012.375.
Зрителят е избрал опцията за снимка с трофея, но тъй като вече е получил безплатни снимки, към цената не добавяме допълнителна такса.


Вход
Semi final
VIP
9
Y

Изход
2793.24



Цената за един ВИП билет за полуфинал е 300.40 лири.
Цената за 9 билета е: 300.40 * 9 = 2703.60 лири
2703.60 <= 4000, следователно не получава 25% отстъпка и безплатни снимки.
2703.60 > 2500, следователно зрителя получава 10% отстъпка от цената.
2703.60 – 10% е 2433.24,
Зрителят е избрал опция за снимка с трофея.
9 билета по 40 лири за снимка: 360 лири.
2433.24 + 360 = 2793.24


Вход
Quarter final
Standard
11
N


Изход
610.50
*/
