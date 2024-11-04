Algoritmo "Escrever Números de Forma Inversa"
Var
   numeros: vetor[1..5] de inteiro
   i: inteiro

Inicio
   // Entrada dos números
   para i de 1 ate 5 faca
      escreva("Digite o ", i, "º número: ")
      leia(numeros[i])
   fimpara

   // Saída dos números de forma inversa
   escreva("Números em ordem inversa: ")
   para i de 5 ate 1 passo -1 faca
      escreva(numeros[i], " ")
   fimpara

Fimalgoritmo
