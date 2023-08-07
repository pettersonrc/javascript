function tabuada() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('isel')

    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}