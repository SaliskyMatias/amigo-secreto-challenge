let amigos = [];

const agregarAmigo = () => {
    let amigo = document.getElementById('amigo').value;
    if(amigo === '') return alert('Por favor, inserte un nombre.');

    amigos.push(amigo);
    limpiarInput();
    listarAmigos();
}

const limpiarInput = () => {
    document.getElementById('amigo').value = '';
}

const listarAmigos = () => {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}

const sortearAmigo = () => {
    if(amigos.length === 0) return alert('No hay amigos para sortear');

    let indiceAleatorio = Math.floor((Math.random() * amigos.length ));
    const amigo = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigo}`;
    console.log(amigo); 
}