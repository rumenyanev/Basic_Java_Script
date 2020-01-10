function tradeCommissions(input){
    let town = input.shift();
    let sales = Number(input.shift());
    let commission = 0;


    if ("Sofia" == town) {
        if (sales >= 0 && sales <= 500) {
            commission = 0.05;
            let total = sales * commission;
           console.log (total.toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.07;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.08;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else if (sales > 10000) {
            commission = 0.12;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else {
            console.log("error");
        }

    } else if ("Varna" === town) {
        if (sales >= 0 && sales <= 500) {
            commission = 0.045;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.075;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.1;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else if (sales > 10000) {
            commission = 0.13;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else {
            console.log("error");
        }
    } else if ("Plovdiv" == town) {
        if (sales >= 0 && sales <= 500) {
            commission = 0.055;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.08;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.12;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else if (sales > 10000) {
            commission = 0.145;
            let total = sales * commission;
            console.log(total.toFixed(2));
        } else {
          console.log("error");
        }
    }else {
        console.log("error");
    }
}
tradeCommissions(["Bourgas",1500])
tradeCommissions(["Sofia",1500]);
tradeCommissions(["Plovdiv",499.99]);
tradeCommissions(["Varna",3874.50]); 
tradeCommissions(["Kaspichan",-50]);
/*Търговски комисионни
Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:

Град    0 ≤ s ≤ 500     500 < s ≤ 1 000     1 000 < s ≤ 10 000     s > 10 000
Sofia       5%                7%                    8%                   12%
Varna       4.5%              7.5%                  10%                  13%
Plovdiv     5.5%              8%                    12%                  14.5%

Напишете конзолна програма, която приема входен аргумент input и извадете от него име на град (стринг) и
обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната
таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или
обем на продажбите (отрицателно число) да се отпечата "error".
Примерен вход и изход
вход  
Sofia
1500 

изход
120.00 

вход
Plovdiv
499.99 

изход
27.50 

вход
Varna
3874.50 

изход
387.45 

вход
Kaspichan
-50 
изход
error

*/