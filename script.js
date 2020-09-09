function carregar(){
    var msg = window.document.querySelector("div#msg")
    var imagem = window.document.querySelector("img#imagem")
    var data =  new Date()
    var hora = data.getHours()
    
    if(hora >= 0 && hora <= 12){
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
       imagem.src = "img/manha.png"
       window.document.body.style.backgroundColor = "#fdce73"
    }else if( hora > 12 && hora < 18){
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        imagem.src = "img/tarde.png"
        window.document.body.style.backgroundColor = "#1b72b4"
    }else{
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        imagem.src = "img/noite.png"
        window.document.body.style.backgroundColor = "#32284d"
    }
}