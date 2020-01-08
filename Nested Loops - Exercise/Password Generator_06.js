function passwordGenerator(input){
let n = Number(input.shift());
let l = Number(input.shift());
let letter = 97 + l;
 let result = '';
            for (let symbol1 = 1; symbol1 < n; symbol1++){
                for (let symbol2 = 1; symbol2 < n; symbol2++){
                    for (let symbol3 = 97; symbol3 < letter; symbol3++){
                        for (let symbol4 = 97; symbol4 < letter; symbol4++){
                            for (let symbol5 = 2; symbol5 <= n; symbol5++){
                                if (symbol5 > symbol1 && symbol5 > symbol2){
                                     result += (`${symbol1}${symbol2}${String.fromCharCode(symbol3)}${String.fromCharCode(symbol4)}${symbol5} ` );
                                   
                                }
                               
                            }
                        }
                    }
                }
            }
            console.log(result);
        }


passwordGenerator([3,1]);
/*passwordGenerator([3,2]);
passwordGenerator([4,2]);
/*Генератор за пароли
Да се напише програма, която чете две цели числа n и l, въведени от потребителя и генерира по азбучен ред
всички възможни пароли, които се състоят от следните 5 символа:

 Символ 1: цифра от 1 до n.
 Символ 2: цифра от 1 до n.
 Символ 3: малка буква измежду първите l букви на латинската азбука.
 Символ 4: малка буква измежду първите l букви на латинската азбука.
 Символ 5: цифра от 1 до n, по-голяма от първите 2 цифри.

Вход
Входът се чете от конзолата и се състои от две цели числа n и l в интервала [1…9], по едно на ред.
Изход
На конзолата трябва да се отпечатат всички пароли по азбучен ред, разделени с интервал.
Примерен вход и изход
вход 
2
4

изход
11aa2 11ab2 11ac2 11ad2 11ba2 11bb2 11bc2 11bd2 11ca2 11cb2 11cc2 11cd2 11da2
11db2 11dc2 11dd2


вход
3
1

изход
11aa2 11aa3 12aa3 21aa3 22aa3

вход
3
2

изход
11aa2 11aa3 11ab2 11ab3 11ba2 11ba3 11bb2 11bb3 12aa3 12ab3 12ba3 12bb3 21aa3
21ab3 21ba3 21bb3 22aa3 22ab3 22ba3 22bb3

вход
4
2

изход
11aa2 11aa3 11aa4 11ab2 11ab3 11ab4 11ba2 11ba3 11ba4 11bb2 11bb3 11bb4 12aa3
12aa4 12ab3 12ab4 12ba3 12ba4 12bb3 12bb4 13aa4 13ab4 13ba4 13bb4 21aa3 21aa4
21ab3 21ab4 21ba3 21ba4 21bb3 21bb4 22aa3 22aa4 22ab3 22ab4 22ba3 22ba4 22bb3
22bb4 23aa4 23ab4 23ba4 23bb4 31aa4 31ab4 31ba4 31bb4 32aa4 32ab4 32ba4 32bb4
33aa4 33ab4 33ba4 33bb4
                              */