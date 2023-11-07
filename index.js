let i = 0
let vitorias = 0
let derrotas = 0
  
while (i < 150) {
    let saldo = calcularNivel (vitorias , derrotas)
    
    function calcularNivel (vit , der) {
        let resultado = vit - der
        let nivel = "Ferro"
        
        if (resultado < 11) {
            nivel = "Ferro"
            console.log ("O herói tem saldo de " + resultado + " vitórias e está no nível " + nivel + ".")
        } else if (resultado >= 11 && resultado < 21) {
            nivel = "Bronze"
            console.log ("O herói tem saldo de " + resultado + " vitórias e está no nível " + nivel + ".")
        } else if (resultado >= 21 && resultado < 51) {
            nivel = "Prata"
            console.log ("O herói tem saldo de " + resultado + " vitórias e está no nível " + nivel + ".")
        } else if (resultado >= 51 && resultado < 81) {
            nivel = "Ouro"
            console.log ("O herói tem saldo de " + resultado + " vitórias e está no nível " + nivel + ".")
        } else if (resultado >= 81 && resultado < 91) {
            nivel = "Diamante"
            console.log ("O herói tem saldo de " + resultado + " vitórias e está no nível " + nivel + ".")
        } else if (resultado >= 91 && resultado < 101) {
            nivel = "Lendário"
            console.log ("O herói tem saldo de " + resultado + " vitórias e está no nível " + nivel + ".")
        } else { 
            nivel = "Imortal"
            console.log ("O herói tem saldo do " + resultado + " vitórias e está no nível " + nivel + ".")
        }
               
        return resultado
    }
    
    i += 4
    vitorias += 4
    derrotas++
}

if (i>150) {
    console.log(" Você é um *** HIGHLANDER ***  (▀̿Ĺ̯▀̿ ̿) !!!")
}