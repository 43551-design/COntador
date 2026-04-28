let frases = [
    "luke, eu sou seu Pai! - Star Wars",
    "Vingadores, Avante! - vingadores Ultimato",
    "O que fazemos na vida, ecoa na eternidade - Gladiador",
    "Apenas por que não funciona, não quer dizer que ela não precisa ser aprimorada - Pantera Negra",
    "A felicidade pode ser encontrada mesmo nas horas mais difíceis, se você se lembrar de acender a luz. - Harry Potter",
    "Eu sou a Forma de Vida Perfeita -  Cell Dragon Ball",
    "Eu sou Ainz Ooal Gown, o Ser Supremo da Tumba de Nazarick - Overlord"
];
let cliques = 0; //variavel que conta número de cliques

function gerarFrases(){
    //sorteia um número entre 0 e a qtd de frases

    let indice = Math.floor(Math.random() * frases.length);

    //pega a frase escolhida
    let fraseEscolhida = frases[indice];

    //acrescenta o contador 
    cliques = cliques + 1;

    //mostra a frase nova 
    document.getElementById("frases").innerText = fraseEscolhida;

    //mostra o contador atualizado
    document.getElementById("contador").innerText = "Frases Geradas:" + cliques;
}