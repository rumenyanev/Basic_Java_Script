function renovation(input){

    let heightRoom = +input.shift();
    let widthRoom = +input.shift();
    let windowAndDoor = +input.shift();

    let areaRoom  = ((heightRoom * widthRoom)*4);
    let areaWindowAndDoor = areaRoom *(windowAndDoor/100);
    let wallToPaint = areaRoom - areaWindowAndDoor;

    let allPaintLitres = 0;
    let command = input.shift();
    let litresPaint = 0;
    while(command !== "Tired!"){
        let litresPaint = +command;
        allPaintLitres += litresPaint;
        if(allPaintLitres >= wallToPaint){
            break;
        }
        command = input.shift();
    }
    
if(command === "Tired!"){
    console.log(`${(wallToPaint - allPaintLitres)} quadratic m left.`);
}
    if(wallToPaint === allPaintLitres){
        console.log("All walls are painted! Great job, Pesho!")
    }
    else if(allPaintLitres > wallToPaint){
        console.log(`All walls are painted and you have ${Math.abs(allPaintLitres - wallToPaint)} l paint left!`);
    }

}
renovation([3,5,10,2,3,4,"Tired!"]);
renovation([2,3,25,6,7,8]);

/*Задача 4. Ремонт
Пешо решава, че иска да направи ремонт вкъщи. 
Неговата задача е да боядиса стените в хола, като знаете височината и ширината на една стена. 
Холът на Пешо има 4 стени с еднакви размери, определен процент от които се заемат от прозорци и врати, 
които няма да бъдат боядисвани. 
Той не е сигурен дали ще успее наведнъж, затова моли Вас да му помогнете да изчисли дали ще му остава 
още работа за следващия ден и, ако да, колко кв. м. има да довърши, а в случай, че успее да боядиса хола, 
колко боя му е останала (трябва да се има предвид, че с един литър боя се боядисва един квадратен метър от стената). 
Вход
От конзолата се четат следните редове:
    1. Височина на стената - цяло число [0… 100]
    2. Ширина на стената - цяло число [0… 100]
    3. Процент от общата площ на стените, който няма да бъде боядисан - цяло число [5… 95]
На следващите редове до получаване на командата "Tired!" или докато не бъдат боядисани всички стени, се чете по едно число:
    • Литри боя – цяло число [0…100]:
Забележка: Площта за боядисване да бъде закръглена нагоре до най-близкото цяло число.
Изход
Да се отпечата на конзолата един от следните редове:
    • При получаване на командата "Tired!":
"{квадратни метри} quadratic m left." 
{квадратни метри} е повърхнината, която му остава да боядисана.
    • Aко е останала боя в излишък:
"All walls are painted and you have {литри боя} l
 paint left!" 
    • Aко след боядисването на всички стени, не е останала боя:
"All walls are painted! Great job, Pesho!" 
Примерен вход и изход 
Вход
3
5
10
2
3
4
Tired!

Изход
45 quadratic m left.


Обяснения
Стената е с височина 3 и ширина 5 
=> обща повърхнина = 3 * 5 * 4 = 60 
стени за боядисване -> 60 – 10% = 54
1-во боядисване -> 54 – 2 = 52;
2-ро -> 52 - 3 = 49
3-то  -> 49 - 4 = 45
Вход -> Tired!
=>останала повърхнина: 45

Вход
2
3
25
6
7
8

Изход
All walls are painted and you have 3 l paint left!

Обяснения
Стената е с височина 2 и ширина 3 
=> обща повърхнина = 2 * 3 * 4 = 24 
стени за боядисване -> 24 – 25% = 18
1-во боядисване -> 18 - 6 = 12
2-ро -> 12 - 7 = 5
3-то  -> 5 - 8 = -3
=> всички стени са измазани и ни остават 3 литра боя
 */