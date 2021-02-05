function exibir_categoria(categoria) {
    let elementos = document.getElementsByClassName('produtos-blocos')
    console.log(elementos);
    for (var i=0; i<elementos.length; i++) {
        console.log(elementos[i].id);
        if (categoria == elementos[i].id)
            elementos[i].style = "display:block";
        else
            elementos[i].style = "display:none";
    }
}

let exibir_todos = () => {
    let elementos = document.getElementsByClassName('produtos-blocos')
    
    for (var i=0; i<elementos.length; i++) {
        elementos[i].style = "display:block";
        
    }
}
let destaque = (imagem) => {
    console.log(imagem);
    imagem.width = 240;
}
let imgpadrao = (imagem) => {
    imagem.width = 120;
}