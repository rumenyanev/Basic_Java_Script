function petShop(input){

    let foodDogs = Number(input.shift());
    let foodOtherAnimals = Number(input.shift());

    let sumForFood = (foodDogs * 2.5)+(foodOtherAnimals * 4);

    console.log(`${sumForFood.toFixed(2)} lv.`)

}
petShop([5,4]);
petShop([13,9]);
/*Зоомагазин
Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета. 
Храната се пазарува основно за кучета, от зоомагазин, но понякога стопанинът им купува 
и за животните на съседа му.
Една опаковка храна за кучета е на цена 2.50лв., а всяка останала, която не е за тях струва 4лв.
Вход
От конзолата се четат 2 реда:
3. Броят на кучетата – цяло число в интервала [0… 100]
4. Броят на останалите животни - цяло число в интервала [0… 100]
Изход
На конзолата се отпечатва:
&quot;{крайната сума} lv.&quot;
Резултатът трябва да бъде форматиран до втората цифра след десетичния знак.
Примерен вход и изход
вход   
5
4

изход
28.50 lv. 

вход
13
9

изход
68.50 lv.

            */