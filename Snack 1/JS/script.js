const arrayBiciclette = [
    {
        nome: 'bici1',
        peso: 20,
    },
    {
        nome: 'bici2',
        peso: 15,
    },
    {
        nome: 'bici3',
        peso: 16,
    },
    {
        nome: 'bici4',
        peso: 11,
    },
    {
        nome: 'bici5',
        peso: 12,   
    }
]
console.log(arrayBiciclette);
var weightMin = 50;
var biciLeggere=[];
//trovo il peso minore nell'array
for (let i = 0; i < arrayBiciclette.length; i++) {
    let pesos=arrayBiciclette[i].peso;
    console.log(pesos);

    if (pesos < weightMin) {
        weightMin = pesos;
    }
    console.log(weightMin);
}
for (let i = 0; i < arrayBiciclette.length; i++) {
    if (arrayBiciclette[i].peso == weightMin) {
        biciLeggere.push(arrayBiciclette[i]);
    }
    console.log(biciLeggere);
}

if(biciLeggere.length>1){
    console.log("le bici più leggere sono: ");
    for(let i=0;i<biciLeggere.length;i++)
    console.log(biciLeggere[i]);
}else{
    console.log("la bici più leggera è: ")
    console.log(biciLeggere[0]);
}