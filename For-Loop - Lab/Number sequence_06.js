function numberSequence(input){

    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;

    let n = +input.shift();

    for (let i = 0; i <=n; i++) {
       let currentNumber = +input.shift();
       if(currentNumber > maxNum) {
          maxNum = currentNumber;
       } 
        if(currentNumber < minNum){
           minNum = currentNumber;
       }
    } 
    
    console.log(`Max number: ${maxNum}`); 
    console.log(`Min number: ${minNum} `);
    
}

numberSequence([5,10,20,304,0,50]); 
numberSequence([6,250,5,2,0,100,1000]);

/*Редица цели числа
Напишете програма, която прочита n на брой числа. 
Принтирайте най-голямото и най-малкото число сред въведените.
Примерен вход и изход
вход  
5
10
20
304
0
50

изход
Max number: 304
Min number: 0

вход
6
250
5
2
0
100
1000

изход
Max number: 1000
Min number: 0 
                        */