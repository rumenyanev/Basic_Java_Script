function speedInfo(input){
    let speed = Number(input.shift());

    if(speed <= 10){
        console.log("slow");
    }else if (speed >10 && speed <= 50){
        console.log("average");
    }else if(speed > 50 && speed <=150){
        console.log("fast");
    }else if(speed >150 && speed <= 1000){
        console.log("ultra fast");
    }else if(speed > 1000){
        console.log("extremely fast")
    }
}
speedInfo([8]);
speedInfo([49.5]);
speedInfo([126]);
speedInfo([160]);
speedInfo([3500]);

/*Информация за скоростта
Да се напише програма, която чете скорост (реално число), въведена от потребителя и отпечатва
информация за скоростта. При скорост до 10 (включително) отпечатайте "slow". При скорост над 10 и до 50
отпечатайте "average". При скорост над 50 и до 150 отпечатайте "fast". При скорост над 150 и до 1000
отпечатайте "ultra fast". При по-висока скорост отпечатайте "extremely fast". 
Примери:
вход   
8 
изход
slow 

вход
49.5 
изход
average 

вход
126 
изход
fast 

вход
160 
изход
ultra fast

вход
3500 
изход
extremely fast
                */