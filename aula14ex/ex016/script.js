function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO]! Preencha todos os espaços.')
    } else {
        for (c = inicio.value; c <= fim.value ; passo.value) {
            res.appendChild = (`${c}`)
        }
    }
}