function operationsBetweenNumbers(input){
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operand = input.shift();
                                   
    let result = 0.0;
    let oddOrEven = "";
    switch(operand){
        case"+":
        result = num1 + num2;
        if(result % 2 == 0){
            oddOrEven = "even";
        }
        else{
            oddOrEven = "odd";
        }
        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;
        case"-":
        result = num1 - num2;
        if(result % 2 == 0){
            oddOrEven = "even";

        }
        else{
            oddOrEven = "odd";
        }
        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;
        case"*":
        result = num1 * num2;
        if(result % 2 == 0){
            oddOrEven = "even";
     
        }
        else{
            oddOrEven = "odd";
        }
        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;
        case"/":
        result = num1 / num2;
        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
            break;
        }
        else{
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
        break;
        case"%":
        result = num1 % num2;
        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
            break;
        }
        else{
            console.log(`${num1} % ${num2} = ${result}`);
        }
        break;
    }

}
operationsBetweenNumbers([112,0,'/']); 

operationsBetweenNumbers([10,12,"+"]);
operationsBetweenNumbers([123,12,'/']);
operationsBetweenNumbers([112,0,'/']);
operationsBetweenNumbers([10,1,'-']);
operationsBetweenNumbers([10,3,'%']);
operationsBetweenNumbers([10,0,'%']);
operationsBetweenNumbers([7,3,'*']);
/*Операции между числа
Напишете програма, която приема входен аргумент (Input) и изважда две цели числа (N1 и N2) и оператор
от него, с който да се извърши дадена математическа операция с тях. Възможните операции са:
Събиране(+), Изваждане(-), Умножение(*), Деление(/) и Модулно деление(%). При събиране, изваждане и
умножение на конзолата трябва да се отпечатат резултата и дали той е четен или нечетен. При
обикновеното деление – резултата. При модулното деление – остатъка. Трябва да се има предвид, че
делителят може да е равен на 0(нула), а на нула не се дели. В този случай трябва да се отпечата специално
съобщениe.
Вход
Приемат се 3 реда, извадени от входния аргумент:
 N1 – цяло число в интервала [0...40 000]
 N2 – цяло число в интервала [0...40 000]
 Оператор – един символ измежду: "+","-","*","/","%"
Изход
Да се отпечата на конзолата един ред:
 Ако операцията е събиране, изваждане или умножение:
o "{N1} {оператор} {N2} = {резултат} – {even/odd}"
 Ако операцията е деление:
o "{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая
 Ако операцията е модулно деление:
o "{N1} % {N2} = {остатък}"
 В случай на деление с 0(нула):
o "Cannot divide {N1} by zero"
Примерен вход и изход
вход   
10
12
+

изход
10 + 12 = 22 - even 

вход
123
12
/

изход
123 / 12 = 10.25 

вход
112
0
/

изход
Cannot divide 112 by zero

вход
10
1
-

изход
10 – 1 = 9 - odd 

вход
10
3
%

изход
10 % 3 = 1 

вход
10
0
%

изход
Cannot divide 10 by zero


вход
7
3
*

изход
7 * 3 = 21 - odd

                   */