function bachelorParty(input){

    let salarySinger = +input.shift();

    
    let cover = 0;
    let gests = 0;
    let numGests = 0;
    let sum = 0;
    while(input != "The restaurant is full"){
         numGests = +input.shift();
        gests += numGests;
        if(numGests < 5){
            cover = 100;
            sum += Number(cover * numGests);
        }else{
            cover = 70;
             sum += Number(cover * numGests);
        }
       
    }
    
    
    if (sum >= salarySinger){
console.log(`You have ${gests} guests and ${(sum - salarySinger)} leva left.`);
    }
    else{
        console.log(`You have ${gests} guests and ${sum} leva income, but no singer.`)
    }

}
bachelorParty([2800,5,5,4,6,6,12,12,"The restaurant is full"]);
bachelorParty([3200,5,12,6,6,12,"The restaurant is full"]);
/*Задача 4. Ергенско Парти
Сватбата наближава и Марто ще организира ергенското парти на Иван в своя ресторант, като знаете, 
че Иван ще покани няколко групи свой познати. Марто има нужда от вашата помощ. 
Напишете програма, която пресмята колко гости ще събере ресторанта, какви ще са приходите му от ергенското парти, 
както и дали Марто ще може да си позволи да плати на гост изпълнител, като знаете че:

Ако резервацията е за група с по-малко от 5 човека, куверта за един човек ще е 100 лв.
Ако резервацията е за група с 5 или повече човека, куверта за един човек ще е 70 лв.
Вход
От конзолата се чете:
Сумата предвидена за гост изпълнителя - цяло число в интервала [1… 4500]
На всеки следващ ред (до получаване на команда "The restaurant is full") - броят на хората във всяка група.
Изход
Да се отпечата на конзолата един от следните редове:
Ако Марто успее да си позволи гост изпълнител:
"You have {брой гости} guests and {останалата сума} leva left."
Ако Марто не успее да си позволи гост изпълнител:
"You have {брой гости} guests and {приходи} leva income, but no singer."
Примерен вход и изход
Вход		
2800
5
5
4
6
6
12
12
The restaurant is full

Изход
You have 50 guests and 820 leva left.	

Обяснения
Гост изпълнителя ще струва 2800 лева. Резервациите са както следва:
1-ва група - 5 човека по 70 лв. = 350 лв.
2-ра група  - 5 човека по 70 лв. = 350 лв.
3-та група - 4 човека по 100 лв. = 400 лв.
…
7-ма група - 12 човека по 70 лв. = 840 лв.
Събраната сума от всички резервации е : 3620 лв.
След плащането на гост изпълнителя Марто разполага с 820 лв.
Вход	
3200
5
12
6
6
12
The restaurant is full

Изход
You have 41 guests and 2870 leva income, but no singer.	


Вход
1800
4
4
4
4
6
6
The restaurant is full

Изход
You have 28 guests and 640 leva left.
*/