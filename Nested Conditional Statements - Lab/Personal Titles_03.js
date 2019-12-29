function personalTitles(input){
    let age = Number(input.shift());
    let gender = input.shift();
    let title = "";
    if(age < 16){
        if(gender === "m"){
            title = "Master"
        }
        else if(gender ==="f"){
            title = "Miss";
        }

    }
    else if(age >= 16){
        if(gender ==="m"){
            title = "Mr.";
        }
        else if(gender ==="f"){
            title = "Ms.";
        }
    }
    console.log(title);

}
personalTitles([12,"f"]);
personalTitles([17,"m"]);
personalTitles([25,"f"]);
personalTitles([13.5,"m"]);
/*Обръщение според възраст и пол
Да се напише конзолна програма, която прочита възраст (реално число) и пол ("m" или "f"), въведени от
потребителя, и отпечатва обръщение измежду следните:
"Mr."– мъж (пол "m") на 16 или повече години
"Master"– момче (пол "m") под 16 години
"Ms."– жена (пол "f") на 16 или повече години
"Miss" – момиче (пол "f") под 16 години
Примерен вход и изход
вход   
12
f 
изход
Miss 

вход
17
m 
изход
Mr. 

вход
25
f 
изход
Ms. 

вход
13.5
m 
изход
Master
                */