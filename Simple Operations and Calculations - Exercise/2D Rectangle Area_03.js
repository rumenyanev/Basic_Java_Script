function twoDRectangleArea(input){
    
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let lenght = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let area = lenght * width;
    let perimeter = (lenght + width)*2;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));


}
twoDRectangleArea([60,20,10,50]);
twoDRectangleArea([30,40,70,-10]);
twoDRectangleArea([600.25,500.75,100.50,-200.5]);


/*Лице на правоъгълник в равнината
Правоъгълник е зададен с координатите на два от
своите срещуположни ъгъла (x1, y1) – (x2, y2). Да се
пресметнат площта и периметъра му. Входът се
приема от конзолата. Числата x1, y1, x2 и y2 са
дадени по едно наред. Изходът се извежда на
конзолата и трябва да съдържа два реда с по една
число на всеки от тях – лицето и периметъра.
Закръглете резултата до 2 цифри след десетичната
запетая
Примерен вход и изход
вход 
60
20
10
50

изход
1500.00
160.00

вход
30
40
70
-10

изход
2000.00
180.00

вход
600.25
500.75
100.50
-200.5

изход
350449.69
2402.00         
             */