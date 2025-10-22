var  elemento
elemento= document.getElementById("titulo")
/*alert(elemento)*/
/*Exemplo 2  */
function Mudartitulo(){
    var titulo
    titulo = documento.getElementById("titulo")
    titulo.innerHTML= "Alterando o título via js"
}

/*Exemplo 3 */
function mudarestilo(){
    var titulo 
    titulo = document.getElementById("titulo")
    titulo.style.color="brown"
    titulo.style.backgroundColor ="beige"
    titulo.style.fontSize="68px"
}

/*Exemplo 4 */
function destacar(){
var titulo= document.getElementById("titulo")
titulo.classList.add("destacado")
}

/*Exemplo 5 */
function remover(){
    var titulo=  document.getElementById("titulo")
    titulo.classList.remove("destacado")
}

/*Exemplo 6 */
function alternar(){
    var titulo=  document.getElementById("titulo")
    titulo.classList.toggle("destacado")

}
/*Exemplo 7*/
function adicionartexto(){
    var novo
    novo=document.createElement("p")
    novo.id="paragrafo"
    novo.innerText="Novo parágrafo criado com js"

    var div= document.getElementById("container")
    div.appendChild(novo)
}
