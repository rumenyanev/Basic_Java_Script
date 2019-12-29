function fruitOrVegetable(input){
    let product = input.shift();

    switch(product){
        case"banana":
        case"apple":
        case"kiwi":
       case"cherry":
        case"lemon":
        case"grapes":
        console.log("fruit");
        break;
        case "tomato":
            case"cucumber":
            case"pepper":
            case"carrot":
            console.log("vegetable");
            break;
            default:
                console.log("unknown");
                break; 
    }
}
fruitOrVegetable(["banana"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);
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