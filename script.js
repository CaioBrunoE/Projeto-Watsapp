
const icone =document.getElementById('icon07')

icone.addEventListener('click', () => {

    alert("Menssagem enviada");

})

const mensagem = document.getElementsByClassName('pagina2')

for(let i=0; i< mensagem.length; i++){

    mensagem[i].addEventListener('click',() => {
        window.location.href='pagina2.html';
    })
}


const pagina3 = document.getElementsByClassName('pagina3')

for(let i=0; i< pagina3.length; i++){

    pagina3[i].addEventListener('click',() => {
        window.location.href='pagina3.html';
    })

}


const pagina4 = document.getElementsByClassName('pagina4')

for(let i=0; i< pagina4.length; i++){

    pagina4[i].addEventListener('click',() => {
        window.location.href='pagina4.html';
    })

}
    