let valores = [8, 1, 7, 4, 2, 9]

/*console.log(valores)

for (var valor = 1; valor < valores.length;valor++){
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}