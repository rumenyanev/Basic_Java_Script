function summerShopping(input){
    let budget = +input[0];
    let priceBeachTowel = +input[1];
    let percentDiscount = +input[2];

        let priceUmbrella = (priceBeachTowel * 2) / 3;
        let priceFlipFlop = priceUmbrella * 0.75;
        let priceBeachBag = (priceFlipFlop + priceBeachTowel) / 3;

        let totalPrice = (priceBeachTowel + priceUmbrella + priceFlipFlop + priceBeachBag) * (1 - percentDiscount / 100.0);
        let difference = Math.abs(totalPrice - budget);

        if (totalPrice <= budget) {
            console.log(`Annie's sum is ${totalPrice.toFixed(2)} lv. She has ${difference.toFixed(2)} lv. left.`);
        } else {
           console.log(`Annie's sum is ${totalPrice.toFixed(2)} lv. She needs ${difference.toFixed(2)} lv. more.`);
        }
    }


summerShopping([40,15,5]);
/*Задача 2. Лятно пазаруване
Лятната почивка на Ани наближава и тя решава да се подготви за нея предварително, като закупи всичко необходимо. 
Тя има определен бюджет и се нуждае от плажна хавлия, чадър, плажна чанта и джапанки. 
Напишете програма, която да изчислява каква сума трябва да заплати Ани за своите покупки и проверява 
дали бюджетът й ще бъде достатъчен,като знаете, 

че цената на чадъра е две трети от цената на хавлията, 
а цената на джапанките е 75% от тази на плажния чадър. 
Плажната чанта струва една трета от сумата за джапанките и хавлията взети заедно. 
Тъй като Ани е редовен клиент на този магазин, ще й бъде направена процентна отстъпка от общата сума на покупката.
Вход
От конзолата се четат 3 реда:
    1. На първия ред бюджетът на Ани – цяло число в интервала [1...1000]
    2. На втория ред цената на плажната хавлия – реално число в интервала [1.00... 300.00]
    3. На третия ред процентната отстъпка – цяло число в интервала [1...99]
Изход
На конзолата се отпечатва един ред:
    • Ако бюджетът Е достатъчен:
        ◦ "Annie's sum is {общата сума} lv. She has {оставащата сума} lv. left."
    • Ако  бюджетът НЕ Е достатъчен:
        ◦ "Annie's sum is {общата сума} lv. She needs {недостигащата сума} lv. more."
Резултатите да бъдат форматирани до втората цифра след десетичния знак!
Примерен вход и изход
Вход
40
15
5

Изход
Annie's sum is 38.00 lv. She has 2.00 lv. left.

Обяснения
2/3 от 15 = 10 - цената на плажния чадър.
75% от 10 = 7.50 - цената на джапанките.
1/3 от (15 + 7.50) = 7.50 - цената на плажната чанта.
15 + 10 + 7.50 + 7.50 = 40 - общата сума.
40 -  5% = 38 - сумата след отстъпката.
40 >= 38 => Бюджетът на Ани е достатъчен и тя има ресто от 2 лв.
25
6
10
Annie's sum is 14.40 lv. She has 10.60 lv. left.

Вход
30
17
3

Изход
Annie's sum is 43.97 lv. She needs 13.97 lv. more.

*/