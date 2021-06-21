//FOR (Formado por três partes) - Inicialização, condição e incremento

for (var i = 0; i <= 10; i++){
    console.log(`Devo ver essa mensagem enquanto ${i} for menor ou igual a 10`)
}

var bandas = ['Iron', 'Skidrow', 'Raimundos']

for (var posicao in bandas){
    console.log(posicao)
    console.log(bandas[posicao])
}

bandas.forEach(function(b) {
    console.log(b)
})