function metricConverter(input){
    let value = Number(input.shift());
    let inputUnit = input.shift();
    let outputUnit = input.shift();

    

    switch(inputUnit){
        case"mm":
        value /= 1000;
        break;
        case"cm":
        value /= 100;
        break;
        case"m":
        value = value;
        break;
    }
    switch(outputUnit){
        case"mm":
        value *= 1000;
        break;
        case"cm":
        value *= 100;
        break;
        case"m":
        value = value;
    }
    console.log(value.toFixed(3));


}
metricConverter([12,"mm","m"]);
metricConverter([150,"m","cm"]);
metricConverter([45,"cm","mm"]);
/*Конвертор за мерни единици
Да се напише програма, която преобразува разстояние между следните 3 мерни единици: mm, cm, m.
Използвайте съответствията от таблицата по-долу:

входна единица изходна единица
1 meter (m) 1000 millimeters (mm)
1 meter (m) 100 centimeters (cm)
Входните данни се състоят от три реда, въведени от потребителя:
 Първи ред: число за преобразуване - реално число
 Втори ред: входна мерна единица - текст
 Трети ред: изходна мерна единица (за резултата) - текст
На конзолата да се отпечата резултатът от преобразуването на мерните единици форматиран до третия знак
след десетичната запетая.
вход 
12
mm
m
изход
0.012 

вход
150
m
cm
изход
15000.000 

вход
45
cm
mm
изход
450.000
                 */