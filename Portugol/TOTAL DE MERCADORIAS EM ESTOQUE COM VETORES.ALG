Algoritmo "Escrever N�meros de Forma Inversa"
Var
   numeros: vetor[1..5] de inteiro
   i: inteiro

Inicio
   // Entrada dos n�meros
   para i de 1 ate 5 faca
      escreva("Digite o ", i, "� n�mero: ")
      leia(numeros[i])
   fimpara

   // Sa�da dos n�meros de forma inversa
   escreva("N�meros em ordem inversa: ")
   para i de 5 ate 1 passo -1 faca
      escreva(numeros[i], " ")
   fimpara

Fimalgoritmo
