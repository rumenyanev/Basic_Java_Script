function characterSequence(input){

    let word = input.shift();

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
      console.log(letter);
        
    }

}
characterSequence(["softuni"]);
characterSequence(["ice cream"]);
/*Поток от символи
Напишете програма, която чете текст(стринг), въведен от потребителя и печата всеки символ от текста на
отделен ред.
Примерен вход и изход


вход  
softuni 

изход
s
o
f
t
u
n
i


вход
ice cream 

изход
i
c
e
c
r
e
a
m

Насоки
1. Прочетете входният текст:

2. Направете for цикъл с начална стойност на контролната променлива от 0 до input.length
(дължината на текста). На всяка итерация взимайте буквата на позиция във въведената дума равна на
стойността на контролната променлива i, чрез []

3. На всяка итерация принтирайте стойността на променливата letter:*/