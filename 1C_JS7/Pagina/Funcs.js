let Vector = new Array(parseInt(prompt('ingrese la cantidad de elementos', '')));
let tamanio = Vector.length;

for(let i = 0; i < tamanio; i++){
    Vector[i] = ValorAleatorio(1,9);
}

Vector.forEach((value, index) =>
    document.write(value + ' ')
);
document.write('<br><br>El numero que mas se repite es: ' + Moda(Vector));

function Moda(vec){
    let moda = new Array()
    let max = 0, cuenta = 0;
    
    for(let i = 0; i < vec.length; i++){
        let item = vec[i];
        if(moda[item] == null){
            moda[item] = 1;
        }
        if(moda[item]){
            moda[item]++;
        }
        if(cuenta < moda[item]){
            max = item;
            cuenta = moda[item];
        }
    }
    return max;
}

function ValorAleatorio(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}