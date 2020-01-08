function evenPowersOf2Two(input){
let n = +input.shift();
for(let power = 0; power <= n; power+=2){
    let number = 2 ** power; 
    console.log(number);
}
}
evenPowersOf2Two([3]);
evenPowersOf2Two([4]);
evenPowersOf2Two([5]);
evenPowersOf2Two([6]);
evenPowersOf2Two([7]);
/*Четни степени на 2
Да се напише програма, която чете число n, въведено от потребителя, и печата четните степени на 2 ≤ 2 n : 2 0 ,
2 2 , 2 4 , 2 8 , …, 2 n .
Примерен вход и изход
вход   
3 

изход
1
4

вход
4 

изход
1
4
16

вход
5 

изход
1
4
16

вход
6 

изход
1
4
16
64


вход
7 

изход
1
4
16
64       */