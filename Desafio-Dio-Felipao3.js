// Escrevendo as classes de um Jogo

// Desafio da DIO do Bootacamp Ifod Potência Tech

//Objetivo: Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
class heroi{
    constructor(nome,idade,tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
}
//e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

    atacar(){
    let ataque;

   switch (this.tipo){
        case 'mago':
        ataque ='usou magia'
        break
        case 'guerreiro':
        ataque = 'usou espada'
        break
        case 'monge':
        ataque = 'usou artes marciais'
        break
        case 'ninja':
        ataque = 'usou shuriken'
        break
        default:
            ataque = 'usou um ataque genérico'
    }
console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
const heroi1 = new heroi('Gandalf', 1000, 'mago');
heroi1.atacar(); // Saída: O mago atacou usando magia

const heroi2 = new heroi('Aragorn', 35, 'guerreiro');
heroi2.atacar(); // Saída: O guerreiro atacou usando espada

