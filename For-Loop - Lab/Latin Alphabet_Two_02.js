function latinAlphabetTwo(){

    for (let ascii = 97; ascii <= 122 ; ascii++) {
        let symbol = String.fromCharCode(ascii);
        console.log(symbol);
    }
}
latinAlphabetTwo([]);
/*Всички латински букви
Напишете програма, която отпечатва всички букви от латинската азбука: a, b, c, …, z.*/