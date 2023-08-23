let num = document.getElementById('inum')
let res = document.getElementById('res')
let lista = document.getElementById('ilista')
let array = []

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    res.innerHTML = ''
    let n = Number(num.value)
    if (n < 1 || n > 100 || inLista(n, array)) {
        window.alert('Valor inválido ou já adicionado na lista!')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
        array.push(n)
    }
    num.value = ''
    num.focus() // Deixa o cursor focado no objeto
    
}

function maior() {
    let m = array[0]
    for (let n in array) {
        if (array[n] > m) {
            m = array[n]
        }
    }
    return m
}

function menor() {
    for (let n in array) {
        if (array[0]) {
            m = array[0]
        }
        if (array[n] < m) {
            m = array[n]
        }
    }
    return m
}

function somar() {
    let soma = 0
    for (let n in array) {
        soma = soma + array[n]
    }
    return soma
}

function media() {
    let soma = somar()
    m = soma / array.length
    return m
}

function finalizar() {
    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML += `<p> Ao todo, temos ${array.length} números cadastrados.`
        res.innerHTML += `<p> O maior valor informado foi ${maior()}.`
        res.innerHTML += `<p> O menor valor informado foi ${menor()}.`
        res.innerHTML += `<p> Somando todos os valores temos ${somar()}.`
        res.innerHTML += `<p> A média dos valores digitados é ${media()}.`
    }

}