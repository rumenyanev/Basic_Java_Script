function numbersNto1Reversed(input) {
    let n = +input.shift();

    for (let i = n; i > 0; i--) {
        console.log(i);
    }

}
numbersNto1Reversed([2]);
numbersNto1Reversed([3]);
numbersNto1Reversed([5]);
/*Числата от N до 1 в обратен ред
Напишете програма, която чете цяло положително число n, въведено от потребителя, и печата числата от n
до 1 в обратен ред (от най-голямото към най-малкото).
Примерен вход и изход
вход Числата от N до 1 в обратен ред
Напишете програма, която чете цяло положително число n, въведено от потребителя, и печата числата от n
до 1 в обратен ред (от най-голямото към най-малкото).
Примерен вход и изход
вход
2

изход
2
1

вход
3

изход
3
2
1

вход
5

изход
5
4
3
2
1
    */