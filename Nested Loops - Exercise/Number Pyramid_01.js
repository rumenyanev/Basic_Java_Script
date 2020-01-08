function numberPyramid(input) {

    let n = +input[0];

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
              printCurrentLine += current +" ";
              current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }
    }
}
numberPyramid([7]);
numberPyramid([10]);
numberPyramid([12]);
numberPyramid([15]);
/*Пирамида от числа
Напишете програма, която получава цяло число n, въведено от потребителя и отпечатва пирамида от числа,
като в примерите:
вход
7

изход
1
2 3
4 5 6
7

вход
10

изход
1
2 3
4 5 6
7 8 9 10

вход
12

изход
1
2 3
4 5 6
7 8 9 10
11 12

вход
15

изход
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
                     */