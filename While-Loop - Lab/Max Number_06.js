function maxNumber(input) {

    let numNumbers = Number(input.shift());

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (numNumbers-- > 0) {
        let numbers = Number(input.shift());

        if (maxNumber < numbers) {
            maxNumber = numbers;
        }
    }
    console.log(maxNumber);

}
maxNumber([5, -1000, -2000, -3000, -4000, -5000]);

maxNumber([2, 100, 99]);
maxNumber([3, -10, 20, -30]);
maxNumber([4, 45, -20, 7, 99]);
/*Най-голямо число
Напишете програма, която получава n-на брой числа (n > 0) и намира най-голямото измежду тях.
Първо се получава броят числа n, а след това самите n числа, по едно на ред.
Примерен вход и изход
вход
2
100
99

изход
100

вход
3
-10
20
-30

изход
20

вход
4
45
-20
7
99

изход
99

вход
1
999
изход
999

вход
2
-1
-2
изход
-1           */