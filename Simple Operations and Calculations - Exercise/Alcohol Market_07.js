function alcoholMarket(input){

   let priceWhisky = Number(input.shift());
   let litresBeer = Number(input.shift());
   let litresWine = Number(input.shift());
   let litresBrandy = Number(input.shift());
   let litresWhisky = Number(input.shift());

   let priceBrandy = priceWhisky/2;
   let priceWine = priceBrandy - (priceBrandy * 0.40);
   let priceBeer = priceBrandy - (priceBrandy * 0.80);

   let totalPrice = (priceWhisky*litresWhisky)+
   (priceWine * litresWine)+
   (priceBeer * litresBeer)+
   (priceBrandy*litresBrandy);

   console.log(totalPrice.toFixed(2));

    
}
alcoholMarket([50,10,3.5,6.5,1]);
/*Алкохолна борса
Пешо решава да направи купон и отива до алкохолната борса за да купи бира, вино, ракия и уиски. 
На конзолата се въвежда цената на уискито в лв./л. и количеството на бирата, виното, ракията и уискито,
които трябва да закупи. 
Да се напише програма, която пресмята колко пари са му необходими за да плати сметката, като знаете, че:
 цената на ракията е на половина по-ниска от тази на уискито;
 цената на виното е с 40% по-ниска от цената на ракията;
 цената на бирата е с 80% по-ниска от цената на ракията.
Вход
От конзолата се четат 5 реда:
1. Цена на уискито в лева – реално число в интервала [0.00 … 10000.00]
2. Количество на бирата в литри – реално число в интервала [0.00 … 10000.00]
3. Количество на виното в литри – реално число в интервала [0.00 … 10000.00]
4. Количество на ракията в литри – реално число в интервала [0.00 … 10000.00]
5. Количество на уискито в литри – реално число в интервала [0.00 … 10000.00]
Изход
Да се отпечата на конзолата едно число:
 парите, които са необходими на Пешо, форматирани до втория знак след десетичната запетая.
Примерен вход и изход
Вход 
50
10
3.5
6.5
1

Изход
315.00 

Обяснения
Цена на ракията за литър: 25 лв.
Цена на виното за литър: 25 – (0.4 * 25) = 15 лв.
Цена на бирата за литър: 25 – (0.8 * 25) = 5 лв.
Сума за ракията: 6.5 * 25 = 162.50 лв.
Сума за виното: 3.5 * 15 = 52.50 лв.
Сума за бирата: 5 * 10 = 50 лв.
Сума за уискито: 1 * 50 = 50 лв.
Обща сума: 162.50 + 52.50 + 50 + 50 = 315 лв.

Вход 
63.44
3.57
6.35
8.15
2.5

Изход
560.62

Насоки:
1. Приемете входа от конзолата и инициализирайте необходимите променливи.

2. Създайте три нови променливи с подходящо име, в които да запазите резултатите от изчисленията за
цената на ракията, виното и бирата.

3. Създайте още четири нови променливи с подходящо име, в които да запазите резултатите от
изчисленията за сумата на ракията, виното, бирата и уискито.

4. Изчислете общата сума и принтирайте резултата на конзолата, като го форматирате до втория знак
след десетичната запетая.*/