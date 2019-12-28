function godzillaVsKong(input){
    let budget = Number(input.shift());
    let people = Number(input.shift());
    let priceClothingForOnePerson = Number(input.shift());

    
    let decor = budget * 0.10;
    let priceAllClothing = people * priceClothingForOnePerson;

    if(people > 150){
        priceAllClothing -= priceAllClothing *0.10;
     }
    let allCosts = decor + priceAllClothing;

    let neededMoney = Math.abs(budget - allCosts);
    let leftMoney = Math.abs(allCosts - budget);
    
     

    if(allCosts > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`)
    }
    else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
    }
    

}
godzillaVsKong([20000,120,55.5]); 
godzillaVsKong([15437.62,186,57.99]);
godzillaVsKong([9587.88,222,55.68]);
/*Годзила срещу Конг
Снимките за дългоочаквания филм "Годзила срещу Конг" започват. 
Сценаристът Адам Уингард ви моли да напишете програма, която да изчисли, 
дали предвидените средства са достатъчни за снимането на филма.
За снимките ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
Известно е, че:
 Декорът за филма е на стойност 10% от бюджета.
 При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.
Вход
От конзолата се четат 3 реда:
Ред 1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
Ред 2. Брой на статистите – цяло число в интервала [1 … 500]
Ред 3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
Изход
На конзолата трябва да се отпечатат два реда:
 Ако парите за декора и дрехите са повече от бюджета:
o "Not enough money!"
o "Wingard needs {парите недостигащи за филма} leva more."
 Ако парите за декора и дрехите са по малко или равни на бюджета:
o "Action!"
o "Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая.
Примерен вход и изход
Вход  
20000
120
55.5

Изход
Action!
Wingard starts filming with
11340.00 leva left.

Обяснения
Сума за декор: 10% от 20000 = 2000 лв.
Сума за облекло: 120 * 55.5 = 6660 лв.
Обща сума за филма: 2000 + 6660 = 8660 лв.
20000 – 8660 = 11340 лева остават.

вход
15437.62
186
57.99

Изход
Action!
Wingard starts filming with
4186.33 leva left.

Обяснения
Сума за декор: 10% от 15437.62 = 1543.762 лв.
Сума за облекло: 186 * 57.99 = 10786.14 лв.
Статистите са повече от 150 следователно има 10%
отстъпка на облеклото.
10% от 10786.14 е 1078.614
10786.14 – 1078.614 = 9707.526 лв. за облекло
Обща сума за филма: 1543.762 + 9707.526 = 11251.288
15437.62 – 11251.288 = 4186.331 лева остават

вход
9587.88
222
55.68

Изход
Not enough money!
Wingard needs 2495.77 leva
more.

Обяснения
Сума за декор: 10% от 9587.88 = 958.788 лв.
Сума за облекло: 11124.864 лв.
Обща сума за филма: 958.788 + 11124.864 = 12083.652
9587.88 – 12083.652 = 2495.77 лева не достигат

                      */