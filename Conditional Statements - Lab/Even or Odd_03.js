function evenOrOdd(input){
let number = Number(input.shift());

if(number % 2===0){
    console.log("even");
}else{
    console.log("odd")
}
}
evenOrOdd([2]);
evenOrOdd([3]);
evenOrOdd([-1]);
evenOrOdd([1024]);
/*Четно или нечетно
Да се напише програма, която получава цяло число получено, като аргумент и отпечатва на конзолата, дали
е четно или нечетно.
Примерен вход и изход
вход  
2 
изход
even 

вход
3 
изход
odd 

вход
25 
изход
odd 

вход
1024 
изход
even          */