function journey(input){
    let budget = Number(input.shift());
    let season = input.shift();

    let priceTrip = 0.0;
    let destination = "";
    let typeTrip = "";

    if(budget <= 100){
        destination = "Bulgaria";
        if(season == "summer"){
            typeTrip = "Camp"
            priceTrip = budget * 0.30;
        }
        else if(season == "winter"){
            typeTrip = "Hotel";
            priceTrip = budget * 0.70;
        }
    }
    else if(budget > 100 && budget <= 1000){
        destination = "Balkans";
        if(season == "summer"){
            typeTrip = "Camp";
            priceTrip = budget * 0.40;
        }
        else if(season == "winter"){
            typeTrip = "Hotel";
            priceTrip = budget * 0.80;
        }
    }
    else if(budget > 1000){
        destination = "Europe";
        typeTrip = "Hotel";
        priceTrip = budget * 0.90;
    }
console.log(`Somewhere in ${destination}`);
console.log(`${typeTrip} - ${priceTrip.toFixed(2)}`);
}
journey([50,"summer"]);
journey([75,"winter"]);
journey([312,"summer"]);
journey([678.53,"winter"]);
journey([1500,"summer"]);
/*Пътешествие
Странно, но повечето хора си плануват отрано почивката. 
Млад програмист разполага с определен бюджет и свободно време в даден сезон. 
Напишете програма, която да приема на входа бюджета и сезона, а на
изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. 
Ако е лято ще почива на къмпинг, а зимата в хотел. 
Ако е в Европа, независимо от сезона ще почива в хотел. 
Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета:
 При 100лв. или по-малко – някъде в България
o Лято – 30% от бюджета
o Зима – 70% от бюджета
 При 1000лв. или по малко – някъде на Балканите
o Лято – 40% от бюджета
o Зима – 80% от бюджета
 При повече от 1000лв. – някъде из Европа
o При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.

Вход
Приемат се 2 реда, извадени от входния аргумент:
 Първи ред – Бюджет, реално число в интервала [10.00...5000.00].
 Втори ред – Един от двата възможни сезона: "summer" или "winter"
Изход
На конзолата трябва да се отпечатат два реда.
 Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
 Втори ред – "{Вид почивка} – {Похарчена сума}"
o Почивката може да е между "Camp" и "Hotel"
o Сумата трябва да е закръглена с точност до вторият знак след запетаята.

Примерен вход и изход
вход 
50
summer

изход
Somewhere in Bulgaria
Camp - 15.00

вход
75
winter

изход
Somewhere in Bulgaria
Hotel - 52.50

вход
312
summer

изход
Somewhere in Balkans
Camp - 124.80

вход
678.53
winter

изход
Somewhere in Balkans
Hotel - 542.82

вход
1500  
summer

изход
Somewhere in Europe
Hotel - 1350.00
                            */