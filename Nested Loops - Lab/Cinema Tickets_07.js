function cinemaTickets(input) {


    let nameMovie = "";

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTicket = 0;

    while (nameMovie !="Finish"){
        nameMovie = input.shift();
        let student = 0;
        let standard = 0;
        let kid = 0;

        if (nameMovie == "Finish"){
            break;
        }

        let typeTicket = +input.shift();
        for (let i = 0; i < typeTicket; i++){
            let currentPosition = input.shift();
            if (currentPosition == "student"){
                student++;
            }
            else if (currentPosition == "standard"){
                standard++;
            }

            else if (currentPosition == "kid"){
                kid++;
            }
            else if (currentPosition == "End"){
                break;
            }
        
        }
        studentTicket += student;
        standardTicket += standard;
        kidTicket += kid;

        console.log(`${nameMovie} - ${(((student + standard + kid) /typeTicket) * 100).toFixed(2)}% full.`);
        
    }

    totalTicket = studentTicket + standardTicket + kidTicket;

    console.log(`Total tickets: ${totalTicket}`);

    console.log(`${((studentTicket / totalTicket) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTicket / totalTicket) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicket / totalTicket) * 100).toFixed(2)}% kids tickets.`);

}






cinemaTickets(["Taxi", 10, "standard", "kid", "student", "student", "standard", "standard", "End",
    "Scary Movie", 6, "student", "student", "student", "student", "student", "student", "Finish"]);
/*cinemaTickets(["kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", 17, "student", "standard",
    "standard", "student", "standard", "student", "End", "Amadeus", 3, "standard", "standard", "standard", "Finish"]);
/**Билети за кино
Вашата задача е да напишете програма, която да изчислява процента на билетите
за всеки тип от продадените билети:
 студентски(student),
 стандартен(standard) и
 детски(kid),
 за всички прожекции.
 Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.
Вход
Входът е поредица от цели числа и текст:

 На първия ред до получаване на командата "Finish" - име на филма – текст

 На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]

 За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":

o Типа на закупения билет - текст ("student", "standard", "kid")

Изход
На конзолата трябва да се печатат следните редове:
 След всеки филм да се отпечата, колко процента от кино залата е пълна
"{името на филма} - {процент запълненост на залата}% full."
 При получаване на командата "Finish" да се отпечатат четири реда:
o "Total tickets: {общият брой закупени билети за всички филми}"
o "{процент на студентските билети}% student tickets."
o "{процент на стандартните билети}% standard tickets."
o "{процент на детските билети}% kids tickets."

Примерен вход и изход
Вход
Taxi
10
standard
kid
student
student
standard
standard
End
Scary Movie
6
student
student
student
student
student
student
Finish


Изход
Taxi - 60.00% full.
Scary Movie - 100.00% full.
Total tickets: 12
66.67% student tickets.
25.00% standard tickets.
8.33% kids tickets.


Обяснения
Първи филм – Taxi, местата в залата са 10
Купуват се 3 стандарти, 2 студентски, 1 детски билет
и получаваме командата End.
Общо 6 билета от 10 места -&gt; 60% от залата е заета.
Втори филм – Scary Movie, места в залата са 6
Купуват се 6 студентски билета и местата в залата
свършват.
Общо 6 билета от 6 места -&gt; 100% от залата е заета.
Получаваме командата Finish
Общо закупените билети за всички филми са 12.
За всички филми са закупени общо:
8 студентски билета. 8 билета от общо 12 е 66.67%
3 стандартни билета. 3 билета от общо 12 е 25%
1 детски билет. 1 билет от общо 12 е 8.33%

Вход
The Matrix
20
student
standard


Изход
The Matrix - 40.00% full.
The Green Mile - 35.29% full.
Amadeus - 100.00% full.
Total tickets: 17


Обяснения
Първи филм – The Matrix, местата в залата са 20
Купуват се 2 стандартни, 4 студентски, 2 детски
билета и получаваме командата End.


Вход
kid
kid
student
student
standard
student
End
The Green Mile
17
student
standard
standard
student
standard
student
End
Amadeus
3
standard
standard
standard
Finish


Изход
41.18% student tickets.
47.06% standard tickets.
11.76% kids tickets.


Обяснения
Общо 8 билета от 20 места -&gt; 41.18% от залата е заета
Втори филм - The Green Mile, местата в залата са 17
Купуват се 3 стандартни, 3 студентски билета и
получаваме командата End.
Общо 6 билета от 17 места -&gt; 47.06% от залата е заета
Трети филм – Amadeus, местата в залата са 3
Купуват се 3 стандартни билета и местата в залата
свършват.
Общо 3 билета от 3 места -&gt; 100% от залата е заета.
Получаваме командата Finish
Общо закупените билети за всички филми са 17.
За всички филми са закупени общо:
7 студентски билета. 7 билета от общо 17 е 41.18%
8 стандартни билета. 8 билета от общо 17 е 47.06%
2 детски билета. 2 билета от общо 17 е 11.76%*/