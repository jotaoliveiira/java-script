function verificar(){
    var data = new Date ()
    var ano = data.getFullYear ()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.length ==0 || fano.value > ano) {
        window.alert  ('[ERRO] Verifique os dados e tente novamente')
      
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0]. checkVisibility) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
               img.setAttribute ('src', 'menino.jpg') 
            } else if (idade < 21){
                img.setAttribute ('src', 'jovem homem.jpg')
                
            } else if (idade < 50){
                img.setAttribute ('src', 'adulto.jpg')
                
            } else {
                img.setAttribute ('src', 'idoso.jpg')
            }
            

            
                
            
                
                



        } else if (fsex[1].checkVisibility) {
            genero = mulher
            if (idade >= 0 && idade < 10){
             img.setAttribute ('src', 'menina.jpg')    
               
            } else if (idade < 21){
                  
                //jovem
            } else if (idade < 50){
                //Adulto
                
            } else {
                
            }
        } 
        
        res.innerHTML = `Detectamos ${genero} com idade ${idade}`
        res.appendChild (img)
        
    }
}
