function cinema(input){
    let type = input.shift();
    let rows = Number(input.shift());
    let cols = Number(input.shift());

    let capacity = rows * cols;
    let income = 0.0;
    switch(type){
        case"Premiere":
        income = capacity * 12.00;
        break;
        case "Normal":
            income = capacity * 7.50;
            break;
            case"Discount":
            income = capacity * 5.00;
    }
console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere",10,12]);
cinema(["Normal",21,13]);
cinema(["Discount",12,30]);
/*Кино
В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции
с билети на различни цени:
 Premiere – премиерна прожекция, на цена 12.00 лева.
 Normal – стандартна прожекция, на цена 7.50 лева.
 Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
Напишете програма, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели
числа) и изчислява общите приходи от билети при пълна зала. Резултатът да се отпечата във формат като в
примерите по-долу, с 2 знака след десетичната точка.
Примерен вход и изход
вход   изход вход изход
Premiere
10
12

изход
1440.00
leva

вход
Normal
21
13

изход
2047.50
leva

вход
Discount
12
30

изход
1800.00 leva
                  */