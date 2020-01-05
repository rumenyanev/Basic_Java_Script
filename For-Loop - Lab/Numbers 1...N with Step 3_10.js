function numbers1toNWithStep3(input){

    let n = +input.shift();
    for(let i = 1; i <= n;i+=3){
        console.log(i);
    }
}
numbers1toNWithStep3([10]);
numbers1toNWithStep3([7]);
numbers1toNWithStep3([15]);
/*Числата от 1 до N през 3
Напишете програма, която чете число n, въведено от потребителя, и отпечатва числата от 1 до n през 3 (със стъпка 3).
Примерен вход и изход
вход  
10 

изход
1
4
7
10


вход
7 

изход
1
4
7


вход
15 

изход
1
4
7
10
13                 */