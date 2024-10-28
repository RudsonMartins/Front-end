Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2024
Var
   // Seção de Declarações das variáveis
   pesodopeixe : inteiro
   multatotal : inteiro
   execesso:inteiro
   multa: inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite o Peso dos peixes")
   leia (pesodopeixe)
   execesso <- pesodopeixe -50
   multatotal <- (execesso * 4)
   se(pesodopeixe > 50)entao
      escreval("O valor de sua multa  ",multatotal)
   senao
      escreval("O peso é condizente com a lesgislação")
   fimse







Fimalgoritmo