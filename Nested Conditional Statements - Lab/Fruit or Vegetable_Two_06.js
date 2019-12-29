function fruitOrVegetable(input){
    let product = input.shift();


    if (product === "banana" || product === "apple"
            || product === "kiwi" || product === "cherry"
            || product === "lemon" ||product === "grapes") {
        console.log("fruit");
    } else if (product === "tomato" || product === "cucumber"
            || product === "pepper" || product ==="carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
}
}
fruitOrVegetable(["lemon"]);
fruitOrVegetable(["orange"]);
fruitOrVegetable(["pepper"]);
/*Плод или зеленчук?
Да се напише програма, която приема входен аргумент input и от него изважда име на продукт, и
проверява дали е плод или зеленчук.
 Плодовете "fruit" имат следните възможни стойности: banana, apple, kiwi, cherry, lemon и grapes
 Зеленчуците "vegetable" имат следните възможни стойности: tomato, cucumber, pepper и carrot
 Всички останали са "unknown"
Да се изведе "fruit", "vegetable" или "unknown" според въведения продукт.
Примерен вход и изход
вход 
banana 
изход
fruit 

вход
apple 
изход
fruit 

вход
tomato 
изход
vegetable 

вход
water 
изход
unknown
               */