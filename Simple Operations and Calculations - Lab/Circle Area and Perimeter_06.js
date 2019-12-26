function circleAreaAndPerimeter(input){

    let r = Number(input.shift());

    let area = Math.PI * (r*r);
    let perimeter = 2 * (Math.PI * r);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));

}
circleAreaAndPerimeter([3]);
circleAreaAndPerimeter([4.5]);
/*Периметър и лице на кръг
Напишете програма, която изважда число r от аргумента input и пресмята и отпечатва лицето и
периметъра на кръг / окръжност с радиус r, като форматирате изхода до втория знак след десетичната
запетая.
Отпечатвайте на първия ред Area , а на втория Perimeter.
Примерен вход и изход

вход 
3 
изход
28.27
18.85

вход
4.5 

изход
63.62
28.27  
          */