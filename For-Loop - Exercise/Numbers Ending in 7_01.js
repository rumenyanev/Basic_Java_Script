function numbersEndingIn7(){

    for(let i = 1; i < 1000;i ++){
        if(i % 10 === 7){
            console.log(i);
        }
    }
} 
numbersEndingIn7([]);
numbersEndingIn7([]);
numbersEndingIn7([]);
/*Числа до 1000, завършващи на 7
Напишете програма, която отпечатва числата в диапазона [1…1000], които завършват на 7.
вход 
(няма)

изход
7
17
27
…
997  */