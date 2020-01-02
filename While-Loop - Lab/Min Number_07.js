function minNumber(input){
    let numNumbers = Number(input.shift());

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (numNumbers-- > 0) {
        let numbers = Number(input.shift());

        if (minNumber > numbers) {
            minNumber = numbers;
        }
    }
    console.log(minNumber);
}
minNumber([2,100,99]);
minNumber([3,-10,20,-30]);
minNumber([2,-1,-2]);
/*Най-малко число
Напишете програма, която получава n-на брой числа (n > 0) и намира най-малкото измежду тях. Първо се
въвежда броят числа n, а след това самите n числа, по едно на ред.
Примерен вход и изход
вход  
2
100
99

изход
99 

вход
3
-10
20
-30

изход
-30 


вход
4
45
-20
7
99

изход
-20 

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
-2            */