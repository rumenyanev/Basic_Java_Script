function oddEvenSum(input) {
    let n = Number(input.shift());
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 1; i <=n; i++) {
        let num = Number(input.shift());
        if (i % 2 === 0){
            evenSum += num;
        }else{
            oddSum += num;
        }
        }if(evenSum === oddSum){
            console.log("Yes");
            console.log(`Sum = ${evenSum}`)
        }else{
            let diff = Math.abs(evenSum- oddSum);
            console.log("No");
            console.log(`Diff = ${diff}`)
        }    
}
oddEvenSum([4, 10, 50, 60, 20]);
oddEvenSum([4, 3, 5, 1, -2]);
oddEvenSum([3, 5, 8, 1]);
/*Четна / нечетна сума
Да се напише програма, която получава n-на брой цели числа и проверява, дали сумата от числата на четни
позиции е равна на сумата на числата на нечетни позиции. При равенство да се отпечатат "Yes" и на нов ред
"Sum = " + сумата; иначе да се отпечата "No" и на нов ред "Diff = " + разликата.
Разликата се изчислява по абсолютна стойност.


Примерен вход и изход
вход
4
10
50
60
20

изход
Yes
Sum = 70

коментар
10+60 =
50+20 =
70

вход
4
3
5
1
-2

изход
No
Diff = 1

коментар
3+1 ≠ 5-2
Diff =
|4-3| = 1

вход
3
5
8
1

изход
No
Diff = 2

коментар
5+1 ≠ 8
Diff =
|6-8| = 2
              */