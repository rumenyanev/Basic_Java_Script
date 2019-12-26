function projectCreation(input){

    let nameArchitect = input.shift();
    let numProgects = Number(input.shift());

    let neededHours = Number(numProgects *3);

    console.log(`The architect ${nameArchitect} will need ${neededHours} hours to complete ${numProgects} project/s.`)

}
projectCreation(['George',4]);
projectCreation(['Sanya',9]);
/*Изготвяне на проекти
Напишете програма, която изчислява колко часове ще са необходими на един архитект, за да изготви
проектите на няколко строителни обекта. Изготвянето на един проект отнема приблизително три часа.
Вход
От конзолата се четат 2 реда:
1. Името на архитекта - текст
2. Брой на проектите - цяло число в интервала [0… 100]
Изход
На конзолата се отпечатва:
 'The architect {името на архитекта} will need {необходими часове} hours to complete
{брой на проектите} project/s.'
  Примерен вход и изход
вход  
George
4

изход
The architect George will
need 12 hours to complete
4 project/s.

вход
Sanya
9

изход
The architect Sanya will need 27
hours to complete 9 project/s.
          
          */