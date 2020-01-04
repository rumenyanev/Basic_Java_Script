function cake(input){
    let width = +input.shift();
    let length = +input.shift();

    let cake = width * length;

    let pieces = 0;
    while(pieces <= cake){
    let command = input.shift();
        if (command === "STOP") {
            break;
        }
         piece = Number(command);
        pieces += piece;
    }
    if (pieces > cake) {
        let neededPieces = pieces - cake;
        console.log(`No more cake left! You need ${neededPieces} pieces more.`);
    } else {
        let leftPieces = cake - pieces;
        console.log(`${leftPieces} pieces are left.`);
    }
}
cake([10,10,20,20,20,20,21]);
cake([10,2,2,4,6,"STOP"]);

/*Торта
Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта. 
Той обаче не знае колко парчета могат да си вземат гостите от нея. 
Вашата задача е да напишете програма, която изчислява броя на парчетата, които гостите са взели, преди тя да свърши. 
Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000]) 
и след това на всеки ред, до получаване на командата "STOP"
или докато не свърши тортата, броят на парчетата, които гостите вземат от нея.
Бележка: Едно парче торта е с размер 1х1 см.
Да се отпечата на конзолата един от следните редове:
 "{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
 "No more cake left! You need {брой недостигащи парчета} pieces more."
Примерен вход и изход
Вход 
10
10
20
20
20
20
21

Изход 
No more cake left! You need 1 pieces
more.

Обяснения
Размер на тортата: 10*10 = 100.
Въвеждат се многократно брой
парчета които са взети:
20+20+20+20+21=101
Не ни достига едно парче: 101-100=1


Вход
10
2
2
4
6
STOP

Изход 
8 pieces are left.
                        */