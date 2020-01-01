function summerOutfit(input){

    let degrees = Number(input.shift());
    let partOfDay = input.shift();

    let outfit = "";
    let shoes = "";

    switch(partOfDay){
        case"Morning":
if(degrees >= 10 && degrees <= 18){
    outfit = "Sweatshirt";
    shoes = "Sneakers";
    
}
else if(degrees > 18 && degrees<= 24){
    outfit = "Shirt";
    shoes = "Moccasins";
}else if (degrees >= 25){
    outfit = "T-Shirt";
    shoes = "Sandals";
}
        break;
        case"Afternoon":
        if(degrees >= 10 && degrees <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
            
        }
        else if(degrees > 18 && degrees<= 24){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }else if (degrees >= 25){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        break;
        case"Evening":
        if(degrees >= 10 && degrees <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
            
        }
        else if(degrees > 18 && degrees<= 24){
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (degrees >= 25){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        break;
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit([16,"Morning"]);
summerOutfit([22,"Afternoon"]);
summerOutfit([28,"Evening"]);

/*Лятно облекло
Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете програма която спрямо
времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече. Вашия приятел
има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от
таблицата.
От конзолата се четат точно два реда:
 Градусите - цяло число в интервала [10…42]
 Текст, време от денонощието - с възможности - "Morning","Afternoon", "Evening"
Време от
денонощието /            Мorning                Afternoon              Evening
градуси
10 >= градуси <= 18    Outfit = Sweatshirt     Outfit = Shirt          Outfit = Shirt
                        Shoes = Sneakers       Shoes = Moccasins       Shoes = Moccasins



18 > градуси <= 24       Outfit = Shirt         Outfit = T-Shirt        Outfit = Shirt
                        Shoes = Moccasins       Shoes = Sandals         Shoes = Moccasins


градуси >= 25           Outfit = T-Shirt        Outfit = Swim Suit       Outfit = Shirt
                        Shoes = Sandals         Shoes = Barefoot         Shoes = Moccasins


Да се отпечата на конзолата на един ред: "It's {градуси} degrees, get your {облекло} and
{обувки}."
Примерен вход и изход
Вход  
16
Morning

Изход
It's 16 degrees, get your
Sweatshirt and Sneakers.

Обяснения
Сутрин когато градусите са 16, Виктор си
взима суичър и маратонки.

Вход  
22
Afternoon

Изход
It's 22 degrees, get your T-Shirt
and Sandals.


Вход
28
Evening

Изход
It's 28 degrees, get your
Shirt and Moccasins.

Насоки

1. Приемете аргумента (input) и от него извадете число и стринг , след което инициализирайте две
променливи "outfit,shoes".

2. Направете проверка за градусите използвайки логически оператор "и" – "&&" - "degrees >= 10 && degrees <= 18"
 и в тялото на проверката за градусите проверявайте за времето от деня "Morning,Afternoon, Evening", 
 като за всеки етап от деня променяйте стойността на променливите
"outfit, shoes".

3. Отпечатайте на конзолата крайния резултат във формата описан в условието на задачата.*/