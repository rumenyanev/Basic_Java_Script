function halfSumElement(input){
    let n = Number(input.shift());
    let maxNum = Number.MIN_SAFE_INTEGER;
    let sumNumbers = 0;

    let numbers = 0;
    for(let i = 0; i < n; i++){
         numbers = Number(input[i]);
        let num = numbers;
        if (numbers > maxNum){
            maxNum = numbers;
            sumNumbers += num;
         
        }else{
            sumNumbers += numbers;
        }
    }
    sumNumbers -= maxNum;
if(maxNum == sumNumbers){
    console.log("Yes");
    console.log(`Sum = ${maxNum}`);
}
else{
    console.log("No");
    console.log(`Diff = ${Math.abs(sumNumbers - maxNum)}`);
}

}
halfSumElement([7,3,4,1,1,2,12,1]);
halfSumElement([4,6,1,2,3]); 
halfSumElement([3]);
/*Елемент, равен на сумата на останалите
Да се напише програма, която получава n-на брой цели числа и проверява, дали сред тях съществува число,
което е равно на сумата на всички останали. Ако има такъв елемент, печата "Yes", "Sum = " + неговата
стойност; иначе печата "No", "Diff = " + разликата между най-големия елемент и сумата на останалите (по
абсолютна стойност).
Примерен вход и изход
вход  
7
3
4
1
1
2
12
1

изход
Yes
Sum = 12

коментари
3 + 4 + 1 + 2 + 1 + 1 = 12

вход
4
6
1
2
3

изход
Yes
Sum = 6

коментари
1 + 2 + 3 = 12

вход
3 

изход
No 

коментари
|10 - (1 + 1)| = 8
                          */