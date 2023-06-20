var hora = 3
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 5 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora > 18) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}