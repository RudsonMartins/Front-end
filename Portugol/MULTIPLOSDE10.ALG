Algoritmo "multiplosDe10"
// Verifica se os valores de contador são múltiplos de 10

Var
   contador, result : inteiro

Inicio
   contador <- 0

   enquanto (contador <= 99) faca
      contador <- contador + 1
      result <- contador % 10  // Atualiza `result` com o novo valor de `contador`

      se (result = 0) entao
         escreval("Múltiplo de 10: ", contador)
      senao
         escreval("Não é múltiplo de 10: ", contador)
      fimse
   fimenquanto

Fimalgoritmo
itmo