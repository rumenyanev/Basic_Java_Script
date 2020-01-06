function oddEvenPosition(input) {
    let n = Number(input.shift());
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    let numbers = 0;
    for (let i = 1; i <= n; i++) {
        numbers = Number(input.shift());

        if (i % 2 == 0) {
            evenSum += numbers;
            if (numbers > evenMax) {
                evenMax = numbers;
            }
            if (numbers < evenMin) {
                evenMin = numbers;
            }

        } else {
            oddSum += numbers;
            if (numbers > oddMax) {
                oddMax = numbers;
            }
            if (numbers < oddMin) {
                oddMin = numbers;
            }


        }

    }


    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddMin == 0 || oddMax == 0) {
        console.log("No");
        console.log("No");
    } else if(numbers == 0){
        console.log("OddMin=No,");
        console.log("OddMax=No,");
    }
    else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenMax == 0 || evenMin == 0) {
        console.log("No");
        console.log("No");
    }  else if (numbers == 0|| n == 1) {
        console.log("EvenMin=No,");
        console.log("EvenMax=No");
    }
    
    else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}
oddEvenPosition([1,1])
/*
oddEvenPosition([6,2,3,5,4,2,1]); 
oddEvenPosition([2,1.5,-2.5]); 
oddEvenPosition([1,1]); 
oddEvenPosition([0]); 
oddEvenPosition([5,3,-2,8,11,-3]);
oddEvenPosition([4,1.5,1.75,1.5,1.75]);
oddEvenPosition([3,-1,-2,-3]);
/*Четни / нечетни позиции
Напишете програма, която чете n-на брой числа, въведени от потребителя, и пресмята сумата, минимума и
максимума на числата на четни и нечетни позиции (броим от 1). Когато няма минимален / максимален
елемент, отпечатайте "No".
Изходът да се форматира в следния вид:
"OddSum= "{сума на числата на нечетни позиции},
"OddMin= "{ минимална стойност на числата на нечетни позиции } / {“No”},
"OddMax= "{ максимална стойност на числата на нечетни позиции } / {“No”},
"EvenSum= " { сума на числата на четни позиции },
"EvenMin= " { минимална стойност на числата на четни позиции } / {“No”},
"EvenMax= " { максимална стойност на числата на четни позиции } / {“No”}
Всяко число трябва да е форматирано до втория знак след десетичната запетая.
Примерен вход и изход
вход
6
2
3
5
4
2
1

изход
OddSum=9.00,
OddMin=2.00,
OddMax=5.00,
EvenSum=8.00,
EvenMin=1.00,
EvenMax=4.00

вход
2
1.5
-2.5

изход
OddSum=1.50,
OddMin=1.50,
OddMax=1.50,
EvenSum=-2.50,
EvenMin=-2.50,
EvenMax=-2.50

вход
1
1

изход
OddSum=1.00,
OddMin=1.00,
OddMax=1.00,
EvenSum=0.00,
EvenMin=No,
EvenMax=No

вход
0

изход
OddSum=0.00,
OddMin=No,
OddMax=No,
EvenSum=0.00,
EvenMin=No,
EvenMax=No

вход
5
3
-2
8
11
-3

изход
OddSum=8.00,
OddMin=-3.00,
OddMax=8.00,
EvenSum=9.00,
EvenMin=-2.00,
EvenMax=11.00

вход
4
1.5
1.75
1.5
1.75

изход
OddSum=3.00,
OddMin=1.50,
OddMax=1.50,
EvenSum=3.50,
EvenMin=1.75,
EvenMax=1.75

вход
1
-5

изход
OddSum=-5.00,
OddMin=-5.00,
OddMax=-5.00,
EvenSum=0.00,
EvenMin=No,
EvenMax=No

вход
3
-1
-2
-3

изход
OddSum=-4.00,
OddMin=-3.00,
OddMax=-1.00,
EvenSum=-
2.00,
EvenMin=-
2.00,
EvenMax=-2.00


Задача обединява няколко предходни задачи: намиране на минимум, намиране на максимум, намиране на
сума и обработка на елементите от четни и нечетни позиции. Припомнете си ги.
                                                                                 */