let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
      return true
    }else{
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adcionar(){
      if(isNumero(num.value) && ! inlista(num.value,valores)){
        window.alert('Tudo ok')
      }else{
        window.alert(`Valor inválido ou já encontrado na lista.`)
      }
}