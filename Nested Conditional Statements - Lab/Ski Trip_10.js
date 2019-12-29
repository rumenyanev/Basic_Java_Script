function skiTrip(input){
    let days = Number(input.shift());
    let type = input.shift();
    let review = input.shift();

    let price = 0.0;
    let priceAfterDiscount = 0.0;
    let nights = days - 1;

    if(type == "room for one person"){
        price = 18.00 * nights;
        priceAfterDiscount = price;
    }
    else if (type == "apartment"){
        price = 25.00 * nights;
      if(days < 10){
          priceAfterDiscount = price - (price * 0.30);
      } 
      else if (days>=10 && days <=15){
          priceAfterDiscount = price - (price * 0.35);
      }
      else if (days > 15){
          priceAfterDiscount = price - (price * 0.50);
      }
    }else if(type == "president apartment"){
        price = 35 * nights;
        if(days < 10){
            priceAfterDiscount = price - (price * 0.10);
        } 
        else if (days>=10 && days <=15){
            priceAfterDiscount = price-(price * 0.15);
        }
        else if (days > 15){
            priceAfterDiscount = price-(price * 0.20);
        }
    }
    if(review == "positive"){
        priceAfterDiscount += priceAfterDiscount * 0.25;
    }
    else if(review == "negative"){
        priceAfterDiscount -= priceAfterDiscount * 0.10;
    }
    console.log(priceAfterDiscount.toFixed(2));
}
skiTrip([14,"apartment","positive"]);
skiTrip([30,"president apartment","negative"]);
skiTrip([12,"room for one person","positive"]);
skiTrip([2,"apartment","positive"]);
/**Ски почивка
Атанас решава да прекара отпуската си в Банско и да кара ски. 
Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя.
 Съществуват следните видове помещения, със следните цени за престой:
 "room for one person" – 18.00 лв за нощувка
 "apartment" – 25.00 лв за нощувка
 "president apartment" – 35.00 лв за нощувка
Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението,
което ще избере, той може да ползва различно намаление. 
Намаленията са както следва:
вид помещение          по-малко от 10 дни          между 10 и 15 дни         повече от 15 дни
room for one person    не ползва намаление         не ползва намаление       не ползва намаление
apartment              30% от крайната цена        35% от крайната цена      50% от крайната цена
president apartment    10% от крайната цена        15% от крайната цена      20% от крайната цена

След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна
(negative) . Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от
нея. Ако оценката му е негативна приспада от цената 10%.
Вход
Входът се чете от конзолата и се състои от три реда:
 Първи ред - дни за престой - цяло число в интервала [0...365]
 Втори ред - вид помещение - "room for one person","apartment" или "president apartment"
 Трети ред - оценка - "positive" или "negative"
Изход
На конзолата трябва да се отпечата един ред:
 Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.
Примерен вход и изход
Вход Изход Обяснения
14
apartment
positive

Изход
264.06 


14 дни => 13 нощувки => 13 * 25.00 = 325 лв.
10 < 13 дни < 15 => 325 – 35%= 211.25 лв.
Оценката е positive => 211.25 + 25% = 264.0625 -> 264.06 лв.

Вход  
30
president apartment
negative

Изход
730.80 

Вход
12
room for one person
positive

Изход
247.50 

Вход
2
apartment
positive

Изход
21.88 
             */