function animalType(input){
    let type = input.shift();
   switch(type){
       case"dog":
       console.log("mammal");
       break;
       case"crocodile":
       case"tortoise":
       case"snake":
       console.log("reptile");
       break;
       default:
           console.log("unknown")
   }


}
animalType(["dog"]);
animalType(["crocodile"]);
animalType(["cat"]);
/*Клас животно
Напишете програма, която отпечатва класа на животното според неговото име, въведено от потребителя.
1. dog -> mammal
2. crocodile, tortoise, snake -> reptile
3. others -> unknown
Примерен вход и изход
Вход 
dog 
Изход
mammal

вход
snake 
Изход
reptile

вход
cat 
Изход
unknown*/