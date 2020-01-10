function fishingBoat(input){

    let budget = Number(input.shift());
    let season = input.shift();
    let numOfFishers = Number(input.shift());

    let priceRental = 0.0;
    switch(season){
        case"Spring":
        priceRental = 3000;
if(numOfFishers <= 6){
    priceRental = priceRental * 0.90;
}
else if (numOfFishers > 6 && numOfFishers <= 11){
    priceRental = priceRental * 0.85;
}
else if(numOfFishers > 11){
    priceRental = priceRental * 0.75;
}
if ( numOfFishers % 2 === 0){
    priceRental = priceRental * 0.95;
}
        break;
        case"Summer":
        priceRental = 4200;
if(numOfFishers <= 6){
    priceRental = priceRental * 0.90;
}
else if (numOfFishers > 6 && numOfFishers <= 11){
    priceRental = priceRental * 0.85;
}
else if(numOfFishers > 11){
    priceRental = priceRental * 0.75;
}
if ( numOfFishers % 2 === 0){
    priceRental = priceRental * 0.95;
}
        break;
       case"Autumn":
priceRental = 4200;
if(numOfFishers <= 6){
    priceRental = priceRental * 0.90;
}
else if (numOfFishers > 6 && numOfFishers <= 11){
    priceRental = priceRental * 0.85;
}
else if(numOfFishers > 11){
    priceRental = priceRental * 0.75;
}
        break;
      case"Winter":
priceRental = 2600;
if(numOfFishers <= 6){
    priceRental = priceRental * 0.90;
}
else if (numOfFishers > 6 && numOfFishers <= 11){
    priceRental = priceRental * 0.85;
}
else if(numOfFishers > 11){
    priceRental = priceRental * 0.75;
}
if ( numOfFishers % 2 === 0){
    priceRental = priceRental * 0.95;
}
          break;
    }
    if(budget >= priceRental){
        console.log(`Yes! You have ${Math.abs(budget - priceRental).toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money! You need ${Math.abs(budget - priceRental).toFixed(2)} leva.`)
    }

}
fishingBoat([3000,"Summer",11]);
/*fishingBoat([3000,"Summer",11]);
fishingBoat([3600,"Autumn",6]);
fishingBoat([2000,"Winter",13]); 
/*Лодка за риболов
Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат
на риболов с кораб. Цената за наема на кораба зависи от сезона и броя рибари.
Цената зависи от сезона:
 Цената за наем на кораба през пролетта е 3000 лв.
 Цената за наем на кораба през лятото и есента е 4200 лв.
 Цената за наем на кораба през зимата е 2600 лв.
В зависимост от броя си групата ползва отстъпка:
 Ако групата е до 6 човека включително – отстъпка от 10%.
 Ако групата е от 7 до 11 човека включително – отстъпка от 15%.
 Ако групата е от 12 нагоре – отстъпка от 25%.
Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат
допълнителна отстъпка.
Напишете програма, която да пресмята дали рибарите ще съберат достатъчно пари.
Вход
Приемат се 3 реда, извадени от входния аргумент:
 Бюджет на групата – цяло число в интервала [1…8000]
 Сезон – текст : "Spring", "Summer", "Autumn", "Winter"
 Брой рибари – цяло число в интервала [4…18]
Изход
Да се отпечата на конзолата един ред:
 Ако бюджетът е достатъчен:
"Yes! You have {останалите пари} leva left."
 Ако бюджетът НЕ Е достатъчен:
"Not enough money! You need {сумата, която не достига} leva."
Сумите трябва да са форматирани с точност до два знака след десетичната запетая.
Примерен вход и изход
Вход  
3000
Summer
11

Изход
Not enough money!
You need 570.00
leva.

Обяснения
Лятото риболовния туризъм струва 4200 лв., 11 рибари ползват 15%
отстъпка -> 4200 - 15% = 3570 лв., нечетен брой са и не ползват
допълнителна отстъпка,.
3000 <= 3570, следователно не им достигат 570.00 лв.



Вход   
3600
Autumn
6

Изход
Not enough money!
You need 180.00
leva.


Вход
2000
Winter
13
Изход
Yes! You have 50.00 leva left.

  */