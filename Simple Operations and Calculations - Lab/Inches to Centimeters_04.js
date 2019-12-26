function inchesToCentimeters(input){
    let inches = Number(input.shift());

    let centimeters = inches * 2.54;
    console.log(centimeters);
}
inchesToCentimeters([5]);
/*От инчове към сантиметри
Да се напише програма, която изважда цяло число от аргумента input и преобразува числото от инчове в
сантиметри. За целта умножава инчовете по 2.54 (защото 1 инч = 2.54 сантиметра).
Примерен вход и изход
вход 
5 

Изход
12.7  
   */