function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date()
    var hora = 3 //data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <= 12){
        img.src = 'dia-redondo.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora <=18){
        img.src = 'tarde-redonda.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite-redonda.png'
        document.body.style.background = '#515154'
    }
}

