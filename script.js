//var nome = window.prompt('Olá, qual é o seu nome?')
   // document.write(`Olá, <strong>${nome}</strong>! `)
    
function carregar() {
    var nome = window.prompt('Olá, qual é o seu nome?')
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Olá, <strong>${nome}</strong>! agora são <strong>${hora}</strong> horas!`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'rgb(247, 203, 138)'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'fototarde.jpg'
        document.body.style.background = 'rgb(219, 160, 91)'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'rgb(13, 17, 216)'
    }
}