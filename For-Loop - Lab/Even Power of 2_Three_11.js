function evenPowerOf2Three(input) {
    let n = +input.shift();
    for (let i = 0; i <= n; i += 2){
        console.log(Math.pow(2,i));
    }
}
evenPowerOf2Three([10]);
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