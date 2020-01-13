function cruiseShip(input){
    let typeCruise = input[0];
    let typeCabin = input[1];
    let numNight = +input[2];

    let price = 0;
    switch(typeCruise){
        case"Mediterranean":
        if(typeCabin === "standard cabin"){
            price = 27.50;
        }else if (typeCabin === "cabin with balcony"){
            price = 30.20;
        }else if(typeCabin === "apartment"){
            price = 40.50;
        }

        break;
        case"Adriatic":
        if(typeCabin === "standard cabin"){
            price = 22.99;
        }else if (typeCabin === "cabin with balcony"){
            price = 25.00;
        }else if(typeCabin === "apartment"){
            price = 34.99;
        }

        break;
        case"Aegean":
        if(typeCabin === "standard cabin"){
            price = 23.00;
        }else if (typeCabin === "cabin with balcony"){
            price = 26.60;
        }else if(typeCabin === "apartment"){
            price = 39.80;
        }

        break;
    }
if(numNight > 7){
    price = price * 0.75;
}
let totalPrise = price * 4 * numNight;
console.log(`Annie's holiday in the ${typeCruise} sea costs ${totalPrise.toFixed(2)} lv.`);
}

cruiseShip(["Adriatic","apartment",5]);
/*Задача 3. Круизен кораб
Ани и семейството й решили тази година да почиват на круизен кораб. 
За да бъде сигурна семейната им почивка Ани решила да я резервира онлайн предварително. 
В един от популярните сайтове тя намерила следния ценоразпис на различните круизи в зависимост 
от тяхното местоположение и видове каюти:

местоположение/
вид каюта           Mediterranean      Adriatic        Aegean
standard cabin       27.50 лв.         22.99 лв.       23.00 лв.

cabin with balcony   30.20 лв.         25.00 лв.       26.60 лв.

apartment            40.50 лв.         34.99 лв.       39.80 лв.

Напишете програма, която изчислява колко ще струва почивката на четиричленното семейство на Ани, 
при избора на даден круиз, вид каюта и брой нощувки като знаете, че за повече от 7 нощувки има 25% отстъпка.
Вход
От конзолата се четат 3 реда:
    • Първият ред – вид круиз – текст с възможности: "Mediterranean", "Adriatic", "Aegean"
    • Вторият ред – вид каюта – текст с възможности : "standard cabin", "cabin with balcony", "apartment"
    • Третият ред – брой нощувки – цяло число в интервала [1… 50]
Изход
На конзолата се отпечатва един ред:
''Annie's holiday in the {вид круиз} sea costs {сума за почивката} lv.''
Резултатът да е форматиран до втората цифра след десетичната запетая.
Примерен вход и изход

Вход
Aegean
standard cabin
10

Изход
Annie's holiday in the Aegean sea costs 690.00 lv.


Обяснения
Ани избира круиз по Егейско море в стандартна стая за четирима човека за 10 нощувки => 23 * 4 * 10 = 920. 
Тъй като нощувките са повече, получават 25% отстъпка => 920 – 25% = 690.

Вход
Adriatic
apartment
5

Изход
Annie's holiday in the Adriatic sea costs 699.80 lv.


Вход
Mediterranean
cabin with balcony
12

Изход
Annie's holiday in the Mediterranean sea costs 1087.20 lv.

*/