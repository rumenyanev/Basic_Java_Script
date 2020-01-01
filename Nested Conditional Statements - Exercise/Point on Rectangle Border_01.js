function pointOnRectangleBorder(input){
     let x1 = Number(input.shift());
     let y1 = Number(input.shift());
     let x2 = Number(input.shift());
     let y2 = Number(input.shift());
     let x = Number(input.shift());
     let y = Number(input.shift());

     if (x2 > x1 && y2 > y1) {
        if (((x == x1 || x == x2) && y >= y1 && y <= y2) || ((y == y1 || y == y2) && x >= x1 && x <= x2)) {
            console.log("Border");
        } else {
            console.log("Inside / Outside");
        }
    }
    }
pointOnRectangleBorder([2,-3,12,3,8,-1]);
pointOnRectangleBorder([2,-3,12,3,12,-1]);

/*Point on Rectangle Border
Точка върху страната на правоъгълник
Напишете програма, която проверява дали точка {x, y} се намира върху някоя от страните на правоъгълник
{x1, y1} – {x2, y2}. 
Входните данни се приемат от конзолата и се състоят от 6 реда : десетичните числа x1, y1,
x2, y2, x и y (като се гарантира, че x1 < x2 и y1 < y2). Да се отпечата "Border" (точката лежи на някоя от
страните) или "Inside / Outside" (в противен случай).
Примерен вход и изход
вход  
2
-3
12
3
8
-1

изход
Inside /
Outside

вход
2
-3
12
3
12
-1

изход
Border

* Подсказка: използвайте една или няколко условни if проверки с логически операции. Точка {x, y} лежи
върху някоя от страните на правоъгълник {x1, y1} – {x2, y2}, ако е изпълнено едно от следните условия:
 x съвпада с x1 или x2 и същевременно y е между y1 и y2
 y съвпада с y1 или y2 и същевременно x е между x1 и x2
Можете да проверите горните условия с една по-сложна if-else конструкция или с няколко по-прости
проверки или с вложени if-else проверки.*/