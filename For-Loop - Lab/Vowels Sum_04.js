function vowelsSum(input) {
    let word = input[0];

    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        let symbol = word[i];
        switch (symbol) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;

        }
    }
    console.log(sum);
}
vowelsSum(["hello"]);
vowelsSum(["hi"]);
vowelsSum(["bamboo"]);
vowelsSum(["beer"]);
/*Сумиране на гласните букви
Да се напише програма, която получава текст (стринг) и изчислява и отпечатва сумата от стойностите на
гласните букви според таблицата по-долу:

буква     a  e  i  o  u
стойност  1  2  3  4  5

Примерен вход и изход

вход
hello

изход
6

коментар
e + o = 2 + 4 = 6

вход
hi

изход
3
коментар
i = 3

вход
bamboo

изход
9

коментар
a + o + o = 1 + 4 + 4 = 9

вход
beer

изход
4

коментар
e + e = 2 + 2 = 4
                      */