function concatenateData(input){
    let firstName = input.shift();
    let lastName = input.shift();
    let age = Number(input.shift());
    let town = input.shift();

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData(['Ivan','Petrov',34,'Pleven']);
/*Concatenate Data
   Съединяване на текст и числа
Напишете програма, която изважда име, фамилия, възраст и град от аргумента input и печата съобщение
от следния вид: "You are <firstName> <lastName> a <age>-years old person from <town>."

1. Добавете към текущото Visual Studio Code решение още един JavaScript файл с име "Concatenate-
Data".
2. Приемете от конзолата входните данни (input)

В input се съдържа целия подаден вход. За да извадим данните от него една по една в реда на
подаване, можем да използваме функцията shift()

3. Изведете на конзолата форматирания изход:

4. Стартирайте програмата с Ctrl + F5 и тествайте с различни входни примери. За да изведете локално
резултат на конзолата, трябва да извикате функцията и да подадете входни данни в реда,*/