algoritmo "ClassificacaoNadador"
var
   idade : inteiro

procedimento classificarCategoria(idade : inteiro)
inicio
   se (idade >= 5) e (idade <= 7) entao
      escreva("Categoria: Infantil A")
   senao
      se (idade >= 8) e (idade <= 11) entao
         escreva("Categoria: Infantil B")
      senao
         se (idade >= 12) e (idade <= 13) entao
            escreva("Categoria: Juvenil A")
         senao
            se (idade >= 14) e (idade <= 17) entao
               escreva("Categoria: Juvenil B")
            senao
               se (idade >= 18) entao
                  escreva("Categoria: Adultos")
               senao
                  escreva("Idade fora das categorias")
               fimse
            fimse
         fimse
      fimse
   fimse
fimprocedimento

inicio
   escreva("Digite a idade do nadador: ")
   leia(idade)


   classificarCategoria(idade)
fimalgoritmo
