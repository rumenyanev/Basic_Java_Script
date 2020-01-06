function salary(input) {
    let numTabs = +input.shift();
    let salary = +input.shift();

    while (numTabs-- > 0) {
        let sites = input.shift();
        switch (sites) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");

    } else {
        console.log(salary);
    }

}
salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary([3, 500, "Facebook", "Stackoverflow.com", "softuni.bg"]);
/*Заплата
Шеф на компания забелязва че все повече служители прекарват време в сайтове, които ги разсейват.
За да предотврати това, той въвежда изненадващи проверки на отворените табове на браузъра на служителите си.
Според сайта се налагат различни глоби:
 "Facebook" -> 150 лв.
 "Instagram" -> 100 лв.
 "Reddit" -> 50 лв.
От конзолата се четат два реда:

 Брой отворени табове в браузъра n - цяло число в интервала [1...10]
 Заплата - число в интервала [700...1500]
След това n – на брой пъти се чете име на уебсайт – текст
Ако по време на проверката заплатата стане по-малка или равна на 0 лева, на конзолата се изписва
"You have lost your salary." и програмата приключва. В противен случай след проверката на
конзолата се изписва остатъкът от заплатата (да се изпише като цяло число).
Примерен вход и изход
Вход
10
750
Facebook
Dev.bg
Instagram
Facebook
Reddit
Facebook
Facebook

Изход
You have lost
your salary.


Обяснения
Има 10 отворени таба в браузъра.
Заплатата е 750
За първия таб -> Facebook глоба 150 лв.(750 – 150 = 600)
За втория таб -> Dev.bg не глобяват
За третия таб -> Instagram глоба 100 лв.(600 – 100 = 500)
За четвъртия таб -> Facebook глоба 150 лв.(500 – 150 = 350)
За петия таб -> Reddit глоба 50 лв. (350 – 50 = 300)
За шестия таб -> Facebook глоба 150 лв.(300 – 150 = 150)
За седмия таб -> Facebook глоба 150 лв.(150 – 150 = 0)
Заплатата е равна на 0, следователно се изписва съответният изход и програмата приключва.

Вход
3
500
Github.com
Stackoverflow.com
softuni.bg

Изход
500

Вход
3
500
Facebook
Stackoverflow.com
softuni.bg

Изход
350
                            */