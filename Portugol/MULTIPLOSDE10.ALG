Algoritmo "multiplosDe10"
// Verifica se os valores de contador s�o m�ltiplos de 10

Var
   contador, result : inteiro

Inicio
   contador <- 0

   enquanto (contador <= 99) faca
      contador <- contador + 1
      result <- contador % 10  // Atualiza `result` com o novo valor de `contador`

      se (result = 0) entao
         escreval("M�ltiplo de 10: ", contador)
      senao
         escreval("N�o � m�ltiplo de 10: ", contador)
      fimse
   fimenquanto

Fimalgoritmo
itmo