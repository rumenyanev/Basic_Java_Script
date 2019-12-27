function number1To9ToText(input){
    let number = Number(input.shift());

    switch(number){
        case 1:
            console.log("one");
            break;
            case 2:
            console.log("two");
            break;
            case 3:
            console.log("three");
            break;
            case 4:
            console.log("four");
            break;
            case 5:
            console.log("five");
            break;
            case 6:
            console.log("six");
            break;
            case 7:
            console.log("seven");
            break;
            case 8:
            console.log("eight");
            break;
            case 9:
            console.log("nine");
            break;
            default:
                console.log("number too big")
    }

}
number1To9ToText([5]);
number1To9ToText([1]);
number1To9ToText([9]);
number1To9ToText([10]);
/*Изписване на число до 9 с думи
Да се напише програма, която получава цяло число в диапазона [1…9], получено като аргумент и го изписва с
думи на английски език. Ако числото е извън диапазона, изписва "number too big".
Примерен вход и изход
вход 
5 
изход
five 

вход
1 
изход
one 

вход
9 
изход
nine 

вход
10 
изход
number too big
         */