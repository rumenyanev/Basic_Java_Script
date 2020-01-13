function bestPlaneTickets(input) {

    let smallestMinutesToStay = Number.MAX_SAFE_INTEGER;
    let bestNumFlight = "";
    let priceFlight = Number.MAX_SAFE_INTEGER;

        let ticketNumber = input.shift();;
        while (ticketNumber !=="End") {
            let ticketPrice = +input.shift();
            let minutesStay = +input.shift();
          
            
            if (minutesStay < smallestMinutesToStay) {
                priceFlight = ticketPrice;
                bestNumFlight = ticketNumber;
                smallestMinutesToStay = minutesStay;
            }

            ticketNumber = input.shift();
        }

    console.log(`Ticket found for flight ${bestNumFlight} costs ${(priceFlight * 1.96).toFixed(2)} leva with ${Math.floor(smallestMinutesToStay / 60).toFixed(0)}h ${(smallestMinutesToStay % 60).toFixed(0)}m stay`);

}
//bestPlaneTickets(["W64301", 60, 140, "FR9967", 80, 200, "FR0066", 45, 60, "End"]);
bestPlaneTickets(["W64301",60,140,"W30510",110,40,"W51440",160,70,"FR0066",75,75,"End"]);
//Ticket found for flight FR0066 costs 88.20 leva with 1h 0m stay

/*Задача 4. Самолетни билети
Деси разглежда оферти за самолетни билети до дестинацията на фестивала, който иска да посети.
Тя не желае да се прекачва между различни пътувания.
 Напишете програма, която според въведена информация за прекачване,
 помага на Деси да избере билета си за пътуването с най-малко минути престой.

 Цените на билетите се въвеждат в евро, при курс към лева: 1.96.
Вход
За всеки полет се четат по 3 реда до получаване на команда "End":
    • Номер на билет – текст
    • Цена – реално число в интервала [10.00… 500.00]
    • Минути престой – цяло число в интервала [30… 500]
Изход
"Ticket found for flight {номер на полет} costs {цена в лева} leva with {часове}h {минути}m stay"
Цената трябва да бъде форматирана до втората цифра след десетичния знак.
Примерен вход и изход
Вход
W64301
60
140
FR9967
80
200
FR0066
45
60
End


Изход
Ticket found for flight FR0066 costs 88.20 leva with 1h 0m stay

Обяснения
Полет W64301 струва 60 евро и има прекачване с престой 140 минути. Т
Той е полета с най-малко минути престой до момента.
Полет FR9967 струва 80 евро и има повече минути престой от най-краткия намерен до момента.
Полет FR0066 струва 45 евро и има 60 минути престой. Той е полета с най-кратък престой до момента.
Получена е командата End
Полета с най-кратък престой е FR0066

Вход
W64301
60
140
W30510
110
40
W51440
160
70
FR0066
75
75
End

Изход
Ticket found for flight W30510 costs 215.60 leva with 0h 40m stay


Обяснения
Полет W64301 струва 60 евро и има прекачване с престой 140 минути. Той полета с най-малко минути престой до момента.
Полет W30510 струва 110 евро и има прекачване с престой 40 минути. Той полета с най-малко минути престой до момента.
Полет W51440 струва 160 евро и има повече минути престой от най-краткия намерен до момента.
Полет FR0066 струва 20 евро и има повече минути престой от най-краткия намерен до момента.
Получена е командата End
Полета с най-кратък престой е W30510


Вход
W43122
30
120
W35400
30
100
End


Изход
Ticket found for flight W35400 costs 58.80 leva with 1h 40m stay

*/