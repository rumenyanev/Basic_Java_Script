function leftAndRightSum(input) {

    let n = +input.shift();
    let num = n * 2
    let leftSum = 0;
    let rightSum = 0;

    for (i = 0; i < num; i++) {
        let number = +input.shift(i);
        if (i < n) {
            leftSum += number;
        }
        else {
            rightSum += number;
        }

    }
    if (leftSum == rightSum) {
        console.log(` Yes, sum = ${leftSum}`);
    } else {
        console.log(` No, diff = ${Math.abs(leftSum - rightSum)}`);
    }

}
leftAndRightSum([2, 10, 90, 60, 40]);
leftAndRightSum([2, 90, 9, 50, 50]);

/*Лява и дясна сума
Да се напише програма, която чете 2*n-на брой цели числа и проверява, дали сумата на първите n числа
(лява сума) е равна на сумата на вторите n числа (дясна сума).
При равенство печата " Yes, sum = " + сумата;
иначе печата " No, diff = " + разликата.
Разликата се изчислява, като положително число (по абсолютна стойност).
Примерен вход и изход
вход
2
10
90
60
40

изход
Yes, sum = 100

коментар
10+90 = 60+40 = 100

вход
2
90
9
50
50

изход
No, diff = 1

коментар
90+9 ≠ 50+50
Difference =
|99-100| = 1*/