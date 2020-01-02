function accountBalance(input){
    let numContributions = Number(input.shift());

let balance = 0;
    while(numContributions -- > 0){
        let sums = Number(input.shift());
        if(sums <= 0){
            console.log("Invalid operation!");
            break;
        }
        
        balance += sums;
        console.log(`Increase: ${sums.toFixed(2)}`);

    }
console.log(`Total: ${balance.toFixed(2)}`);

}
accountBalance([3,5.51,69.42,100]); 
accountBalance([5,120,45.55,-150]);

/*Баланс по сметка
Напишете програма, която пресмята колко общо пари има в сметката, след като направите определен брой
вноски. На първия ред ще получите колко вноски трябва да се направят. На всеки следващ ред ще
получавате сумата, която трябва да внесете в сметката, докато не се достигне броя вноски. При всяка
получена сума на конзолата трябва да се извежда "Increase: " + сумата и тя да се прибавя в сметката.
Ако получите число по-малко от 0 на конзолата трябва да се изведе "Invalid operation!" и програмата
да приключи. Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката
закръглена до втория знак след десетичната запетая.
Примерен вход и изход
вход 
3 
5.51
69.42
100

изход
Increase: 5.51
Increase: 69.42
Increase: 100
Total: 174.93


вход
5
120
45.55
-150

изход
Increase: 120
Increase: 45.55
Invalid operation!
Total: 165.55            */