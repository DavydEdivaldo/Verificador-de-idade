function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] confira os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
    
        if(fsex[0]. checked){
            genero = 'homem'
            if(idade >=0 && idade < 10){
                //criança
               img.setAttribute('src', 'imagens/criança-m.png')
            }else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            }else if(idade >=21 && idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            }else if(idade >=50){
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }else if(fsex[1]. checked){
            genero = 'mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criança-f.png')
            }else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            }else if(idade >=21 && idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            }else if(idade >=50){
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
    } res.innerHTML = `detectamos ${genero} com ${idade} anos `
    res.appendChild(img)
}