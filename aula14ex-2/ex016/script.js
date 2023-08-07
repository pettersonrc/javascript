function contar() {
    let res = document.getElementById('res')
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipasso')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'

        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)

        if(p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}