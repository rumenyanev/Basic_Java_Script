function sumNumbers(input){
    let n = +input.shift();

    let sum = 0;
    for (let i = 0; i < n; i++) {
        let number = +input.shift();
        sum += number;
    }
    console.log(sum);

}
sumNumbers([2,10,20]);
sumNumbers([3,-10,-20,-30]);
sumNumbers([4,45,-20,7,11]);
sumNumbers([1,999]);
sumNumbers([0]);

/*Сумиране на числа
Да се напише програма, която получава n-на брой цели числа и ги сумира.

 От първия ред на входа се получава броят числа n.
 От следващите n елемента се получава по едно цяло число.
Програмата трябва да вземе числата, да ги сумира и да отпечата сумата им.
Примерен вход и изход
вход   
2
10
20

изход
30 

вход
3
-10
-20
-30

изход
-60 

вход
4
45
-20
7
11

изход
43 


вход
1
999

изход
999 


вход
0 
изход
0  
      */