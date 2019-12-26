function radiansToDegrees(input){
    let radian = Number(input.shift());

    let degrees = (radian * 180)/Math.PI;
    console.log(degrees.toFixed(0));

}
radiansToDegrees([3.1416]);
radiansToDegrees([6.2832]);
radiansToDegrees([0.7854]);


/*Конзолен конвертор: от радиани в градуси
Напишете програма, която чете ъгъл в радиани (radians) и го преобразува в градуси (degrees). Използвайте
формулата: градус = радиан * 180 / π.Числото π в JavaScript програми е достъпно чрез Math.PI. Закръглете
резултата до най-близкото цяло число използвайки "toFixed(0)".
Примерен вход и изход
вход   
3.1416 
изход
180 

вход
6.2832 
изход
360 

вход
0.7854 
изход
45 

вход
0.5236 
изход
30
          */