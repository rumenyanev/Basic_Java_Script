function theMostPowerfulWord(input){

    let bestPowerWord = "";
        let bestPower = 0;

        let word = input.shift();
        while (true) {
            if(word == "End of words"){
                break;
            }
            let wordSum = 0;
            for (let i = 0; i < word.length; i++) {
                wordSum += word.charCodeAt(i);
            }

            let numLength = word.length;
       
         if (word.charAt(0) === 'A'|| word.charAt(0) === 'E'|| word.charAt(0) === 'I'|| word.charAt(0) === 'O'
            || word.charAt(0) === 'U'|| word.charAt(0) === 'Y'|| word.charAt(0) === 'a'|| word.charAt(0) === 'e'
            || word.charAt(0) === 'i'|| word.charAt(0) === 'o'|| word.charAt(0) === 'u' || word.charAt(0) === 'y') {
                wordSum = wordSum * numLength;
            } else {
                wordSum = Math.floor(wordSum / numLength);
            }


            if (wordSum > bestPower) {
                bestPower = wordSum;
                bestPowerWord = word;
            }
            word = input.shift();
        }

        console.log(`The most powerful word is ${bestPowerWord} - ${bestPower.toFixed(0)}`);
    }





theMostPowerfulWord(["The","Most","Powerful","Word","Is","Experience","End of words"]);
theMostPowerfulWord(["But","Some","People","Say","It's","LOVE","End of words"]);
/*Задача 6. Най-силната дума
 За Лора думите притежават голяма сила. Тя те моли да измислиш алгоритъм, 
 с който да откриеш коя е "най-силната" дума. До получаване на команда "End of words"
  ще се четат от конзолата думи. За да се открие силата на всяка една, 
  трябва да се намери сборът от ASCII стойностите на символите, от които се състои думата. 
  Ако започва с гласна буква - 'a', 'e', 'i', 'o', 'u', 'y' (или техните еквивалентни главни букви), 
  полученият сбор трябва да се умножи по дължината на думата, в противен случай, 
  да се раздели на дължината и да се закръгли до най-близкото цяло число надолу.
Вход
До получаване на команда "End of words" се чете по един ред от конзолата:
    • дума – текст 
Изход
След приключване на програмата се печата на един ред думата с "най-голяма сила":
    • "The most powerful word is {думата с най-голяма сила} - {силата на думата}" 
Примерен вход и изход
Вход
The
Most
Powerful
Word
Is
Experience
End of words

Изход
The most powerful word is Experience - 10320

Обяснения
Първата дума е "The" сумата на ASCII стойностите ѝ е 84 + 104 + 101 = 289. 
Думата не започва с гласна буква, затова делим сбора на дължината на думата в случая 3. 289 / 3 = 96
Продължаваме със останалите думи.
Последната дума е "Experience", сумата не ASCII стойностите ѝ е 1032. 
Думата започва с гласна буква, затова умножаваме точките по дължината на думата в случая 10.
1032 * 10 = 10320
Получаваме командата "End of words"
Най-силата дума е "Experience"

Вход
But
Some
People
Say
It's
LOVE
End of words

Изход
The most powerful word is It's - 1372

*/