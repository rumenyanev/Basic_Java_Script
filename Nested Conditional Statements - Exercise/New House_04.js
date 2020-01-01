function newHouse(input){

    let flower = input.shift();
    let numFlowers = Number(input.shift());
    let budget = Number(input.shift());

    let price = 0.0;
    switch(flower){
        case"Roses":
        price = numFlowers * 5.00;
        if(numFlowers > 80){
            price = price * 0.90;
        }

        break;
        case"Dahlias":
        price = numFlowers * 3.80;
        if(numFlowers > 90){
            price = price * 0.85;
        }
        break;
        case"Tulips":
        price = numFlowers * 2.80;
        if(numFlowers > 80){
            price = price * 0.85;
        }
        break;
        case"Narcissus":
        price = numFlowers * 3.00;
        if(numFlowers < 120){
            price = price * 1.15;
        }

        break;
        case"Gladiolus":
        price = numFlowers * 2.50;
        if(numFlowers < 80){
            price = price * 1.20;
        }
        break;
    }
    if(budget >= price){
        console.log(`Hey, you have a great garden with ${numFlowers} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money, you need ${Math.abs(price - budget).toFixed(2)} leva more.`);
    }

}
newHouse(["Roses",55,250]);
newHouse(["Tulips",88,260]); 
newHouse(["Narcissus",119,360]);
/*Нов дом
Марин и Нели си купуват къща не далеч от София. 
Нели толкова много обича цветята, че Ви убеждава да
напишете програма която да изчисли колко ще им струва, да си засадят определен брой цветя и дали
наличния бюджет ще им е достатъчен. Различните цветя са с различни цени.

цвете                 Роза    Далия    Лале    Нарцис   Гладиола
Цена на брой в лева     5     3.80     2.80      3        2.50
Съществуват следните отстъпки:
 Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
 Ако Нели купи повече от 90 Далии - 15% отстъпка от крайната цена
 Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
 Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
 Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
От конзолата се приемат 3 реда:
 Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
 Брой цветя - цяло число в интервала [10…1000]
 Бюджет - цяло число в интервала [50…2500]
Да се отпечата на конзолата на един ред:
 Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {видцветя} and {останалата сума} leva left."
 Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
Сумата да бъде форматирана до втория знак след десетичната запетая.
Примерен вход и изход
Вход 
Roses
55
250

Изход
Not enough money, you need 25.00
leva more.

Нели иска 55 броя Рози. Цената на една роза е 5лв.,
следователно за 55 броя Нели ще трябва да плати:
55 * 5 = 275.
Тя обаче разполага с 250 лв. бюджет.
Понеже 275 > 250 , то не и достигат 25 лв.

Вход  
Tulips
88
260

Изход
Hey, you have a great garden with
88 Tulips and 50.56 leva left.


Вход
Narcissus
119
360

Изход
Not enough money, you need
50.55 leva more.
                        */