function areaOfFigures(input){
    let figure = input.shift();
    let area;
    switch(figure){
        case "square":
            let size = Number(input.shift());
             area = size * size;
            console.log(area.toFixed(3));
            break;
            case "rectangle":
            let length = Number(input.shift());
            let width = Number(input.shift());
             area = length * width;
            console.log(area.toFixed(3));
            break;
            case "circle":
            let radius = Number(input.shift());
             area = Math.PI * radius * radius;
            console.log(area.toFixed(3));
            break;
            case "triangle":
            let height = Number(input.shift());
            let base = Number(input.shift());
            area = (height * base)/2 ;
            console.log(area.toFixed(3));
            break;
    }

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