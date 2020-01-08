function sumPrimeNonPrime(input) {
    let command = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command != "stop") {
        let num = Number(command);
        let isPrime = true;
        if (num == 1) {
            isPrime = false;
        }

        if (num < 0) {
            console.log("Number is negative.");
        } else {
            for (let i = 2; i <= (num / 2); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeSum += num;
            } else {
                nonPrimeSum += num;
            }
        }
        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
sumPrimeNonPrime([3,9,0,7,19,4,"stop"]); 
sumPrimeNonPrime([30, 83, 33, -1, 20, "stop"]);
sumPrimeNonPrime([0,-9,0,"stop"]); 


/*Суми прости и непрости числа
Напишете програма, която чете от конзолата цели числа в диапазона от -2,147,483,648 до 2,147,483,647,
докато не се получи команда "stop".
Да се намери сумата на всички въведени прости и сумата на всички въведени непрости числа.
Тъй като по дефиниция от математиката отрицателните числа не могат да бъдат прости,
ако на входа се подаде отрицателно число да се изведе следното съобщение

"Number is negative.".

В този случай въведено число се игнорира и не се прибавя към нито една от двете суми, а
програмата продължава своето изпълнение, очаквайки въвеждане на следващо число.
На изхода да се отпечатат на два реда двете намерени суми в следния формат:

"Sum of all prime numbers is: {prime numbers sum}"
"Sum of all non prime numbers is: {nonprime numbers sum}"

Примерен вход и изход
Вход
3
9
0
7
19
4
stop

Изход
Sum of all prime numbers
is: 29
Sum of all non prime
numbers is: 13


Обяснения
Първото въведено число е 3. То е просто и го прибавяме съм
сумата на простите числа.
Следващото число е 9. То не е просто и го прибавяме към
сумата на непростите числа.
Числото 0 не е просто число и го прибавяме към сумата на
непростите числа. Сумата става 9+0=9.
Следващите две числа са 7 и 19. Те са прости и всяко едно от
тях го прибавяме към сумата на простите числа. 3+7=10 и
10+19=29.

Следва числото 4, което не е просто и го прибавяме към
съответната сума 9+4=13.
Получаваме команда stop. Програмата прекъсва своето
изпълнение и отпечатваме двете суми.

Вход
30
83
33
-1
20
stop

Изход
Number is negative.
Sum of all prime numbers
is: 83
Sum of all non prime
numbers is: 83


Вход
0
-9
0
stop

Изход
Number is negative.
Sum of all prime numbers is: 0
Sum of all non prime numbers is: 0
                                         */