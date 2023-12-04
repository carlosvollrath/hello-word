//INPUT
let nome = prompt("Digite o nome do seu Herói: ")
let xpDoHeroi = prompt("Quantos XP você têm? ")

//PROCESSAMENTO CONDICIONAL
let nivelDoHeroi

switch(xpDoHeroi < 1000){
    case nivelDoHeroi = "Ferro":
        console.log("Ferro")
    break
        case xpDoHeroi >= 1001 && xpDoHeroi <= 2000: 
        console.log("Bronze")
    break
        case nivelDoHeroi >= 2001 && xpDoHeroi <= 5000:
            console.log("Prata")
    break
            case nivelDoHeroi >= 6001 && xpDoHeroi <= 7000:
            console.log("Platina")
    break
            case nivelDoHeroi >= 8001 && xpDoHeroi <= 9000:
                console.log("Ascendente")
    break
                case nivelDoHeroi  >= 9001 && xpDoHeroi <= 10000:
                    console.log("Imortal")
    break
                    case nivelDoHeroi  >10.001 || xpDoHeroi == 10.001:
                    console.log("Radiante")

                    default:
                        console.log("sem nível")
}

//OUTPUT
console.log("O Herói de nome" + nome + "está no nível de" + nivelDoHeroi)

