function passwordGuess(input){
    let password = input.shift();

    if(password ==="s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }


}
passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);
/*Познай паролата
Да се напише програма, която получава парола (един ред с произволен текст), получено като аргумент и
проверява, дали съвпада с фразата "s3cr3t!P@ssw0rd". 
При съвпадение да се изведе "Welcome". 
При несъвпадение да се изведе "Wrong password!".
Примерен вход и изход
вход 
qwerty 
изход
Wrong password! 

вход
s3cr3t!P@ssw0rd 
изход
Welcome 

вход
s3cr3t!p@ss 
изход
Wrong password!
                  */