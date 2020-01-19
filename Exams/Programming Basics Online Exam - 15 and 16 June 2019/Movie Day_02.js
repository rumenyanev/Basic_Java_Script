function movieDay(input){

  let time = +input.shift();
  let numScenes = +input.shift();
  let durationScenes = +input.shift();

  let currentTime = time * 0.85;
  let movie = numScenes * durationScenes;

  if(currentTime >= movie){
    console.log(`You managed to finish the movie on time! You have ${(currentTime - movie).toFixed(0)} minutes left!`);
  }
  else{
    console.log(`Time is up! To complete the movie you need ${Math.abs(currentTime - movie).toFixed(0)} minutes.`);
  }

}
movieDay([120,10,11]);
movieDay([60,15,3]);
/*Задача 2. Снимачен ден
Вие сте режисьор на филма "Програмирането е забавно", като имате определено време за снимки. 
От вас се иска да напишете програма, с която ще разберете дали снимачният ден ще ви стигне да заснемете филма. 
Снимачният ден започва с подготовка на терен, което е 15 процента от времето за снимки! 
Филмът има определен брой сцени, които се заснемат за определено време.
Вход
От конзолата се четат 3 реда:
    1. Време за снимки – цяло число в диапазона [0… 1440]
    2. Брой сцени  – цяло число в диапазона [5… 25]
    3. Времетраене на сцена – цяло число в диапазона [20… 90]
Изход
На конзолата да се отпечата един ред:
    • Ако времето за заснемане на филма ви стигне: 
  "You managed to finish the movie on time! You have {останало време} minutes left!"
    • Ако времето НЕ ВИ стигне:
  "Time is up! To complete the movie you need {нужно време} minutes."
Останалото време да се закръгли до най-близкото цяло число.
Примерен вход и изход
Вход
120
10
11

Изход
Time is up! To complete the movie you need 8 minutes.

Обяснения
Подготовката на терен => 120 * 0.15 = 18 минути.
Време за заснемане на сцените => 10 * 11 = 110
Необходимо време: 128 минути
Времето за снимки е 120  => 8 минути не стигат за снимки.

Вход
60
15
3

Изход
You managed to finish the movie on time! You have 6 minutes left!

*/