function areaOfFigures(input){
    let figureType = input.shift();
    let a = Number(input.shift());
    let b = Number(input.shift());
    let area = 0;
    switch(figureType){
        case "square":
            area = a * a;
            break;
               case"rectangle":
               area = a * b;
               break;
               case "circle":
               area = Math.PI * a * a;
               break;
               case "triangle":
               area = (a * b)/2;
               break;
              
    }
    console.log(area.toFixed(3));
    
    }
    areaOfFigures(["square",5]);
areaOfFigures(["rectangle",7,2.5]);
areaOfFigures(["circle",6]);
areaOfFigures(["triangle",4.5,20]);
/*Лица на фигури
Да се напише програма, в която получава като аргумент вида и размерите на геометрична фигура и
пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и
триъгълник (triangle). На първия ред на входа се чете вида на фигурата (square, rectangle, circle или
triangle). Ако фигурата е квадрат, на следващия ред се чете едно число - дължина на страната му. Ако
фигурата е правоъгълник, на следващите два реда четат две числа - дължините на страните му. Ако фигурата
е кръг, на следващия ред чете едно число - радиусът на кръга. Ако фигурата е триъгълник, на следващите два
реда четат две числа - дължината на страната му и дължината на височината към нея. Резултатът да се
закръгли до 3 цифри след десетичната точка.
Примерен вход и изход
вход  
square
5
изход
25.000 

вход
rectangle
7
2.5
изход
17.500 

вход
circle
6
изход
113.097 


вход
triangle
4.5
20
изход
45.000
          */