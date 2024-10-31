algoritmo "ClassificacaoNadador"

var
    idade : inteiro
    cadastros : inteiro

procedimento classificarCategoria(idade : inteiro)
inicio
    se (idade >= 5) e (idade <= 7) então
        escreva("Categoria: Infantil A")
    senao
        se (idade >= 8) e (idade <= 11) então
            escreva("Categoria: Infantil B")
        senao
            se (idade >= 12) e (idade <= 13) então
                escreva("Categoria: Juvenil A")
            senao
                se (idade >= 14) e (idade <= 17) então
                    escreva("Categoria: Juvenil B")
                senao
                    se (idade >= 18) então
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
    para cadastros de 1 até 5 faca
        escreva("Digite a idade do nadador: ")
        leia(idade)
        classificarCategoria(idade)
    fimenquanto
fimalgoritmo
