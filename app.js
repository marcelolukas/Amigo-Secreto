let amigos = []

function adicionarAmigo(){
    let campo = document.getElementById('amigo');
    let nomeAmigo = campo.value.trim();

    if (nomeAmigo === ""){
        alert ('Por favor, digite o nome de um amigo!');

    } else {
        amigos.push(nomeAmigo);

        campo.value = "";

        console.log ('Lista de amigos', amigos);    
    }
}

adicionarAmigo();

function sortearAmigo(){
    if ( amigos ==""){
        
        alert('Você não adicionou nenhum amigo...');
        alert ('por favor, digite o nome de um amigo!');
    
    } else {
        let nomeAleatorio = amigos [Math.floor(Math.random() * amigos.length)];
        console.log(nomeAleatorio);
        
        function exibirTextonaTela(tag,texto){
            let elemento = document.querySelector(tag);
            elemento.innerHTML = texto;
        }
        
        function exibirMenssagemInicial (){
            exibirTextonaTela ('h2', `Você Tirou ${nomeAleatorio}`);
        }
        
        exibirMenssagemInicial();
    }
}
