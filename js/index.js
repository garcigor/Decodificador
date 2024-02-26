let mensagemTexto = "";
let resultadoMensagem = "";
let mensagemResultado ="";
let copiadoComSucesso = false;

function criptografar(){
    mensagemResultado = mensagemTextoValidada.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");
    
    document.getElementById('textarea_result').innerHTML = mensagemResultado;
}

function descriptografar(){
    mensagemResultado = mensagemTextoValidada.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g,'a')
                                  .replace(/ober/g,'o')
                                  .replace(/ufat/g,'u')
                                
    document.getElementById('textarea_result').innerHTML = mensagemResultado;
}   

function validarMensagem(){
    mensagemTexto = document.getElementById('textarea_mensagem').value;

    if(mensagemTexto !== ""){
        mensagemTextoValidada = mensagemTexto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
        criptografar();
    }
    else{
        alert("Por favor preencher a caixa de texto com sua mensagem...");
    }
}

function copiar() {
    const textoCopiado = document.getElementById('textarea_result');
    const btCopy = document.getElementById('button_copy');

    btCopy.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(textoCopiado.value);
            btCopy.removeEventListener('click', copiar); // Remover o listener após a primeira cópia
        } catch (error) {
            console.error(error.name, error.message);
            alert("Não foi possível copiar o texto. Por favor, tente manualmente.");
        }
    });
}


function showMenu(){
    const sMenu = document.getElementById('nav__menu');
    
    if (sMenu.style.display == 'flex') {
        sMenu.style.display = 'none';
    }else{
        sMenu.style.display = 'flex';
    }
};

light.addEventListener('click', () => {
    document.documentElement.style.setProperty('--primary-color', '#FFFFFF');
    document.documentElement.style.setProperty('--secondary-color', '#121A21');
});

dark.addEventListener('click', () => {
    document.documentElement.style.setProperty('--secondary-color', '#FFFFFF');
    document.documentElement.style.setProperty('--primary-color', '#121A21');
});
