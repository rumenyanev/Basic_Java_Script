function password(input){
    let username = input.shift();
    let password = input.shift();

    let data = input.shift();
    while(data !== password){
        data = input.shift();
    }
console.log(`Welcome ${username}!`);

}
password(["Nakov",1234,"pass",1324,1234]);
password(["Gosho","secret","secret"]);

/*Парола
Напишете програма, която първоначално прочита име и парола на потребителски профил. След това чете
парола за вход, при въвеждане на грешна парола, потребителя да се подкани да въведе нова парола.
Примерен вход и изход
вход  
Nakov
1234
pass
1324
1234

изход
Welcome Nakov! 

вход
Gosho
secret
secret

изход
Welcome Gosho!
                    */