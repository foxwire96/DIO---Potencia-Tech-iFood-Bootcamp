// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let num1 = parseInt(gets(15));
let num2 = parseInt(gets(20));

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = num1*num2*100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");