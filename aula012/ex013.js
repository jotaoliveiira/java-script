var agora = new Date ()
var diaSem = agora.getDate ()
/*
Pro JS
0= Domingo
1 Segunda
2 Terça
3 Quarta
4 Quinta
5 Sexta
6 Sábado

*/
console.log (diaSem)
switch (diaSem) {
    case 1:
        console.log(` Domingo`)
        break
    case 2 :
        console.log (`Segunda`)
        break
    case 3:
        console.log (`Terça`)
        break
    case 4:
        console.log (`Quarta`)
        break
    case 5:
        console.log (`QUinta`)
        break
    case 6 :
        console.log (`Sexta`) 
        break
    case 7 :
        console.log (`Sábado`)
        break
    default:
        console.log (`[ERRo] Dia inválido`)
        break
}
/* O JS contou igual a gnt msm */