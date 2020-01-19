function movieDestination(input){
    let budget = +input.shift();
    let destination = input.shift();
    let season = input.shift();
    let days = +input.shift();


    let price = 0;
    switch(destination){
        case"Dubai":
        if(season == "Winter"){
            price = 45000;
        }
        else if(season == "Summer"){
            price = 40000;
        }
        break;
        case"Sofia":
        if(season == "Winter"){
            price = 17000;
        }
        else if(season == "Summer"){
            price = 12500;
        }
        break;
        case"London":
        if(season == "Winter"){
            price = 24000;
        }
        else if(season == "Summer"){
            price = 20250;
        }
        break;
    }
    let totalPrice = price * days;
    if(destination == "Dubai"){
        totalPrice *= 0.70;
    }
    if(destination == "Sofia"){
        totalPrice *= 1.25;
    }
    
    if(budget >= totalPrice){
        console.log(`The budget for the movie is enough! We have ${(budget - totalPrice).toFixed(2)} leva left!`);
    }
    else{
        console.log(`The director needs ${Math.abs(budget- totalPrice).toFixed(2)} leva more!`);
    }
}

movieDestination([400000,"Sofia","Winter",20]);
movieDestination([1000000,"Dubai","Summer",5]);
movieDestination([200000,"London","Summer",7]);
/*Задача 3. Дестинация за филм
Режисьорът на голяма кино продукция иска да разбере дали бюджетът, 
който са му отпуснали ще стигне за заснемане на филма. Помогнете му, 
като напишете програма, която изчислява колко ще му струва да заснеме филма, 
като знаете колко излиза един снимачен ден. 
Цената за един ден се определя от сезона и дестинацията:


    Дестинация        Dubai         Sofia            London
Сезон  
Winter              45 000 lv.     17 000 lv.       24 000 lv.
Summer              40 000 lv.     12 500 lv.       20 250 lv.

Съществуват следните данъчни облекчения/облагания:
    • Ако дестинацията е Дубай – 30% отстъпка от крайната цена
    • Ако дестинацията е София – цената се оскъпява с 25%
Вход
От конзолата се четат 4 реда:
    1. Бюджет на филма – реално число в диапазона [100 000.0… 2 000 000.0]
    2. Дестинация – текст, с възможности "Dubai", "Sofia" и "London"
    3. Сезон – текст, с възможности "Summer" и "Winter"
    4. Брой дни  – цяло число в диапазона [1… 40]
Изход
На конзолата да се отпечата един ред:
    • Ако бюджета е достатъчен: 
     "The budget for the movie is enough! We have {остатък от бюджета} leva left!"
    •   Ако бюджета НЕ е достатъчен:
     "The director needs {нужна сума} leva more!"
Резултатът да се закръгли до втората цифра след десетичния знак.
Примерен вход и изход

Вход
400000
Sofia
Winter
20

Изход
The director needs 25000.00 leva more!

Обяснения
Дестинацията е Sofia през сезон Winter => цената на ден е 17000 
20 дена * 17000 = 34000 lv.
Дестинацията е София, което означава че имаме 25% оскъпяване на цената
=> 34000 + 25% = 425000 lv.
Бюджета 400000 - 425000 => не е достатъчен
Нужни са още 25000 lv.

Вход
1000000
Dubai
Summer
5

Изход
The budget for the movie is enough! We have 860000.00 leva left!


Вход
200000
London
Summer
7

Изход
The budget for the movie is enough! We have 58250.00 leva left!





*/